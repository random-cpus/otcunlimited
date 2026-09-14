import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeGlobeHero: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    
    const updateCamera = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      const aspect = width / height;
      camera.aspect = aspect;
      // Generous buffer distance so orbital rings never clip at extreme tilts or small screens
      camera.position.z = aspect < 1 ? Math.max(260, 240 / aspect) : 255;
      camera.updateProjectionMatrix();
    };
    updateCamera();

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    // Group for whole globe to handle mouse tilt & rotation
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. Structured Particle Grid Sphere (Latitude / Longitude distribution matching screenshot)
    const particleCount = 2800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const radius = 68;

    const cyanColor = new THREE.Color('#00f0ff');
    const purpleColor = new THREE.Color('#b353f8');

    for (let i = 0; i < particleCount; i++) {
      // Golden Spiral / Fibonacci distribution for uniform, elegant point lattice
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Checkerboard/spiral color pattern matching the screenshot
      const isCyan = (i % 2 === 0 && Math.sin(phi * 6) > 0) || (i % 3 === 0);
      const chosenColor = isCyan ? cyanColor : purpleColor;

      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    globeGroup.add(particles);

    // 2. Exact Smooth Glowing Orbital Lines (Cyan & Purple Rings)
    // Ring 1: Cyan Orbit Ring
    const ring1Radius = 78;
    const ring1TubeRadius = 0.55;
    const ring1Geometry = new THREE.TorusGeometry(ring1Radius, ring1TubeRadius, 32, 240);
    const ring1Material = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.95,
      wireframe: false,
      blending: THREE.AdditiveBlending
    });
    const ring1 = new THREE.Mesh(ring1Geometry, ring1Material);
    
    // Outer subtle glow halo for Ring 1
    const ring1GlowGeometry = new THREE.TorusGeometry(ring1Radius, ring1TubeRadius * 2.2, 16, 200);
    const ring1GlowMaterial = new THREE.MeshBasicMaterial({
      color: 0x00c8ff,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending
    });
    const ring1Glow = new THREE.Mesh(ring1GlowGeometry, ring1GlowMaterial);
    ring1.add(ring1Glow);

    // Initial tilt of Cyan Ring
    ring1.rotation.x = Math.PI / 3.2;
    ring1.rotation.y = Math.PI / 4.8;
    globeGroup.add(ring1);

    // Ring 2: Purple Orbit Ring
    const ring2Radius = 84;
    const ring2TubeRadius = 0.55;
    const ring2Geometry = new THREE.TorusGeometry(ring2Radius, ring2TubeRadius, 32, 240);
    const ring2Material = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.95,
      wireframe: false,
      blending: THREE.AdditiveBlending
    });
    const ring2 = new THREE.Mesh(ring2Geometry, ring2Material);

    // Outer subtle glow halo for Ring 2
    const ring2GlowGeometry = new THREE.TorusGeometry(ring2Radius, ring2TubeRadius * 2.2, 16, 200);
    const ring2GlowMaterial = new THREE.MeshBasicMaterial({
      color: 0x9333ea,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending
    });
    const ring2Glow = new THREE.Mesh(ring2GlowGeometry, ring2GlowMaterial);
    ring2.add(ring2Glow);

    // Initial tilt of Purple Ring
    ring2.rotation.x = -Math.PI / 3.6;
    ring2.rotation.y = -Math.PI / 4.2;
    globeGroup.add(ring2);

    // Mouse follow physics
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    };

    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      if (!container) return;
      updateCamera();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId: number;
    let elapsed = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      elapsed += 0.01;

      // Smooth mouse tilt
      targetX += (mouseX * 0.45 - targetX) * 0.05;
      targetY += (mouseY * 0.45 - targetY) * 0.05;

      // Slowly rotate particle sphere
      particles.rotation.y = elapsed * 0.12 + targetX;
      particles.rotation.x = targetY * 0.5;

      // Orbital rotation of the rings
      ring1.rotation.z = elapsed * 0.06;
      ring2.rotation.z = -elapsed * 0.05;

      globeGroup.rotation.y = targetX * 0.3;
      globeGroup.rotation.x = -targetY * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      particleMaterial.dispose();
      ring1Geometry.dispose();
      ring1Material.dispose();
      ring1GlowGeometry.dispose();
      ring1GlowMaterial.dispose();
      ring2Geometry.dispose();
      ring2Material.dispose();
      ring2GlowGeometry.dispose();
      ring2GlowMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[460px] md:h-[540px] flex items-center justify-center pointer-events-none select-none">
      <div ref={mountRef} className="absolute inset-0 w-full h-full pointer-events-auto" />
      {/* Dynamic ambient glowing light behind the sphere */}
      <div className="absolute w-[260px] h-[260px] bg-cyan-500/20 dark:bg-cyan-500/15 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute w-[240px] h-[240px] bg-purple-500/20 dark:bg-purple-500/15 rounded-full blur-[90px] pointer-events-none" />
    </div>
  );
};

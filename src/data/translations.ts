
export type LanguageCode = 'US' | 'RU' | 'IN' | 'CN';

export interface TranslationSchema {
  nav: {
    features: string;
    currencies: string;
    contact: string;
    book: string;
  };
  hero: {
    badgeTop: string;
    badgePresents: string;
    titleStart: string;
    titleHighlight: string;
    description: string;
    ctaTelegram: string;
    ctaDiscovery: string;
    statVolume: string;
    statVolumeDesc: string;
    statCurrencies: string;
    statCurrenciesDesc: string;
    statSpeed: string;
    statSpeedDesc: string;
    statSla: string;
    statSlaDesc: string;
  };
  features: {
    badge: string;
    title: string;
    subtitle: string;
    cards: {
      title: string;
      desc: string;
    }[];
  };
  currencies: {
    badge: string;
    title: string;
    subtitle: string;
    moreText: string;
    customRailCta: string;
  };
  trust: {
    badge: string;
    title: string;
    subtitle: string;
    points: {
      title: string;
      desc: string;
    }[];
    cardPspTitle: string;
    cardPspDesc: string;
    cardGamingTitle: string;
    cardGamingDesc: string;
    slaLabel: string;
    slaValue: string;
    connectBtn: string;
  };
  cta: {
    title: string;
    subtitle: string;
    btnTelegram: string;
    btnDiscovery: string;
    footerAnonymity: string;
    footerResponse: string;
    footerVolume: string;
  };
  bookingModal: {
    headerTitle: string;
    step1Question: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    step2Subtitle: string;
    nicknameLabel: string;
    nicknamePlaceholder: string;
    telegramLabel: string;
    telegramPlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    preferredTimeLabel: string;
    backBtn: string;
    nextBtn: string;
    confirmedTitle: string;
    confirmedSubtitle: string;
    telegramBoxText: string;
    doneBtn: string;
  };
  footer: {
    tagline: string;
    corridors: string;
    rights: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationSchema> = {
  US: {
    nav: {
      features: 'Features',
      currencies: 'Currencies',
      contact: 'Contact',
      book: 'Book'
    },
    hero: {
      badgeTop: '9 Years of Trust & Excellence',
      badgePresents: 'TCI PRESENTS',
      titleStart: 'Seamless',
      titleHighlight: 'USDT OTC Trading',
      description: 'The most seamless, pre-funded or instant, iGaming OTC provider for PSPs in 30+ currencies. Full anonymity in every transaction. Ultra transparent communications and 24 hour problem solving guarantee.',
      ctaTelegram: 'Reach Out on Telegram',
      ctaDiscovery: 'Schedule Discovery Call',
      statVolume: 'Yearly USDT Volume',
      statVolumeDesc: 'Handled with precision',
      statCurrencies: 'Currencies Supported',
      statCurrenciesDesc: 'Seamless global settlement',
      statSpeed: 'Ultra-Fast Settlement',
      statSpeedDesc: 'Pre-Funded / Instant (< 3 mins)',
      statSla: 'Problem Solving Guarantee',
      statSlaDesc: '24-hour response SLA'
    },
    features: {
      badge: 'Handled with precision',
      title: 'Why Choose OTC Unlimited',
      subtitle: 'The trusted choice for leading PSPs and iGaming operators worldwide',
      cards: [
        {
          title: 'Pre-Funded USDT',
          desc: 'No delays. Our liquidity pools are ready for instant settlements at any scale with pre-funded reserves.'
        },
        {
          title: 'Full Visibility',
          desc: 'Full visibility into every transaction. Real-time reporting and complete audit trails.'
        },
        {
          title: 'Enterprise Security',
          desc: 'Bank-grade security protocols protecting every transaction around the clock.'
        },
        {
          title: '24/7 Dedicated Support',
          desc: 'Dedicated account managers available whenever you need them. No bots, real experts.'
        },
        {
          title: 'Ultra-Fast Settlement',
          desc: 'Lightning-quick processing times. Get your funds when you need them.'
        },
        {
          title: 'Full Anonymity & Compliance',
          desc: 'Complete privacy in every transaction. Operating within established frameworks. Your identity and operations remain fully confidential.'
        }
      ]
    },
    currencies: {
      badge: '30+ Currencies',
      title: 'Seamless USDT Settlements Across World Major Currencies',
      subtitle: 'Pre-funded local liquidity pools for instant player withdrawals and processor settlements.',
      moreText: 'And 18+ more currencies supported worldwide.',
      customRailCta: 'Request custom settlement currency rail'
    },
    trust: {
      badge: 'Trusted by Industry Leaders',
      title: 'Top iGaming Operators & PSPs Choose Us',
      subtitle: 'From global payment processors to leading gaming platforms, enterprises trust OTC Unlimited for their high-volume USDT operations.',
      points: [
        {
          title: 'Built for Institutional Volume',
          desc: 'Engineered for high-volume transactions and strict compliance requirements.'
        },
        {
          title: 'Scalable Infrastructure',
          desc: 'Handle billions in volume without missing a beat across 30+ regional bank corridors.'
        },
        {
          title: '24-Hour Problem Solving Guarantee',
          desc: 'Direct escalation to trading directors with immediate resolution commitment.'
        }
      ],
      cardPspTitle: 'Payment Processors',
      cardPspDesc: 'Pre-funded escrow corridors eliminate multi-day wire hold delays for global merchant payouts.',
      cardGamingTitle: 'iGaming Platforms',
      cardGamingDesc: 'Instant high-frequency player cashouts in local currencies with zero chargeback and complete privacy.',
      slaLabel: 'Institutional Onboarding SLA',
      slaValue: 'Private Telegram Desk in < 15 Mins',
      connectBtn: 'Connect Now'
    },
    cta: {
      title: 'Ready to Experience the Most Seamless OTC Service?',
      subtitle: 'Our team is standing by 24/7. Get a direct response within 24 hours guaranteed.',
      btnTelegram: 'Reach Out on Telegram',
      btnDiscovery: 'Schedule Discovery Call',
      footerAnonymity: 'Full Anonymity & Compliance',
      footerResponse: 'Get a response within 24 hours',
      footerVolume: '$30B+ Yearly Volume'
    },
    bookingModal: {
      headerTitle: 'Book Appointment',
      step1Question: 'What type of business are you?',
      card1Title: 'OTC, Liquidity Provider',
      card1Desc: 'For OTC trading services',
      card2Title: 'PSP looking for OTC',
      card2Desc: 'Payment Service Provider',
      step2Subtitle: 'Please provide your contact details',
      nicknameLabel: 'Nickname',
      nicknamePlaceholder: 'Your nickname',
      telegramLabel: 'Telegram Username',
      telegramPlaceholder: '@username',
      companyLabel: 'Company Nickname',
      companyPlaceholder: 'Your company name',
      preferredTimeLabel: 'Preferred Time',
      backBtn: 'Back',
      nextBtn: 'Next',
      confirmedTitle: 'Booking Confirmed!',
      confirmedSubtitle: 'Looking forward to our discussion.',
      telegramBoxText: 'In the meantime, feel free to message us on Telegram:',
      doneBtn: 'Done'
    },
    footer: {
      tagline: 'The most seamless OTC experience for PSPs and iGaming operators worldwide.',
      corridors: 'INR, EUR, CAD, BRL, AED, TRY and more.',
      rights: 'All rights reserved.'
    }
  },

  RU: {
    nav: {
      features: 'Функции',
      currencies: 'Валюты',
      contact: 'Контакты',
      book: 'Book'
    },
    hero: {
      badgeTop: '9 Лет Доверия и Превосходства',
      badgePresents: 'TCI ПРЕДСТАВЛЯЕТ',
      titleStart: 'Бесшовный',
      titleHighlight: 'OTC Трейдинг USDT',
      description: 'Самый удобный, предварительно финансируемый или мгновенный OTC-провайдер для iGaming PSP в 30+ валютах. Полная анонимность в каждой транзакции. Ультрапрозрачная коммуникация и гарантия решения проблем в течение 24 часов.',
      ctaTelegram: 'Напишите в Telegram',
      ctaDiscovery: 'Запланировать звонок',
      statVolume: 'Годовой Объём USDT',
      statVolumeDesc: 'Выполнено с точностью',
      statCurrencies: 'Поддерживаемых Валют',
      statCurrenciesDesc: 'Бесшовные мировые расчеты',
      statSpeed: 'Сверхбыстрый Расчет',
      statSpeedDesc: 'Предфинансирование (< 3 мин)',
      statSla: 'Гарантия Решения Проблем',
      statSlaDesc: 'Регламент ответа 24 часа'
    },
    features: {
      badge: 'Выполнено с точностью',
      title: 'Почему Выбирают OTC Unlimited',
      subtitle: 'Надёжный выбор ведущих PSP и операторов iGaming по всему миру',
      cards: [
        {
          title: 'Предфинансированный USDT',
          desc: 'Никаких задержек. Наши пулы ликвидности готовы к мгновенным расчетам в любых масштабах.'
        },
        {
          title: 'Полная Прозрачность',
          desc: 'Полная видимость каждой транзакции. Отчеты в реальном времени и аудиторские журналы.'
        },
        {
          title: 'Корпоративная Безопасность',
          desc: 'Протоколы банковского уровня защищают каждую транзакцию круглосуточно.'
        },
        {
          title: 'Поддержка 24/7',
          desc: 'Персональные менеджеры аккаунтов всегда на связи. Никаких ботов, только эксперты.'
        },
        {
          title: 'Сверхбыстрые Расчеты',
          desc: 'Молниеносная скорость обработки. Получайте свои средства тогда, когда они нужны.'
        },
        {
          title: 'Полная Анонимность и Комплаенс',
          desc: 'Абсолютная конфиденциальность. Ваша личность и операции остаются защищенными.'
        }
      ]
    },
    currencies: {
      badge: '30+ Валют',
      title: 'Бесшовные расчёты USDT в основных мировых валютах',
      subtitle: 'Предварительно финансируемые локальные пулы ликвидности для мгновенных выплат.',
      moreText: 'И более 18 дополнительных мировых валют.',
      customRailCta: 'Запросить индивидуальный валютный коридор'
    },
    trust: {
      badge: 'Доверие Лидеров Отрасли',
      title: 'Нас Выбирают Топовые Операторы iGaming и PSP',
      subtitle: 'От глобальных платёжных процессоров до ведущих игровых платформ — предприятия доверяют OTC Unlimited свои крупные операции с USDT.',
      points: [
        {
          title: 'Создано для Институциональных Объемов',
          desc: 'Разработано для крупных транзакций и строгих стандартов безопасности.'
        },
        {
          title: 'Масштабируемая Инфраструктура',
          desc: 'Обработка миллиардных объемов без сбоев в 30+ региональных банковских коридорах.'
        },
        {
          title: 'Гарантия Решения Проблем 24 Часа',
          desc: 'Прямая эскалация директорам казначейства с обязательством быстрого решения.'
        }
      ],
      cardPspTitle: 'Платежные Провайдеры (PSP)',
      cardPspDesc: 'Предфинансированные эскроу-коридоры устраняют многодневные задержки межбанковских переводов.',
      cardGamingTitle: 'Платформы iGaming',
      cardGamingDesc: 'Мгновенные выплаты игрокам в местных валютах с нулевыми чарджбэками и полной анонимностью.',
      slaLabel: 'Регламент Онбординга',
      slaValue: 'Приватный Telegram-деск за < 15 минут',
      connectBtn: 'Подключиться'
    },
    cta: {
      title: 'Готовы испытать самый удобный OTC-сервис?',
      subtitle: 'Наша команда ждёт вас 24/7. Гарантированный ответ в течение 24 часов.',
      btnTelegram: 'Напишите в Telegram',
      btnDiscovery: 'Запланировать звонок',
      footerAnonymity: 'Полная анонимность',
      footerResponse: 'Ответ в течение 24 часов',
      footerVolume: 'Объем $30B+ в год'
    },
    bookingModal: {
      headerTitle: 'Запись на прием',
      step1Question: 'Какой у вас тип бизнеса?',
      card1Title: 'OTC, Провайдер Ликвидности',
      card1Desc: 'Для услуг OTC трейдинга',
      card2Title: 'PSP в поиске OTC',
      card2Desc: 'Платежный сервис-провайдер',
      step2Subtitle: 'Пожалуйста, укажите ваши контактные данные',
      nicknameLabel: 'Никнейм',
      nicknamePlaceholder: 'Ваш никнейм',
      telegramLabel: 'Telegram Юзернейм',
      telegramPlaceholder: '@username',
      companyLabel: 'Название Компании',
      companyPlaceholder: 'Название вашей компании',
      preferredTimeLabel: 'Удобное Время',
      backBtn: 'Назад',
      nextBtn: 'Далее',
      confirmedTitle: 'Запись Подтверждена!',
      confirmedSubtitle: 'С нетерпением ждем нашего обсуждения.',
      telegramBoxText: 'А пока вы можете написать нам в Telegram:',
      doneBtn: 'Готово'
    },
    footer: {
      tagline: 'Самый удобный OTC-опыт для PSP и операторов iGaming по всему миру.',
      corridors: 'INR, EUR, CAD, BRL, AED, TRY и другие.',
      rights: 'Все права защищены.'
    }
  },

  IN: {
    nav: {
      features: 'विशेषताएं',
      currencies: 'मुद्राएं',
      contact: 'संपर्क',
      book: 'Book'
    },
    hero: {
      badgeTop: '9 वर्षों का विश्वास और उत्कृष्टता',
      badgePresents: 'TCI प्रस्तुत करता है',
      titleStart: 'सहज',
      titleHighlight: 'USDT OTC ट्रेडिंग',
      description: '30+ मुद्राओं में PSP के लिए सबसे सहज, पूर्व-वित्त पोषित या तत्काल, iGaming OTC प्रदाता। हर लेनदेन में पूर्ण गोपनीयता। अत्यंत पारदर्शी संचार और 24 घंटे की समस्या समाधान गारंटी।',
      ctaTelegram: 'Telegram पर संपर्क करें',
      ctaDiscovery: 'डिस्कवरी कॉल शेड्यूल करें',
      statVolume: 'वार्षिक USDT वॉल्यूम',
      statVolumeDesc: 'सटीकता के साथ प्रबंधित',
      statCurrencies: 'समर्थित मुद्राएं',
      statCurrenciesDesc: 'सहज वैश्विक निपटान',
      statSpeed: 'अल्ट्रा-फास्ट सेटलमेंट',
      statSpeedDesc: 'पूर्व-वित्त पोषित (< 3 मिनट)',
      statSla: 'समस्या समाधान गारंटी',
      statSlaDesc: '24 घंटे SLA प्रतिक्रिया'
    },
    features: {
      badge: 'सटीकता के साथ संभाला गया',
      title: 'OTC Unlimited क्यों चुनें',
      subtitle: 'दुनिया भर में अग्रणी PSP और iGaming ऑपरेटरों की विश्वसनीय पसंद',
      cards: [
        {
          title: 'पूर्व-वित्त पोषित USDT',
          desc: 'कोई देरी नहीं। हमारे तरलता पूल किसी भी पैमाने पर तत्काल निपटान के लिए तैयार हैं।'
        },
        {
          title: 'पूर्ण दृश्यता',
          desc: 'हर लेनदेन में पूर्ण पारदर्शिता। रीयल-टाइम रिपोर्टिंग और संपूर्ण ऑडिट ट्रेल्स।'
        },
        {
          title: 'उद्यम सुरक्षा',
          desc: 'बैंक-ग्रेड सुरक्षा प्रोटोकॉल चौबीसों घंटे हर लेनदेन की सुरक्षा करते हैं।'
        },
        {
          title: '24/7 समर्पित सहायता',
          desc: 'समर्पित खाता प्रबंधक जब भी आपको आवश्यकता हो उपलब्ध हैं। कोई बॉट नहीं, वास्तविक विशेषज्ञ।'
        },
        {
          title: 'अल्ट्रा-फास्ट सेटलमेंट',
          desc: 'अत्यंत तीव्र प्रसंस्करण समय। जब आपको आवश्यकता हो, अपने फंड प्राप्त करें।'
        },
        {
          title: 'पूर्ण गोपनीयता और अनुपालन',
          desc: 'प्रत्येक लेनदेन में पूर्ण गोपनीयता। आपकी पहचान और संचालन पूरी तरह से गोपनीय रहते हैं।'
        }
      ]
    },
    currencies: {
      badge: '30+ मुद्राएं',
      title: 'दुनिया की प्रमुख मुद्राओं में सहज USDT निपटान',
      subtitle: 'त्वरित खिलाड़ी निकासी और प्रोसेसर बस्तियों के लिए पूर्व-वित्त पोषित स्थानीय तरलता पूल।',
      moreText: 'और दुनिया भर में 18+ अधिक समर्थित मुद्राएं।',
      customRailCta: 'कस्टम निपटान मुद्रा रेल का अनुरोध करें'
    },
    trust: {
      badge: 'उद्योग जगत के नेताओं द्वारा विश्वसनीय',
      title: 'शीर्ष iGaming ऑपरेटर और PSP हमें चुनते हैं',
      subtitle: 'वैश्विक भुगतान प्रोसेसर से लेकर अग्रणी गेमिंग प्लेटफॉर्म तक, उद्यम अपने उच्च-मात्रा USDT संचालन के लिए OTC Unlimited पर भरोसा करते हैं।',
      points: [
        {
          title: 'संस्थागत मात्रा के लिए निर्मित',
          desc: 'उच्च मात्रा के लेनदेन और सख्त अनुपालन आवश्यकताओं के लिए इंजीनियर किया गया।'
        },
        {
          title: 'स्केलेबल इन्फ्रास्ट्रक्चर',
          desc: '30+ क्षेत्रीय बैंक गलियारों में बिना किसी रुकावट के अरबों के लेनदेन संभालें।'
        },
        {
          title: '24 घंटे समस्या समाधान गारंटी',
          desc: 'तत्काल समाधान प्रतिबद्धता के साथ ट्रेडिंग निदेशकों को सीधा एस्केलेशन।'
        }
      ],
      cardPspTitle: 'भुगतान सेवा प्रदाता (PSP)',
      cardPspDesc: 'पूर्व-वित्तपोषित एस्क्रो कॉरीडोर व्यापारियों के लिए बहु-दिवसीय वायर देरी को समाप्त करते हैं।',
      cardGamingTitle: 'iGaming प्लेटफॉर्म',
      cardGamingDesc: 'शून्य चार्जबैक और पूर्ण गोपनीयता के साथ स्थानीय मुद्राओं में त्वरित खिलाड़ी भुगतान।',
      slaLabel: 'ऑनबोर्डिंग SLA',
      slaValue: '< 15 मिनट में प्राइवेट Telegram डेस्क',
      connectBtn: 'अभी कनेक्ट करें'
    },
    cta: {
      title: 'सबसे सहज OTC सेवा का अनुभव करने के लिए तैयार हैं?',
      subtitle: 'हमारी टीम 24/7 तैयार है। 24 घंटे के भीतर गारंटीकृत प्रतिक्रिया प्राप्त करें।',
      btnTelegram: 'Telegram पर संपर्क करें',
      btnDiscovery: 'डिस्कवरी कॉल शेड्यूल करें',
      footerAnonymity: '100% पूर्ण गोपनीयता',
      footerResponse: '24 घंटे के भीतर प्रतिक्रिया',
      footerVolume: '$30B+ वार्षिक वॉल्यूम'
    },
    bookingModal: {
      headerTitle: 'अपॉइंटमेंट बुक करें',
      step1Question: 'आप किस प्रकार का व्यवसाय हैं?',
      card1Title: 'OTC, तरलता प्रदाता',
      card1Desc: 'OTC ट्रेडिंग सेवाओं के लिए',
      card2Title: 'PSP की तलाश OTC',
      card2Desc: 'भुगतान सेवा प्रदाता',
      step2Subtitle: 'कृपया अपने संपर्क विवरण प्रदान करें',
      nicknameLabel: 'उपनाम (Nickname)',
      nicknamePlaceholder: 'आपका उपनाम',
      telegramLabel: 'Telegram यूजरनेम',
      telegramPlaceholder: '@username',
      companyLabel: 'कंपनी का नाम',
      companyPlaceholder: 'आपकी कंपनी का नाम',
      preferredTimeLabel: 'पसंदीदा समय',
      backBtn: 'पीछे',
      nextBtn: 'आगे',
      confirmedTitle: 'बुकिंग की पुष्टि हुई!',
      confirmedSubtitle: 'हमारी चर्चा की प्रतीक्षा है।',
      telegramBoxText: 'इस बीच, बेझिझक हमें Telegram पर संदेश भेजें:',
      doneBtn: 'संपन्न'
    },
    footer: {
      tagline: 'दुनिया भर में PSP और iGaming ऑपरेटरों के लिए सबसे सहज OTC अनुभव।',
      corridors: 'INR, EUR, CAD, BRL, AED, TRY और अधिक।',
      rights: 'सर्वाधिकार सुरक्षित।'
    }
  },

  CN: {
    nav: {
      features: '功能特性',
      currencies: '支持币种',
      contact: '联系我们',
      book: 'Book'
    },
    hero: {
      badgeTop: '9年卓越与信任',
      badgePresents: 'TCI 呈现',
      titleStart: '无缝',
      titleHighlight: 'USDT OTC 交易',
      description: '为PSP提供30+货币的最无缝、预融资或即时的iGaming OTC服务商。每笔交易完全匿名。超透明沟通和24小时问题解决保证。',
      ctaTelegram: '通过 Telegram 联系',
      ctaDiscovery: '预约探索通话',
      statVolume: '年度 USDT 交易量',
      statVolumeDesc: '精准运营把控',
      statCurrencies: '支持全球货币',
      statCurrenciesDesc: '无缝全球即时结算',
      statSpeed: '超快速结算',
      statSpeedDesc: '预融资 / 即时 (< 3 分钟)',
      statSla: '问题解决保障',
      statSlaDesc: '24小时响应承诺'
    },
    features: {
      badge: '精准把控',
      title: '为什么选择 OTC Unlimited',
      subtitle: '全球领先PSP和iGaming运营商的信赖之选',
      cards: [
        {
          title: '预融资 USDT',
          desc: '零延迟。我们的流动性池已准备就绪，支持任何规模的即时结算。'
        },
        {
          title: '全面透明',
          desc: '每笔交易完全可见。实时报告和完整的审计记录。'
        },
        {
          title: '企业级安全',
          desc: '全天候银行级安全协议保护每笔交易。'
        },
        {
          title: '24/7 专属支持',
          desc: '专属客户经理随时待命。无机器人，全人工专家团队。'
        },
        {
          title: '超快结算',
          desc: '极速处理时间，按需随时获取资金。'
        },
        {
          title: '完全匿名与合规',
          desc: '每笔交易完全隐私。在既定合规框架下运营，身份与业务完全保密。'
        }
      ]
    },
    currencies: {
      badge: '30+ 种货币',
      title: '跨全球主要货币的无缝USDT结算',
      subtitle: '预融资的本地流动性池，支持即时玩家提款和处理商结算。',
      moreText: '并在全球范围内支持 18+ 种额外法定货币。',
      customRailCta: '申请定制专属清算币种通道'
    },
    trust: {
      badge: '行业领袖信赖之选',
      title: '顶级iGaming运营商和PSP选择我们',
      subtitle: '从全球支付处理商到领先的游戏平台，企业信任OTC Unlimited处理其高额USDT业务。',
      points: [
        {
          title: '专为机构级交易量构建',
          desc: '专为高频大额交易和严格的合规标准而设计。'
        },
        {
          title: '弹性可扩展基础设施',
          desc: '在 30+ 区域银行走廊中无缝处理数十亿美元交易量。'
        },
        {
          title: '24小时问题解决保障',
          desc: '直接由资金总监对接处理，承诺即刻推进与解决。'
        }
      ],
      cardPspTitle: '支付服务商 (PSP)',
      cardPspDesc: '预先注资的托管通道消除了跨境电汇的多日延迟。',
      cardGamingTitle: 'iGaming 游戏平台',
      cardGamingDesc: '本地法币极速玩家提款，零拒付风险，保障全面隐私。',
      slaLabel: '机构入驻 SLA',
      slaValue: '< 15 分钟开设专属 Telegram 交易台',
      connectBtn: '立即接入'
    },
    cta: {
      title: '准备体验最无缝的OTC服务？',
      subtitle: '我们的团队全天候 24/7 待命，承诺 24 小时内获得专属回复。',
      btnTelegram: '通过 Telegram 联系',
      btnDiscovery: '预约探索通话',
      footerAnonymity: '100% 完全匿名合规',
      footerResponse: '24小时内极速响应',
      footerVolume: '年处理量 $30B+'
    },
    bookingModal: {
      headerTitle: '预约预约',
      step1Question: '您的企业业务类型是什么？',
      card1Title: 'OTC, 流动性做市商',
      card1Desc: '适用于 OTC 交易服务',
      card2Title: '寻找 OTC 的 PSP',
      card2Desc: '支付服务提供商',
      step2Subtitle: '请提供您的联系方式',
      nicknameLabel: '昵称',
      nicknamePlaceholder: '您的昵称',
      telegramLabel: 'Telegram 账号',
      telegramPlaceholder: '@username',
      companyLabel: '公司名称',
      companyPlaceholder: '您的公司名称',
      preferredTimeLabel: '首选时间',
      backBtn: '返回',
      nextBtn: '下一步',
      confirmedTitle: '预约已确认！',
      confirmedSubtitle: '期待与您的深入探讨。',
      telegramBoxText: '在此期间，欢迎随时通过 Telegram 联系我们：',
      doneBtn: '完成'
    },
    footer: {
      tagline: '为全球PSP和iGaming运营商提供最无缝的OTC体验。',
      corridors: '支持 INR、EUR、CAD、BRL、AED、TRY 及更多币种。',
      rights: '保留所有权利。'
    }
  }
};

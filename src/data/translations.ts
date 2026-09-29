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
  footer: {
    tagline: string;
    corridors: string;
    rights: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationSchema> = {
  US: {
    nav: {
      features: 'Institutional Solutions',
      currencies: 'Settlement Currencies',
      contact: 'Trading Desk',
      book: 'Telegram Desk'
    },
    hero: {
      badgeTop: 'Institutional Grade Digital Asset Liquidity',
      badgePresents: 'OTC UNLIMITED BY TCI',
      titleStart: 'Bilateral',
      titleHighlight: 'USDT OTC Liquidity Desk',
      description: 'Institutional-grade USDT clearing and bilateral OTC liquidity for licensed Payment Service Providers (PSPs), gaming operators, and corporate fintechs across 30+ regional currency corridors. Discrete execution, deep balance-sheet reserves, and rigorous KYB/AML standards.',
      ctaTelegram: 'Contact Verified Trading Desk',
      ctaDiscovery: 'Contact Trading Desk',
      statVolume: 'Annual Clearing Volume',
      statVolumeDesc: 'Bilateral institutional execution',
      statCurrencies: 'Settlement Corridors',
      statCurrenciesDesc: 'Dedicated local banking rails',
      statSpeed: 'Settlement Efficiency',
      statSpeedDesc: 'Pre-funded liquidity / T+0 clearing',
      statSla: 'Institutional Support',
      statSlaDesc: '24/7 direct senior desk access'
    },
    features: {
      badge: 'Enterprise Infrastructure',
      title: 'Built for High-Velocity Institutional Clearing',
      subtitle: 'Engineered specifically for corporate treasuries, licensed payment processors, and global gaming merchants.',
      cards: [
        {
          title: 'Deep Dedicated Reserves',
          desc: 'Direct balance-sheet liquidity ready for immediate bilateral execution without exchange slippage or market disruption.'
        },
        {
          title: 'Comprehensive Audit & Reporting',
          desc: 'Institutional trade confirmations, real-time transaction reporting, and cryptographic proof of reserves for accounting reconciliation.'
        },
        {
          title: 'Cold Storage & Custodial Security',
          desc: 'Multi-signature smart contract security and segregated cold storage protocols protecting all bilateral settlement liquidity.'
        },
        {
          title: 'Direct Desk Execution 24/7',
          desc: 'Dedicated key account directors and direct trading desk access around the clock. No generic support bots.'
        },
        {
          title: 'T+0 Same-Day Settlement',
          desc: 'Optimized local fiat rails and pre-allocated liquidity facilities enabling seamless player payouts and processor batch clearing.'
        },
        {
          title: 'Regulatory & AML Compliance',
          desc: 'Strict adherence to global FATF standards, Travel Rule protocols, automated sanctions screening, and discrete counterparty confidentiality.'
        }
      ]
    },
    currencies: {
      badge: '30+ Supported Rails',
      title: 'Global Fiat-to-USDT Settlement Corridors',
      subtitle: 'Dedicated local clearing channels for seamless cross-border treasury management and merchant liquidity.',
      moreText: 'Custom liquidity corridors available upon verified institutional counterparty onboarding.',
      customRailCta: 'Inquire About Custom Corridor Rails'
    },
    trust: {
      badge: 'Institutional Provenance',
      title: 'Trusted by Regulated PSPs & Industry Leaders',
      subtitle: 'Providing robust treasury infrastructure and dependable liquidity to high-throughput global platforms.',
      points: [
        {
          title: 'Strict Institutional Onboarding',
          desc: 'Robust Know-Your-Business (KYB) and source-of-funds verification ensuring a clean, compliant trading environment.'
        },
        {
          title: 'Scalable Treasury Infrastructure',
          desc: 'High-throughput clearing capacity designed to handle billions in cross-border volume seamlessly.'
        },
        {
          title: 'Dedicated Senior Account Oversight',
          desc: 'Direct escalation channels to senior trading principals with guaranteed rapid execution response.'
        }
      ],
      cardPspTitle: 'For Payment Service Providers (PSPs)',
      cardPspDesc: 'Automate fiat-to-crypto batch conversions and maintain dedicated pre-funded settlement reserves with zero exchange slippage.',
      cardGamingTitle: 'For Licensed Gaming Operators',
      cardGamingDesc: 'Accelerate player deposit processing and high-volume withdrawal settlements with multi-currency local payment rails.',
      slaLabel: 'Desk Availability',
      slaValue: '24/7/365 Direct Access',
      connectBtn: 'Connect With Desk'
    },
    cta: {
      title: 'Establish Your Institutional Liquidity Facility',
      subtitle: 'Connect directly with our senior trading directors for bilateral rate indications and counterparty onboarding.',
      btnTelegram: 'Open Desk on Telegram',
      btnDiscovery: 'Contact Trading Desk',
      footerAnonymity: 'Strict Counterparty Confidentiality',
      footerResponse: 'Direct Senior Desk Response',
      footerVolume: 'Institutional Scale Infrastructure'
    },
    footer: {
      tagline: 'OTC Unlimited by TCI — Institutional Digital Asset Liquidity Desk.',
      corridors: 'Global Settlement Corridors • Direct Bilateral OTC Clearing',
      rights: 'All rights reserved.'
    }
  },
  RU: {
    nav: {
      features: 'Решения',
      currencies: 'Валюты',
      contact: 'Трейдинг-деск',
      book: 'Telegram Деск'
    },
    hero: {
      badgeTop: 'Институциональная ликвидность цифровых активов',
      badgePresents: 'OTC UNLIMITED BY TCI',
      titleStart: 'Двусторонний',
      titleHighlight: 'USDT OTC Трейдинг-Деск',
      description: 'Институциональный клиринг USDT и внебиржевая ликвидность для лицензированных PSP, операторов iGaming и финтех-компаний в 30+ региональных валютных коридорах.',
      ctaTelegram: 'Связаться с торговым деском',
      ctaDiscovery: 'Связаться с деском',
      statVolume: 'Годовой объем клиринга',
      statVolumeDesc: 'Двустороннее институциональное исполнение',
      statCurrencies: 'Валютных коридоров',
      statCurrenciesDesc: 'Локальные банковские шлюзы',
      statSpeed: 'Скорость расчетов',
      statSpeedDesc: 'T+0 / Мгновенный клиринг',
      statSla: 'Поддержка 24/7',
      statSlaDesc: 'Прямой доступ к старшим трейдерам'
    },
    features: {
      badge: 'Инфраструктура',
      title: 'Создано для институциональных расчетов',
      subtitle: 'Разработано для корпоративных казначейств, лицензированных платежных систем и гейминг-платформ.',
      cards: [
        {
          title: 'Глубокие выделенные резервы',
          desc: 'Прямая ликвидность для мгновенного исполнения крупных ордеров без проскальзывания.'
        },
        {
          title: 'Аудит и прозрачность',
          desc: 'Институциональные отчеты по сделкам в реальном времени и полное подтверждение резервов.'
        },
        {
          title: 'Холодное хранение и безопасность',
          desc: 'Мультиподписные смарт-контракты и изолированные протоколы холодного хранения.'
        },
        {
          title: 'Прямой доступ 24/7',
          desc: 'Выделенные персональные менеджеры и постоянный контакт с торговым деском без ботов.'
        },
        {
          title: 'Расчеты T+0 в день обращения',
          desc: 'Оптимизированные локальные фиатные каналы для быстрых выплат игрокам и клиринга.'
        },
        {
          title: 'Комплаенс и AML стандарты',
          desc: 'Строгое соответствие стандартам FATF, Travel Rule и полная конфиденциальность контрагентов.'
        }
      ]
    },
    currencies: {
      badge: '30+ валютных рельсов',
      title: 'Глобальные валютные коридоры расчетов в USDT',
      subtitle: 'Выделенные каналы расчетов для управления международной ликвидностью.',
      moreText: 'Индивидуальные валютные коридоры доступны после верификации контрагента.',
      customRailCta: 'Запросить индивидуальный коридор'
    },
    trust: {
      badge: 'Институциональное доверие',
      title: 'Выбор регулируемых PSP и лидеров индустрии',
      subtitle: 'Надежная казначейская инфраструктура для высоконагруженных платформ.',
      points: [
        {
          title: 'Строгий KYB онбординг',
          desc: 'Проверка юридических лиц и источников средств для чистой торговой среды.'
        },
        {
          title: 'Масштабируемые казначейские рельсы',
          desc: 'Инфраструктура, рассчитанная на миллиардные ежемесячные объемы.'
        },
        {
          title: 'Прямая эскалация трейдерам',
          desc: 'Оперативное согласование условий и котировок с руководством деска.'
        }
      ],
      cardPspTitle: 'Для платежных провайдеров (PSP)',
      cardPspDesc: 'Автоматизация конвертаций фиат-крипто и выделенные пулы ликвидности без задержек.',
      cardGamingTitle: 'Для лицензированных гейминг-операторов',
      cardGamingDesc: 'Быстрые выплаты игрокам и надежная обработка депозитов в локальных валютах.',
      slaLabel: 'Доступность деска',
      slaValue: '24/7/365 Прямой контакт',
      connectBtn: 'Подключиться к деску'
    },
    cta: {
      title: 'Откройте институциональную кредитную линию',
      subtitle: 'Свяжитесь напрямую с нашими старшими трейдерами для онбординга и котировок.',
      btnTelegram: 'Открыть диалог в Telegram',
      btnDiscovery: 'Связаться с деском',
      footerAnonymity: 'Строгая конфиденциальность',
      footerResponse: 'Прямой ответ от трейдеров',
      footerVolume: 'Институциональный масштаб'
    },
    footer: {
      tagline: 'OTC Unlimited by TCI — Институциональный внебиржевой трейдинг-деск.',
      corridors: 'Международные коридоры расчетов • Двусторонний OTC клиринг',
      rights: 'Все права защищены.'
    }
  },
  IN: {
    nav: {
      features: 'संस्थागत समाधान',
      currencies: 'मुद्राएं (Currencies)',
      contact: 'ट्रेडिंग डेस्क',
      book: 'Telegram डेस्क'
    },
    hero: {
      badgeTop: 'संस्थागत स्तर की डिजिटल एसेट लिक्विडिटी',
      badgePresents: 'OTC UNLIMITED BY TCI',
      titleStart: 'द्विपक्षीय (Bilateral)',
      titleHighlight: 'USDT OTC लिक्विडिटी डेस्क',
      description: 'लाइसेंस प्राप्त पेमेंट सर्विस प्रोवाइडर्स (PSPs) और गेमिंग ऑपरेटरों के लिए 30+ वैश्विक मुद्राओं में संस्थागत USDT OTC सेटलमेंट। पूर्ण गोपनीयता, मजबूत बैलेंस-शीट रिजर्व और कड़े KYB/AML मानक।',
      ctaTelegram: 'वेरिफाइड ट्रेडिंग डेस्क से संपर्क करें',
      ctaDiscovery: 'डेस्क से संपर्क करें',
      statVolume: 'वार्षिक क्लियरिंग वॉल्यूम',
      statVolumeDesc: 'संस्थागत स्तर का निष्पादन',
      statCurrencies: 'समर्थित मुद्राएं',
      statCurrenciesDesc: 'लोकल बैंकिंग सेटलमेंट रेल्स',
      statSpeed: 'सेटलमेंट गति',
      statSpeedDesc: 'प्री-फंडेड लिक्विडिटी / T+0',
      statSla: '24/7 सहायता',
      statSlaDesc: 'सीनियर ट्रेडर्स से डायरेक्ट एक्सेस'
    },
    features: {
      badge: 'एंटरप्राइज इंफ्रास्ट्रक्चर',
      title: 'संस्थागत क्लियरिंग के लिए निर्मित',
      subtitle: 'कॉरपोरेट ट्रेजरी और ग्लोबल पेमेंट प्रोसेसरों के लिए विशेष रूप से डिज़ाइन किया गया।',
      cards: [
        {
          title: 'गहरे समर्पित रिजर्व',
          desc: 'बिना किसी स्लिपेज के त्वरित द्विपक्षीय निष्पादन के लिए डायरेक्ट बैलेंस शीट लिक्विडिटी।'
        },
        {
          title: 'पूर्ण ऑडिट और रिपोर्टिंग',
          desc: 'रीयल-टाइम ट्रेड कन्फर्मेशन और अकाउंटिंग समाधान के लिए पूर्ण प्रूफ ऑफ रिजर्व्स।'
        },
        {
          title: 'कोल्ड स्टोरेज सुरक्षा',
          desc: 'मल्टी-सिग्नेचर स्मार्ट कॉन्ट्रैक्ट सुरक्षा और सुरक्षित कोल्ड स्टोरेज प्रोटोकॉल।'
        },
        {
          title: '24/7 डायरेक्ट डेस्क एक्सेस',
          desc: 'समर्पित अकाउंट डायरेक्टर्स और राउंड-द-क्लॉक ट्रेडिंग डेस्क। कोई स्वचालित बॉट नहीं।'
        },
        {
          title: 'T+0 सेम-डे सेटलमेंट',
          desc: 'त्वरित प्लेयर विथड्रॉल और बैच क्लियरिंग के लिए लोकल बैंकिंग रेल्स।'
        },
        {
          title: 'नियामक और AML अनुपालन',
          desc: 'FATF मानकों, ट्रैवल रूल और सख्त काउंटरपार्टी गोपनीयता का पूर्ण पालन।'
        }
      ]
    },
    currencies: {
      badge: '30+ मुद्रा रेल्स',
      title: 'वैश्विक फिएट-से-USDT सेटलमेंट कॉरिडोर',
      subtitle: 'अंतरराष्ट्रीय ट्रेजरी प्रबंधन और मर्चेंट लिक्विडिटी के लिए समर्पित लोकल क्लियरिंग चैनल्स।',
      moreText: 'वेरिफाइड संस्थागत काउंटरपार्टी के लिए कस्टम कॉरिडोर उपलब्ध हैं।',
      customRailCta: 'कस्टम कॉरिडोर रेल का अनुरोध करें'
    },
    trust: {
      badge: 'संस्थागत विश्वसनीयता',
      title: 'रेग्युलेटेड PSPs और लीडर्स का भरोसा',
      subtitle: 'हाई-थ्रूपुट वैश्विक प्लेटफार्मों को मजबूत ट्रेजरी इंफ्रास्ट्रक्चर प्रदान करना।',
      points: [
        {
          title: 'सख्त संस्थागत ऑनबोर्डिंग',
          desc: 'स्वच्छ और अनुपालन ट्रेडिंग वातावरण सुनिश्चित करने के लिए पूर्ण KYB सत्यापन।'
        },
        {
          title: 'स्केलेबल ट्रेजरी इंफ्रास्ट्रक्चर',
          desc: 'अरबों डॉलर के क्रॉस-बॉर्डर वॉल्यूम को आसानी से संभालने की क्षमता।'
        },
        {
          title: 'सीनियर अकाउंट लीडरशिप',
          desc: 'ट्रेडिंग प्रिंसिपल्स के साथ डायरेक्ट संपर्क और त्वरित निष्पादन।'
        }
      ],
      cardPspTitle: 'पेमेंट सर्विस प्रोवाइडर्स (PSPs) के लिए',
      cardPspDesc: 'फिएट-टू-क्रिप्टो बैच रूपांतरण को स्वचालित करें और बिना देरी के सेटलमेंट प्राप्त करें।',
      cardGamingTitle: 'लाइसेंस प्राप्त गेमिंग ऑपरेटरों के लिए',
      cardGamingDesc: 'लोकल पेमेंट रेल्स के साथ खिलाड़ियों के डिपॉजिट और विथड्रॉल सेटलमेंट को गति दें।',
      slaLabel: 'डेस्क उपलब्धता',
      slaValue: '24/7/365 डायरेक्ट संपर्क',
      connectBtn: 'डेस्क से जुड़ें'
    },
    cta: {
      title: 'अपनी संस्थागत लिक्विडिटी सुविधा शुरू करें',
      subtitle: 'द्विपक्षीय दरों और काउंटरपार्टी ऑनबोर्डिंग के लिए सीधे हमारे सीनियर ट्रेडिंग डायरेक्टर्स से संपर्क करें।',
      btnTelegram: 'Telegram पर डेस्क खोलें',
      btnDiscovery: 'डेस्क से संपर्क करें',
      footerAnonymity: 'सख्त काउंटरपार्टी गोपनीयता',
      footerResponse: 'सीनियर ट्रेडर्स द्वारा त्वरित प्रतिक्रिया',
      footerVolume: 'संस्थागत स्तर का इंफ्रास्ट्रक्चर'
    },
    footer: {
      tagline: 'OTC Unlimited by TCI — संस्थागत डिजिटल एसेट लिक्विडिटी डेस्क।',
      corridors: 'ग्लोबल सेटलमेंट कॉरिडोर • द्विपक्षीय OTC क्लियरिंग',
      rights: 'सर्वाधिकार सुरक्षित।'
    }
  },
  CN: {
    nav: {
      features: '机构解决方案',
      currencies: '结算货币',
      contact: '交易台',
      book: 'Telegram 交易台'
    },
    hero: {
      badgeTop: '机构级数字资产流动性服务',
      badgePresents: 'OTC UNLIMITED BY TCI',
      titleStart: '双边',
      titleHighlight: 'USDT OTC 流动性交易台',
      description: '为持牌支付服务商 (PSP)、游戏运营商及企业金融科技机构提供覆盖30+区域货币走廊的机构级USDT结算与场外大宗流动性。离散执行、雄厚资产负债表储备及严格的KYB/AML合规标准。',
      ctaTelegram: '联系官方交易台',
      ctaDiscovery: '联系交易台',
      statVolume: '年度结算规模',
      statVolumeDesc: '双边机构级执行',
      statCurrencies: '支持结算走廊',
      statCurrenciesDesc: '专属本地银行通道',
      statSpeed: '结算效率',
      statSpeedDesc: '预先充值流动性 / T+0 结算',
      statSla: '机构级专属支持',
      statSlaDesc: '24/7 高级交易员直接对接'
    },
    features: {
      badge: '企业级基础设施',
      title: '专为高通量机构清算而打造',
      subtitle: '专门针对企业资金库、持牌支付处理商和全球游戏商户设计。',
      cards: [
        {
          title: '深厚专属储备',
          desc: '自营资产负债表直接提供流动性，即时双边撮合，无交易所滑点与市场冲击。'
        },
        {
          title: '全面审计与实时报告',
          desc: '机构交易确认书、实时交易流水报告及可供会计对账的储备证明。'
        },
        {
          title: '冷钱包多签托管安全',
          desc: '多签智能合约机制与隔离冷存储安全协议，全方位保障结算流动性。'
        },
        {
          title: '24/7 高级交易台直通',
          desc: '专属大客户总监全天候响应，直连交易室，无机器人回复。'
        },
        {
          title: 'T+0 当日快速结算',
          desc: '优化的本地法币通道和预分配流动性额度，支持高效玩家出金与商户批量清算。'
        },
        {
          title: '严格合规与AML审查',
          desc: '严格遵循国际反洗钱 (FATF) 标准与 Travel Rule，自动制裁名单筛查及严格的客户保密机制。'
        }
      ]
    },
    currencies: {
      badge: '30+ 支持通道',
      title: '全球法币与 USDT 结算走廊',
      subtitle: '专属本地清算通道，实现无缝跨国资金调拨与商户流动性管理。',
      moreText: '完成机构准入认证后可申请定制法币走廊。',
      customRailCta: '咨询定制走廊通道'
    },
    trust: {
      badge: '机构信誉背书',
      title: '受监管 PSP 与行业领军者的信赖之选',
      subtitle: '为高吞吐量全球平台提供稳健的资金管理基础设施与充足流动性。',
      points: [
        {
          title: '严格的机构准入 (KYB)',
          desc: '完善的商业背景调查与资金来源审查，确保合规纯净的交易环境。'
        },
        {
          title: '高可扩展资金设施',
          desc: '高并发清算能力，轻松承载每月数十亿美元的跨国资金流转。'
        },
        {
          title: '高级交易总监直连',
          desc: '直通资深交易负责人，快速确定双边大宗报价与结算安排。'
        }
      ],
      cardPspTitle: '面向支付服务提供商 (PSP)',
      cardPspDesc: '自动化法币与加密货币批量兑换，享受专属预充流动性池，零滑点快速对账。',
      cardGamingTitle: '面向持牌游戏运营商',
      cardGamingDesc: '通过多币种本地通道加速玩家入金处理与大额出款结算。',
      slaLabel: '交易台可用性',
      slaValue: '24/7/365 全年直连',
      connectBtn: '连接交易台'
    },
    cta: {
      title: '开启您的专属机构流动性授信',
      subtitle: '直接联系高级交易总监，获取双边最优费率指示并进行机构准入。',
      btnTelegram: '在 Telegram 上开启咨询',
      btnDiscovery: '联系交易台',
      footerAnonymity: '严格对手方保密',
      footerResponse: '资深交易总监直接响应',
      footerVolume: '机构级规模基础设施'
    },
    footer: {
      tagline: 'OTC Unlimited by TCI — 机构数字资产场外大宗流动性交易台。',
      corridors: '全球结算走廊 • 双边场外清算',
      rights: '保留所有权利。'
    }
  }
};

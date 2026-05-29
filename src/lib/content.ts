export type Lang = "zh" | "en";

export const languages = {
  zh: "中文",
  en: "EN",
} satisfies Record<Lang, string>;

export const content = {
  nav: {
    zh: [
      { href: "/", label: "首页" },
      { href: "/games", label: "作品" },
      { href: "/about", label: "关于" },
      { href: "/contact", label: "联系" },
    ],
    en: [
      { href: "/", label: "Home" },
      { href: "/games", label: "Games" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  brand: {
    zh: {
      name: "Endmoon Studio",
      descriptor: "游戏研发与运营工作室",
      tagline: "把灵感打磨成可长期运营的游戏世界",
      intro:
        "Endmoon Studio 专注于原创游戏研发、发行协作与社区运营。我们用鲜明的艺术方向、可靠的制作流程和持续运营能力，帮助项目从概念走向玩家。",
      primaryCta: "查看作品",
      secondaryCta: "商务合作",
    },
    en: {
      name: "Endmoon Studio",
      descriptor: "Game Development & Live Operations",
      tagline: "Turning bright ideas into games built to last",
      intro:
        "Endmoon Studio creates original games and supports publishing, production, and community operations. We combine vivid art direction, dependable pipelines, and long-term live ops thinking.",
      primaryCta: "Explore Games",
      secondaryCta: "Partner With Us",
    },
  },
  home: {
    zh: {
      stats: [
        ["4+", "核心能力模块"],
        ["2-4", "首批展示项目"],
        ["CN/EN", "双语品牌表达"],
      ],
      sections: {
        capabilities: "工作室能力",
        featured: "精选作品",
        edge: "研发与运营优势",
        ctaTitle: "正在寻找靠谱的游戏合作伙伴？",
        ctaBody:
          "无论是联合研发、发行协作、海外本地化还是社区运营，我们都可以从初版官网开始，把项目表达得更清楚。",
      },
      capabilities: [
        {
          title: "原创研发",
          body: "从玩法原型、视觉世界观到版本计划，建立可执行的研发路径。",
        },
        {
          title: "发行协作",
          body: "面向平台、渠道与合作伙伴准备清晰的项目资料和节奏。",
        },
        {
          title: "社区运营",
          body: "围绕玩家反馈、内容节奏和长期留存设计运营动作。",
        },
      ],
      advantages: [
        "轻量但稳定的制作流程",
        "兼顾创意表达与商业沟通",
        "适合海外展示的双语信息架构",
        "可持续替换素材与项目内容",
      ],
    },
    en: {
      stats: [
        ["4+", "Core capabilities"],
        ["2-4", "Launch showcase titles"],
        ["CN/EN", "Bilingual brand voice"],
      ],
      sections: {
        capabilities: "Studio Capabilities",
        featured: "Featured Games",
        edge: "Development & Ops Edge",
        ctaTitle: "Looking for a dependable game partner?",
        ctaBody:
          "From co-development and publishing support to localization and community operations, we shape a clearer first impression for every project.",
      },
      capabilities: [
        {
          title: "Original Development",
          body: "Playable prototypes, art direction, world building, and production plans that can actually ship.",
        },
        {
          title: "Publishing Support",
          body: "Sharper project materials and timelines for platforms, channels, and partners.",
        },
        {
          title: "Live Operations",
          body: "Player feedback loops, content beats, and retention-minded community work.",
        },
      ],
      advantages: [
        "Lean, reliable production workflows",
        "Creative identity with business clarity",
        "Bilingual structure ready for global partners",
        "Easy replacement of assets and project data",
      ],
    },
  },
  games: {
    zh: {
      eyebrow: "作品 / 游戏",
      title: "从原型到长期运营的项目展示",
      body: "初版使用可替换的本地数据展示 3 个项目。后续只需要更新封面图、简介和平台信息，就能扩展为正式作品集。",
      viewDetails: "查看项目",
    },
    en: {
      eyebrow: "Games",
      title: "Projects from prototype to live operations",
      body: "The first version uses replaceable local data for three showcase projects. Covers, descriptions, and platform details can be swapped for final materials later.",
      viewDetails: "View Project",
    },
  },
  about: {
    zh: {
      eyebrow: "关于我们",
      title: "小而清晰的团队，专注把项目做完整",
      body: "我们相信优秀的游戏工作室需要同时理解创意、制作和运营。Endmoon Studio 的官网初版会优先展示专业能力、合作可信度和团队价值观，而不是堆砌炫技效果。",
      pillars: [
        ["创意判断", "帮助项目形成鲜明但可落地的视觉与玩法方向。"],
        ["制作纪律", "用稳定流程管理素材、版本、需求和交付节奏。"],
        ["玩家视角", "从社区反馈和长期内容节奏反推产品表达。"],
      ],
      values: ["清晰沟通", "持续迭代", "尊重玩家", "重视合作"],
    },
    en: {
      eyebrow: "About",
      title: "A focused team that knows how to finish",
      body: "We believe a strong game studio understands creativity, production, and operations together. This first website version highlights capability, credibility, and values before visual noise.",
      pillars: [
        ["Creative Judgment", "Shape distinctive art and gameplay directions that remain buildable."],
        ["Production Discipline", "Manage assets, versions, requirements, and delivery rhythm with care."],
        ["Player Perspective", "Use community feedback and content cadence to sharpen product expression."],
      ],
      values: ["Clear communication", "Constant iteration", "Player respect", "Partner mindset"],
    },
  },
  contact: {
    zh: {
      eyebrow: "联系我们",
      title: "聊聊合作、发行、招聘或项目展示",
      body: "表单初版仅做前端校验，不会提交到服务器。正式上线前可以接入邮件服务、CRM 或表单平台。",
      emailLabel: "商务邮箱",
      hiringLabel: "人才合作",
      socialLabel: "社媒入口",
      formTitle: "发送意向",
      fields: {
        name: "姓名",
        email: "邮箱",
        type: "合作类型",
        message: "留言",
        submit: "检查并预览",
      },
      types: ["商务合作", "发行/渠道", "招聘/人才", "媒体/社群"],
      success: "信息格式看起来没问题。正式上线后这里会连接邮件或 CRM。",
      errors: {
        required: "请填写所有必填项。",
        email: "请输入有效邮箱地址。",
      },
    },
    en: {
      eyebrow: "Contact",
      title: "Talk to us about partnerships, publishing, hiring, or showcases",
      body: "The first version validates the form on the front end only. Before launch, it can connect to email, CRM, or a form platform.",
      emailLabel: "Business Email",
      hiringLabel: "Hiring",
      socialLabel: "Social",
      formTitle: "Send Intent",
      fields: {
        name: "Name",
        email: "Email",
        type: "Inquiry Type",
        message: "Message",
        submit: "Validate Preview",
      },
      types: ["Business", "Publishing", "Hiring", "Media / Community"],
      success: "The message format looks good. A launch build can connect this to email or CRM.",
      errors: {
        required: "Please complete all required fields.",
        email: "Please enter a valid email address.",
      },
    },
  },
  company: {
    email: "business@endmoon.studio",
    hiring: "jobs@endmoon.studio",
    social: "@endmoonstudio",
  },
};

export const games = [
  {
    slug: "starfall-atelier",
    accent: "from-cyan-400 via-emerald-300 to-lime-300",
    coverPosition: "left center",
    genre: { zh: "叙事冒险", en: "Narrative Adventure" },
    platform: "PC / Console",
    status: { zh: "原型开发中", en: "Prototype" },
    name: { zh: "星落工坊", en: "Starfall Atelier" },
    summary: {
      zh: "玩家经营一间修复星光器物的工坊，在委托故事中拼出城市失落的记忆。",
      en: "Run a workshop that restores star-lit artifacts and uncover a city's lost memories through intimate commissions.",
    },
  },
  {
    slug: "neon-tide",
    accent: "from-fuchsia-400 via-rose-300 to-amber-300",
    coverPosition: "center center",
    genre: { zh: "轻度策略", en: "Light Strategy" },
    platform: "Mobile / PC",
    status: { zh: "概念验证", en: "Concept" },
    name: { zh: "霓潮边境", en: "Neon Tide" },
    summary: {
      zh: "节奏驱动的城市防线游戏，围绕小队搭配、路线选择和赛季挑战展开。",
      en: "A rhythm-driven city defense game about squad builds, route choices, and seasonal challenge loops.",
    },
  },
  {
    slug: "moonlit-courier",
    accent: "from-indigo-400 via-sky-300 to-teal-200",
    coverPosition: "right center",
    genre: { zh: "合作解谜", en: "Co-op Puzzle" },
    platform: "PC / Switch",
    status: { zh: "寻找合作", en: "Seeking Partners" },
    name: { zh: "月巷信使", en: "Moonlit Courier" },
    summary: {
      zh: "双人协作穿梭于夜间街区，用非对称信息和道具互动完成神秘投递。",
      en: "A two-player journey through night streets, using asymmetric clues and prop interactions to complete strange deliveries.",
    },
  },
] as const;

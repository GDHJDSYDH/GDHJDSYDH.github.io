/**
 * 个人游戏中心数据配置（支持中 / 英双语）
 * 新增小游戏时，只需在 GAMES 数组中追加一项配置即可自动渲染卡片与详情弹窗。
 */

window.SITE_I18N = {
  zh: {
    pageTitle: 'GDHJDSYDH 的游戏手账 | 个人网页小游戏中心',
    brandSubtitle: 'INDIE GAME GALLERY',
    navGames: '作品展柜',
    navGuide: '游玩说明',
    navGithub: 'GitHub 主页',
    heroStamp: '夏末手作 · 网页游戏馆',
    heroTitle: 'GDHJDSYDH 的\n网页小游戏中心',
    heroDesc:
      '这里收纳我制作的开源网页小游戏。无需下载安装，打开浏览器即可直接游玩——无论是午夜神社的潜行心跳、鸟白岛海滩与夏日厨房的治愈时光，还是雪原上的像素打雪仗，欢迎翻开这本小小的游戏手账。',
    heroPrimaryCta: '浏览全部游戏',
    heroSecondaryCta: '访问 GitHub',
    statPublished: '已上线作品',
    statPlayMode: '运行方式',
    statPlayModeVal: '浏览器即开即玩',
    statDevice: '设备支持',
    statDeviceVal: 'PC & 手机双端',
    sectionEyebrow: 'COLLECTION CATALOG',
    sectionTitle: '公开作品展柜',
    sectionDesc: '点击「开始游玩」直接跳转在线游戏页，或打开「详情手账」查看玩法、操作说明与特色介绍。',
    filterAll: '全部作品',
    filterSurvival: '潜行生存',
    filterCasual: '休闲街机',
    filterSimulation: '模拟烹饪',
    filterAction: '动作对战',
    filterMobile: '手机适配',
    playNow: '开始游玩',
    viewDetails: '详情手账',
    sourceCode: '源码仓库',
    copyLink: '复制链接',
    copiedToast: '已复制游戏游玩链接！',
    comingSoonBadge: 'NEXT ENTRY',
    comingSoonTitle: '更多小游戏正在酝酿中',
    comingSoonDesc:
      '新的灵感与玩法原型持续打磨中。如果你喜欢这里的作品，欢迎去 GitHub 点亮 Star 或提出有趣的点子。',
    comingSoonCta: '关注 GitHub 动态',
    guideEyebrow: 'VISITOR NOTES',
    guideTitle: '游玩小贴士',
    guideItems: [
      {
        num: '01',
        title: '零安装 · 即开即玩',
        desc: '所有作品均基于纯静态网页技术构建并部署于 GitHub Pages，点击链接即可在浏览器中直接运行。'
      },
      {
        num: '02',
        title: 'PC 与移动端双端适配',
        desc: '每款游戏都为桌面键鼠与手机触屏分别做了操控适配，随时随地都能来上一局。'
      },
      {
        num: '03',
        title: '建议开启声音体验',
        desc: '作品均包含精心调校的 BGM、角色语音或实时合成环境音效，佩戴耳机沉浸感更佳。'
      }
    ],
    footerNote: '用热爱与代码记录每一段小游戏时光 · 托管于 GitHub Pages',
    modalSynopsis: '作品简介',
    modalHighlights: '核心特色',
    modalControls: '操作指南',
    modalPcLabel: '电脑端',
    modalMobileLabel: '手机端',
    modalMeta: '作品信息',
    modalTech: '技术栈',
    modalLicense: '许可协议',
    modalUpdated: '最近更新',
    modalClose: '关闭详情',
    statusOnline: '在线可玩',
    emptyFilter: '当前筛选条件下暂无作品。'
  },
  en: {
    pageTitle: "GDHJDSYDH's Game Journal | Personal Web Game Center",
    brandSubtitle: 'INDIE GAME GALLERY',
    navGames: 'Games',
    navGuide: 'Play Guide',
    navGithub: 'GitHub',
    heroStamp: 'HANDCRAFTED WEB GAMES',
    heroTitle: "GDHJDSYDH's\nIndie Game Gallery",
    heroDesc:
      'A personal collection of browser mini-games built and hosted on GitHub Pages. No downloads or installs required—jump into midnight shrine stealth, summer island arcade & cooking, or 2.5D pixel snowball battles.',
    heroPrimaryCta: 'Explore Games',
    heroSecondaryCta: 'Visit GitHub',
    statPublished: 'Live Games',
    statPlayMode: 'Platform',
    statPlayModeVal: 'Instant Web Play',
    statDevice: 'Controls',
    statDeviceVal: 'PC & Mobile',
    sectionEyebrow: 'COLLECTION CATALOG',
    sectionTitle: 'Featured Web Games',
    sectionDesc:
      'Launch any title directly in your browser, or open the journal sheet for full gameplay highlights, controls, and project info.',
    filterAll: 'All Games',
    filterSurvival: 'Stealth Survival',
    filterCasual: 'Casual Arcade',
    filterSimulation: 'Cooking Sim',
    filterAction: 'Action Battle',
    filterMobile: 'Mobile Friendly',
    playNow: 'Play Now',
    viewDetails: 'Details',
    sourceCode: 'Source',
    copyLink: 'Copy Link',
    copiedToast: 'Game link copied to clipboard!',
    comingSoonBadge: 'NEXT ENTRY',
    comingSoonTitle: 'More Mini-Games Coming Soon',
    comingSoonDesc:
      'New prototypes and ideas are always brewing. Star the repos or follow on GitHub to catch the next playable release.',
    comingSoonCta: 'Follow on GitHub',
    guideEyebrow: 'VISITOR NOTES',
    guideTitle: 'Quick Visitor Notes',
    guideItems: [
      {
        num: '01',
        title: 'Zero Install, Instant Play',
        desc: 'Every title is a pure web build hosted on GitHub Pages—just click Play Now to launch right in your browser.'
      },
      {
        num: '02',
        title: 'Desktop & Mobile Ready',
        desc: 'Designed with tailored controls for both keyboard/mouse and touchscreens so you can play anywhere.'
      },
      {
        num: '03',
        title: 'Best Played with Audio',
        desc: 'Featuring atmospheric Web Audio synthesis, character voice lines, and BGM—headphones recommended.'
      }
    ],
    footerNote: 'Crafted with curiosity & code · Hosted on GitHub Pages',
    modalSynopsis: 'Overview',
    modalHighlights: 'Key Features',
    modalControls: 'Controls',
    modalPcLabel: 'Desktop',
    modalMobileLabel: 'Mobile',
    modalMeta: 'Project Info',
    modalTech: 'Tech Stack',
    modalLicense: 'License',
    modalUpdated: 'Updated',
    modalClose: 'Close',
    statusOnline: 'Playable Online',
    emptyFilter: 'No games match this filter yet.'
  }
};

window.GAMES = [
  {
    id: 'foxlight-shrine',
    catalogNo: 'NO. 01',
    categories: ['survival', 'mobile'],
    accent: '#C94A38',
    accentSoft: 'rgba(201, 74, 56, 0.11)',
    playUrl: 'https://gdhjdsydh.github.io/Foxlight-Shrine/',
    repoUrl: 'https://github.com/GDHJDSYDH/Foxlight-Shrine',
    coverType: 'foxlight',
    coverImage: 'assets/games/foxlight-cover.jpg',
    portraitImage: 'assets/games/foxlight-shizune.jpg',
    updated: '2026-11',
    tech: 'HTML5 Canvas · Vanilla JS · Web Audio API',
    license: 'CC BY-NC-SA 4.0',
    zh: {
      coverBadge: '00:00 — 06:00',
      title: '狐影零时',
      subtitle: 'Foxlight: 00:00 - 06:00',
      genre: '2D 手电筒潜行生存',
      tagline: '午夜稻荷神社的屏息对峙，握紧手电筒坚持到凌晨 06:00 破晓！',
      summary:
        '午夜零时，少年三谷熊太误入寂静的稻荷神社结界。优雅而危险的狐巫女「稻荷姬 雫音」正潜伏在鸟居与灌木的阴影中。搜集发光电池、听辨立体声铃音与晃动的狐尾，在精准 2D 射线光影与夜雾中撑到天亮。',
      tags: ['潜行生存', '2D 射线光影', 'A* 猎手 AI', 'PC / 手机双端'],
      highlights: [
        '精确 2D 射线追踪手电筒光影与流动夜雾，绝不穿墙漏光',
        'A* 网格寻路狐巫女 AI：避光绕后、掩体埋伏、02:00 后还会施放假狐火诱敌',
        '定制智能手表 HUD：实时监控时间、电量与随危险飙升的心率 BPM',
        '手电照射逼退 + 强光爆闪眩晕博弈，纯 Web Audio 实时合成心跳与铃音'
      ],
      controls: {
        pc: 'WASD / 方向键移动 · 鼠标控制光束方向 · 左键 / Space 强光爆闪 · 右键 / F 开关手电 · P / Esc 暂停',
        mobile: '左下角虚拟摇杆移动 · 右下角独立手电方向摇杆（支持边退边照）· 专属爆闪与开关灯按钮'
      },
      portraitCaption: '稻荷姬 雫音'
    },
    en: {
      coverBadge: '00:00 — 06:00',
      title: 'Foxlight: 00:00 - 06:00',
      subtitle: '狐影零时 · Midnight Shrine Survival',
      genre: '2D Stealth Survival',
      tagline: 'Hold your tactical flashlight through the midnight Inari Shrine until 06:00 AM dawn.',
      summary:
        'Trapped inside a silent midnight Inari Shrine, Kuma Mitani must outlast the elusive fox maiden Shizune lurking behind torii pillars and brush. Gather glowing batteries, listen for stereo shrine bells, and survive until sunrise.',
      tags: ['Stealth Survival', '2D Raycast Lighting', 'A* Hunter AI', 'PC & Mobile'],
      highlights: [
        'True 2D raycast flashlight occlusion and drifting shrine fog with zero light bleed',
        'Smart A* pathfinding hunter AI with flank maneuvers, bush ambushes, and decoy foxfire after 02:00 AM',
        'Custom smartwatch HUD tracking clock, battery level, and proximity-driven heart rate BPM',
        'Tactical beam repel & blinding flash stun mechanics with synthesized Web Audio soundscape'
      ],
      controls: {
        pc: 'WASD / Arrows to move · Mouse to aim beam · Left Click / Space to flash · Right Click / F toggle light · P / Esc pause',
        mobile: 'Left virtual stick to move · Right independent aim stick · Dedicated Flash & Light toggle buttons'
      },
      portraitCaption: 'Inari-hime Shizune'
    }
  },
  {
    id: 'whack-shiki',
    catalogNo: 'NO. 02',
    categories: ['casual', 'mobile'],
    accent: '#2F7EC4',
    accentSoft: 'rgba(47, 126, 196, 0.11)',
    playUrl: 'https://gdhjdsydh.github.io/Whack-Shiki/',
    repoUrl: 'https://github.com/GDHJDSYDH/Whack-Shiki',
    coverType: 'whack-shiki',
    coverImage: 'assets/games/whack-beach.jpg',
    characterImage: 'assets/games/whack-shiki.png',
    hammerImage: 'assets/games/whack-hammer.png',
    portraitImage: 'assets/games/whack-shiki.png',
    updated: '2026-11',
    tech: 'HTML5 · CSS3 · Vanilla JS · OGG Audio',
    license: 'Fan Game · Open Source',
    zh: {
      coverBadge: '3×3 鸟白岛海滩',
      title: '神山识打地鼠',
      subtitle: 'Whack-Shiki · Summer Pockets 同人',
      genre: '夏日海滩休闲打地鼠',
      tagline: '在鸟白岛阳光沙地上，用小锤子捕捉俏皮探头的 Q 版神山识！',
      summary:
        '以《Summer Pockets》鸟白岛海滩与「鬼姫神山識之鎮魂碑」为舞台的轻量休闲打地鼠小游戏。Q 版神山识会从 3×3 沙洞中随机探出，敲中即触发委屈大哭表情、连击特效与完整角色语音，轻松解压。',
      tags: ['休闲街机', 'Summer Pockets 同人', '全语音 & BGM', '三档难度'],
      highlights: [
        '还原鸟白岛阳光海滩与「鬼姫神山識之鎮魂碑」俯视场景，3×3 共 9 个沙洞',
        'Q 版神山识灵动探头与即时受击大哭表情切换，附带锤子打击反馈与连击计数',
        '完整收录角色受击 / 胜负语音与循环 BGM，支持随时一键静音',
        '简单 / 普通 / 困难三档难度，桌面端锤子随鼠标移动，手机端直接轻点敲击'
      ],
      controls: {
        pc: '移动鼠标控制小锤子位置 · 左键快速敲击探头的神山识 · 界面按钮切换难度与静音',
        mobile: '直接轻触屏幕上探头的神山识即可敲击，随时单手畅玩'
      },
      portraitCaption: 'Q 版神山识'
    },
    en: {
      coverBadge: '3×3 Torishirojima Beach',
      title: 'Whack-Shiki',
      subtitle: 'Summer Pockets Fan Whack-a-Mole',
      genre: 'Casual Arcade',
      tagline: 'Sunny Torishirojima beach whack-a-mole starring chibi Kamiyama Shiki!',
      summary:
        'A cheerful Summer Pockets fan-made whack-a-mole game set on the sunlit Torishirojima beach in front of the memorial stele. Catch playful chibi Shiki popping out of 9 sand holes with expressive reactions, combos, and full voice clips.',
      tags: ['Casual Arcade', 'Summer Pockets Fan', 'Voice & BGM', '3 Difficulties'],
      highlights: [
        'Sunlit Torishirojima beach stage featuring the iconic stele and a 3×3 sand-hole grid',
        'Expressive chibi Shiki pop-up and crying hit animations with combo tracking',
        'Full character voice lines (Hit / Win / Lose) and looping BGM with one-tap mute',
        'Easy / Normal / Hard modes supporting cursor-following hammer on PC and tap play on mobile'
      ],
      controls: {
        pc: 'Move mouse to aim the toy hammer · Left-click Shiki as she pops out · Toggle difficulty & audio on HUD',
        mobile: 'Tap directly on Shiki as she peeks out of the sand holes for fast arcade combos'
      },
      portraitCaption: 'Chibi Kamiyama Shiki'
    }
  },
  {
    id: 'umi-friedrice-game',
    catalogNo: 'NO. 03',
    categories: ['simulation', 'casual', 'mobile'],
    accent: '#D97724',
    accentSoft: 'rgba(217, 119, 36, 0.12)',
    playUrl: 'https://gdhjdsydh.github.io/Umi-Friedrice-Game/',
    repoUrl: 'https://github.com/GDHJDSYDH/Umi-Friedrice-Game',
    coverType: 'umi-kitchen',
    coverImage: 'assets/games/umi-cover.jpg',
    portraitImage: 'assets/games/umi-portrait.png',
    updated: '2026-11',
    tech: 'React · TypeScript · Vite · Web Audio',
    license: 'Fan Game · Open Source',
    zh: {
      coverBadge: '六维炒饭评分 · 4 款锅具',
      title: '羽未的炒饭游戏',
      subtitle: 'Umi-Friedrice-Game · Summer Pockets 同人',
      genre: '夏日厨房模拟烹饪',
      tagline: '在加藤家午后阳光厨房里，掌勺翻炒一盘让羽未眼睛发光的满分炒饭！',
      summary:
        '《Summer Pockets》同人第一人称网页炒饭模拟器。自选 4 种特性锅具与 20 种配菜自由组合，掌控 5 档燃气火力、7 种调味料化学反应与木铲翻炒 QTE，最终由 Q 版加藤羽未给出六维雷达评分与 5 档表情点评。',
      tags: ['模拟烹饪', '翻炒 QTE', 'Summer Pockets 同人', '六维评分'],
      highlights: [
        '4 种特色锅具（熟铁锅 / 羽未红底不粘锅 / 铸铁锅 / 铜制炒锅）自带热惯性、锅气与 QTE 加成',
        '20 种海鲜 / 肉类 / 蔬菜自由挑 4 种搭配，7 种调味料可触发【金包银】【锅边呛酱油】【蜜汁焦糖】等隐藏高阶技巧',
        '5 档火力调控 + 木铲翻炒 QTE（Excellent / Great / Good / Bad），实时抛起锅内米粒与配菜',
        '六维精密雷达图评分（火候、熟度、技法、调味、色泽、出锅）+ Q 版羽未 5 档品尝差分表情与点评'
      ],
      controls: {
        pc: '鼠标点击食材下锅、添加调味料与控火 · 数字键 0~5 快捷切火 · 点击木铲/锅体或按 Space 触发翻炒 QTE',
        mobile: '直接触屏点选锅具、配菜、火力档位与调味料，轻点木铲或锅体即可畅快翻炒 QTE'
      },
      portraitCaption: 'Q 版加藤羽未'
    },
    en: {
      coverBadge: '6-Axis Scoring · 4 Woks',
      title: "Umi's Fried Rice",
      subtitle: 'Umi-Friedrice-Game · Summer Pockets Fan Sim',
      genre: 'Cooking Simulation',
      tagline: 'Step into the sunlit Kato kitchen and wok-toss a golden fried rice to delight Umi!',
      summary:
        'A first-person Summer Pockets fan cooking simulator set in the afternoon Torishirojima kitchen. Pick from 4 unique woks and 20 ingredients, master 5 burner heat levels, 7 seasonings, and spatula QTE tosses for a 6-axis score and Umi tasting reactions.',
      tags: ['Cooking Sim', 'Spatula QTE', 'Summer Pockets Fan', '6-Axis Rating'],
      highlights: [
        '4 distinct woks (carbon steel, Umi red nonstick, cast iron, copper) with thermal inertia, wok-hei, and QTE modifiers',
        'Pick up to 4 of 20 ingredients plus 7 seasonings to trigger hidden culinary combos like Golden Egg Coat & Soy Rim Sear',
        '5-level gas flame control & dynamic spatula toss QTE (Excellent / Great / Good / Bad) with live tossed rice particles',
        '6-axis radar chart evaluation paired with 5 expressive chibi Kato Umi tasting grades and reviews'
      ],
      controls: {
        pc: 'Click ingredients, seasonings, and burner controls · Keys 0–5 for flame levels · Click wok/spatula or press Space for QTE',
        mobile: 'Tap directly to pick woks, drop ingredients, adjust flame, season, and tap the wok/spatula for toss QTEs'
      },
      portraitCaption: 'Chibi Kato Umi'
    }
  },
  {
    id: 'snowball-battle',
    catalogNo: 'NO. 04',
    categories: ['action', 'mobile'],
    accent: '#2A8FA8',
    accentSoft: 'rgba(42, 143, 168, 0.12)',
    playUrl: 'https://gdhjdsydh.github.io/Snowball-Battle/',
    repoUrl: 'https://github.com/GDHJDSYDH/Snowball-Battle',
    coverType: 'snowball',
    coverImage: 'assets/games/snowball-cover.jpg',
    portraitImage: 'assets/games/snowball-portrait.png',
    updated: '2026-11',
    tech: 'HTML5 Canvas · TypeScript · Vite',
    license: 'CC BY-NC-ND 4.0',
    zh: {
      coverBadge: '4 位 OC 角色 · 双模式',
      title: '像素打雪仗',
      subtitle: 'Snowball-Battle · 2.5D 像素风打雪仗',
      genre: '2.5D 像素动作对战',
      tagline: '化身四位 Q 版像素主角，在飘雪林间展开技能与五色魔典齐飞的热血雪仗！',
      summary:
        '采用 2.5D 立体纵深呈现的像素风打雪仗游戏，包含动态 Y-Sort 遮挡、Z 轴雪球抛物线与树冠穿行淡化。提供 5 关 + 双阶段 BOSS 的「冒险模式」与 4 人 AI「混战模式」，并收录四位自带专属技能的 Q 版 OC 角色与五色魔法书道具。',
      tags: ['动作对战', '2.5D 像素风', '4 位角色技能', 'PC / 手机双端'],
      highlights: [
        '四位 Q 版像素主角与专属技能：尤妮安娜「时间冻结」、苏米「曲奇回血」、白雪喵都「寒冰护盾」、小苏「拔刀斩」',
        '双模式畅玩：5 关深入雪原直面双阶段 BOSS「极寒霜王」的冒险模式，以及支持生存淘汰与积分赛的 4 人大乱斗',
        '丰富拾取道具与五色魔法书：绷带、冰淇淋、热可可，以及五发散弹、无限连射、极寒减速、暴击与穿透魔典',
        '精细 2.5D 立体细节：雪球抛物线投影、雪地脚印、雪堆装填与冲刺无敌帧，完美适配键鼠与触屏摇杆'
      ],
      controls: {
        pc: 'WASD / 方向键移动 · 鼠标瞄准 + 左键投掷 · Z 冲刺 · 雪堆旁长按 R 补雪 · X / E / 右键释放技能 · Esc / P 暂停',
        mobile: '左侧虚拟摇杆移动 · 右侧支持轻点自动瞄准或按住拖拽精准投掷，配独立冲刺、技能与长按装填按钮'
      },
      portraitCaption: '尤妮安娜 (Unianna)'
    },
    en: {
      coverBadge: '4 Heroes · Adventure & Brawl',
      title: 'Snowball Battle',
      subtitle: '2.5D Pixel Art Snowball Arena',
      genre: '2.5D Action Battle',
      tagline: 'Pick from 4 pixel chibi heroes with signature skills for fast-paced 2.5D snowball action!',
      summary:
        'A lively 2.5D pixel-art snowball battle game featuring Y-sorted depth, parabolic snowball arcs, footprints, and fading pine canopies. Battle through a 5-stage Adventure campaign ending in the Frost King boss, or jump into a 4-way AI Brawl.',
      tags: ['Action Battle', '2.5D Pixel Art', '4 Hero Skills', 'PC & Mobile'],
      highlights: [
        '4 playable chibi heroes with unique skills: Unianna (Time Freeze), Kuki (Cookie Heal), Miyako (Ice Shield), and Tessel (Iaido Slash)',
        'Two game modes: 5-stage Adventure mode with two-phase Frost King boss fight, plus 4-character Survival & Score Brawl',
        'Pickups & 5 elemental grimoires: Bandage, Ice Cream, Hot Cocoa, plus 5-Spread, Infinite Fire, Frost Slow, Crit & Pierce tomes',
        'Polished 2.5D combat with snowpile reloading, dash invincibility frames, and full mouse/keyboard or touch-stick controls'
      ],
      controls: {
        pc: 'WASD / Arrows to move · Mouse aim + Left Click throw · Z dash · Hold R near snowpile to reload · X / E / Right Click skill',
        mobile: 'Left virtual stick to move · Right tap auto-aim or drag-to-aim throw, plus dedicated Dash, Skill, and Hold-to-Reload buttons'
      },
      portraitCaption: 'Unianna'
    }
  }
];

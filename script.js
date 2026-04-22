const categories = [
  "全部",
  "学习成长",
  "职业事业",
  "关系家庭",
  "财富资产",
  "健康身心",
  "社交影响力",
  "生活探索",
];

const categoryDescriptions = {
  全部: {
    title: "全量事件列表",
    hint: "不再按童年、青年等阶段拆分，直接从完整事件池里看当前年龄下什么更值得优先关注。",
  },
  学习成长: {
    title: "学习成长",
    hint: "关注学历、考证、技能深化等长期复利型事件在当前年龄的优先级变化。",
  },
  职业事业: {
    title: "职业事业",
    hint: "观察入行、晋升、跳槽、创业和个人职业资产建设在当前年龄的窗口强度。",
  },
  关系家庭: {
    title: "关系家庭",
    hint: "查看亲密关系、婚姻、生育、育儿和父母照护在不同年龄下的重要程度。",
  },
  财富资产: {
    title: "财富资产",
    hint: "看财富积累、置业、退休准备和技能变现等事件何时更该提上日程。",
  },
  健康身心: {
    title: "健康身心",
    hint: "身体管理与心理韧性不是晚一点再做的选项，而是越早越省成本的底层工程。",
  },
  社交影响力: {
    title: "社交影响力",
    hint: "观察人脉经营、个人品牌和外部影响力在不同年龄下的投入价值。",
  },
  生活探索: {
    title: "生活探索",
    hint: "兴趣、迁居、生活方式重构这类事件，会在不同年龄打开不同质量的窗口。",
  },
};

const stageDefinitions = [
  {
    min: 1,
    max: 6,
    name: "启蒙期",
    summary: "感知世界、建立安全感与基础习惯的早期阶段。",
    narrative: "这个阶段更像打地基，很多长期能力都会从这里萌芽。",
    mood: "每个窗口都从最初的好奇心开始。",
    opportunity: "先重视习惯、兴趣和身体基础，未来很多选择都会因此更轻松。",
    accent: "#7dd3fc",
    secondary: "rgba(246, 200, 108, 0.22)",
    glow: "rgba(66, 196, 255, 0.28)",
  },
  {
    min: 7,
    max: 12,
    name: "成长期",
    summary: "规则意识、自律能力和学习基础快速成型。",
    narrative: "这是建立学习方法、运动习惯和兴趣广度的高回报时期。",
    mood: "早期积累像地基，往后会放大复利。",
    opportunity: "适合培养阅读、表达、运动和稳定兴趣。",
    accent: "#8fe28a",
    secondary: "rgba(115, 172, 255, 0.2)",
    glow: "rgba(143, 226, 138, 0.26)",
  },
  {
    min: 13,
    max: 18,
    name: "青春蓄能",
    summary: "身份认同与能力边界快速扩张，方向开始分流。",
    narrative: "学业、社交、自我认知会在这个阶段密集塑形。",
    mood: "方向还未定型，弹性和潜力都很大。",
    opportunity: "适合打基础、拓视野，同时保留探索空间。",
    accent: "#6fd5d2",
    secondary: "rgba(255, 178, 110, 0.22)",
    glow: "rgba(111, 213, 210, 0.25)",
  },
  {
    min: 19,
    max: 25,
    name: "探索启航",
    summary: "试错、积累和决定方向的时期。",
    narrative: "开始把能力、关系和选择成本真正放到现实环境里检验。",
    mood: "窗口多、变化快，适合试出自己的节奏。",
    opportunity: "优先投入能形成长期复利的学习、作品、关系和职业实验。",
    accent: "#74b9ff",
    secondary: "rgba(255, 204, 116, 0.22)",
    glow: "rgba(116, 185, 255, 0.28)",
  },
  {
    min: 26,
    max: 35,
    name: "深耕建立",
    summary: "个人定位逐渐清晰，事业与关系开始并行推进。",
    narrative: "这是能力兑现、资源整合和长期承诺密集发生的年龄带。",
    mood: "很多事情进入主窗口，但精力分配更考验判断。",
    opportunity: "适合推动能同时提升职业、关系和资产质量的决策。",
    accent: "#b08cff",
    secondary: "rgba(246, 200, 108, 0.24)",
    glow: "rgba(176, 140, 255, 0.28)",
  },
  {
    min: 36,
    max: 50,
    name: "承担扩展",
    summary: "责任密度上升，人生从个人成长走向系统经营。",
    narrative: "事业、家庭、健康和财富之间的资源调度会更频繁。",
    mood: "经验成熟，但重新选择的成本明显提高。",
    opportunity: "适合结构优化、健康守护、资产配置和关系经营。",
    accent: "#ffb777",
    secondary: "rgba(111, 213, 210, 0.18)",
    glow: "rgba(255, 183, 119, 0.28)",
  },
  {
    min: 51,
    max: 65,
    name: "重构沉淀",
    summary: "开始重新分配时间、体力和人生重心。",
    narrative: "这个阶段更适合把经验转成方法、影响力和安全感。",
    mood: "不是减速，而是把能量投向更值得的部分。",
    opportunity: "适合聚焦健康、养老、传承和高质量转型。",
    accent: "#ffc578",
    secondary: "rgba(124, 198, 255, 0.18)",
    glow: "rgba(255, 197, 120, 0.28)",
  },
  {
    min: 66,
    max: 100,
    name: "自在回响",
    summary: "生活重心从扩张转向质量、连接与经验回馈。",
    narrative: "长期积累逐步显现，也更适合经营兴趣、陪伴和传承。",
    mood: "很多新窗口依然存在，只是目标从竞争转向质量。",
    opportunity: "适合健康管理、兴趣深化、资产安全和陪伴关系。",
    accent: "#f7cf85",
    secondary: "rgba(145, 195, 255, 0.16)",
    glow: "rgba(247, 207, 133, 0.24)",
  },
];

const toneLabelMap = {
  golden: "关键窗口",
  easy: "高优先级",
  normal: "值得布局",
  challenge: "可以准备",
  hard: "低优先级",
};

const events = [
  {
    id: "education",
    title: "学历提升",
    category: "学习成长",
    description: "从升学到在职深造，学历与系统学习能力会明显影响长期选择空间。",
    window: "13-30 岁主窗口，之后更依赖明确目标",
    hint: "越早建立学习系统，越容易把学历转化成能力与路径选择权。",
    rules: [
      makeRule(1, 12, "基础建立", "normal", 62, "先把阅读、表达和学习习惯打牢，不急于追求结果。"),
      makeRule(13, 22, "关键窗口", "golden", 95, "这是学历跃迁和系统训练回报最高的阶段。"),
      makeRule(23, 30, "高优先级", "easy", 84, "适合考研、读研、二学位或补齐关键学历短板。"),
      makeRule(31, 45, "值得布局", "normal", 64, "更适合围绕职业目标做定向深造，而不是大范围重走路径。"),
      makeRule(46, 100, "可以准备", "challenge", 42, "依然能学，但更适合作为补强或兴趣深耕。"),
    ],
  },
  {
    id: "certification",
    title: "考证进修",
    category: "学习成长",
    description: "职业证书、专业资格和关键课程训练，往往决定你能否跨门槛进入下一阶段。",
    window: "20-40 岁较强，越贴近职业需求越有效",
    hint: "证书本身不是终点，关键在于它是否放大你当前路径的杠杆。",
    rules: [
      makeRule(1, 17, "低优先级", "hard", 18, "此时更应优先建立基础能力，而不是为证书焦虑。"),
      makeRule(18, 25, "高优先级", "easy", 86, "适合尽快拿下能帮助入行与筛选的关键资格。"),
      makeRule(26, 40, "关键窗口", "golden", 92, "证书和进修最容易直接转化为岗位竞争力和收入提升。"),
      makeRule(41, 55, "值得布局", "normal", 66, "更适合补齐管理、咨询、财务等结构性能力。"),
      makeRule(56, 100, "可以准备", "challenge", 44, "除非与第二曲线强相关，否则优先级下降。"),
    ],
  },
  {
    id: "careerStart",
    title: "职业起步",
    category: "职业事业",
    description: "从实习到第一份工作，决定了你最初的能力锚点、行业认知与节奏感。",
    window: "18-28 岁是进入职场主窗口",
    hint: "职业起步不必一次选对，但要尽快积累真实工作场景里的有效经验。",
    rules: [
      makeRule(1, 15, "低优先级", "hard", 10, "还没有进入真实职业环境，先积累表达与协作能力。"),
      makeRule(16, 22, "关键窗口", "golden", 94, "实习、校招和第一份正式工作是高影响决策。"),
      makeRule(23, 28, "高优先级", "easy", 88, "仍然是重要起步期，关键是尽快形成可持续的职业方向。"),
      makeRule(29, 40, "值得布局", "normal", 58, "更像补起步短板或重新构建职业基础。"),
      makeRule(41, 100, "低优先级", "hard", 26, "此时重点通常不再是起步，而是转型或重构。"),
    ],
  },
  {
    id: "promotion",
    title: "晋升突破",
    category: "职业事业",
    description: "晋升既取决于能力，也取决于时机、组织位置和影响力积累。",
    window: "25-42 岁是晋升兑现较集中的年龄带",
    hint: "越往后，单点努力越不够，需要更强的团队协同和影响力经营。",
    rules: [
      makeRule(1, 22, "可以准备", "challenge", 30, "先积累成绩、作品和组织协作经验。"),
      makeRule(23, 30, "高优先级", "easy", 84, "适合拉开成长速度差，争取更快进入骨干位置。"),
      makeRule(31, 42, "关键窗口", "golden", 93, "这是从优秀执行者走向核心负责人的集中窗口。"),
      makeRule(43, 55, "值得布局", "normal", 68, "更多依赖业务深度、管理成熟度与战略判断。"),
      makeRule(56, 100, "可以准备", "challenge", 46, "更适合做顾问、导师或影响力角色的跃迁。"),
    ],
  },
  {
    id: "jobChange",
    title: "跳槽转岗",
    category: "职业事业",
    description: "通过岗位切换提升平台、收入与匹配度，是职业节奏里非常现实的一环。",
    window: "22-40 岁通常最灵活",
    hint: "年轻时靠弹性，中段靠迁移能力，越往后越要看你手里已有的筹码。",
    rules: [
      makeRule(1, 20, "低优先级", "hard", 12, "还没有形成足够履历，不急着频繁切换。"),
      makeRule(21, 28, "高优先级", "easy", 86, "适合快速校准平台、方向和岗位匹配。"),
      makeRule(29, 40, "关键窗口", "golden", 90, "最容易通过切换完成平台跃迁或收入抬升。"),
      makeRule(41, 52, "值得布局", "normal", 63, "能跳，但更看重行业深度和资源迁移能力。"),
      makeRule(53, 100, "可以准备", "challenge", 40, "更适合谨慎转向，而不是高频变动。"),
    ],
  },
  {
    id: "entrepreneurship",
    title: "创业尝试",
    category: "职业事业",
    description: "创业不只是勇气，更是风险承受、资源整合和执行耐力的综合题。",
    window: "24-42 岁较强，之后更适合稳健或轻资产模式",
    hint: "能不能创业，往往取决于你是否已经有可放大的能力与资源密度。",
    rules: [
      makeRule(1, 20, "低优先级", "hard", 16, "更适合做小规模项目实验，而不是承担完整创业风险。"),
      makeRule(21, 24, "可以准备", "challenge", 52, "适合先试副业、作品和市场验证。"),
      makeRule(25, 35, "关键窗口", "golden", 94, "经验、精力和试错空间在这里相对平衡。"),
      makeRule(36, 42, "高优先级", "easy", 83, "如果行业认知足够深，反而更容易做稳健型创业。"),
      makeRule(43, 100, "值得布局", "normal", 58, "更适合轻资产、顾问型、品牌型创业路径。"),
    ],
  },
  {
    id: "personalBrand",
    title: "个人品牌",
    category: "社交影响力",
    description: "个人品牌会放大你在机会、合作、信任和议价中的位置感。",
    window: "22-55 岁都值得经营，越早越能积累复利",
    hint: "品牌不是包装，而是持续输出后的可信印象。",
    rules: [
      makeRule(1, 17, "可以准备", "challenge", 34, "先培养表达、作品和持续输出能力。"),
      makeRule(18, 25, "高优先级", "easy", 80, "越早开始留下作品和公开痕迹，越容易形成长期复利。"),
      makeRule(26, 45, "关键窗口", "golden", 91, "个人品牌最容易在职业发展和资源连接中放大价值。"),
      makeRule(46, 60, "高优先级", "easy", 82, "经验与案例积累充足，更适合形成专业影响力。"),
      makeRule(61, 100, "值得布局", "normal", 60, "适合转向经验输出、顾问型影响力和传承价值。"),
    ],
  },
  {
    id: "skillMonetization",
    title: "技能变现",
    category: "财富资产",
    description: "把能力转为副业、咨询、课程或产品，是个人经济安全感的重要补充。",
    window: "20-55 岁较强，越有作品越容易发生",
    hint: "当主业不稳定时，技能变现能显著提升个人抗风险能力。",
    rules: [
      makeRule(1, 17, "低优先级", "hard", 14, "先积累技能本身，不必急着追求商业化。"),
      makeRule(18, 24, "高优先级", "easy", 78, "适合尝试副业、接单、内容变现或小规模服务。"),
      makeRule(25, 45, "关键窗口", "golden", 92, "经验、作品和人脉更容易转成真实收入。"),
      makeRule(46, 55, "高优先级", "easy", 81, "适合把成熟经验打包成顾问、课程或服务产品。"),
      makeRule(56, 100, "值得布局", "normal", 62, "适合轻量化、可持续的变现方式。"),
    ],
  },
  {
    id: "relationship",
    title: "亲密关系",
    category: "关系家庭",
    description: "高质量关系既依赖情感投入，也依赖成熟度、边界感和现实承接能力。",
    window: "22-35 岁通常是关系质量较高的建立窗口",
    hint: "不是越早越好，而是越接近自我稳定期越容易建立长期关系。",
    rules: [
      makeRule(1, 17, "低优先级", "hard", 12, "此时更重要的是认识自己和建立情绪边界。"),
      makeRule(18, 24, "可以准备", "challenge", 58, "情感浓度高，但长期匹配与现实承接仍在发展。"),
      makeRule(25, 35, "关键窗口", "golden", 93, "成熟度、价值观和现实条件更容易形成稳定关系。"),
      makeRule(36, 45, "高优先级", "easy", 79, "依然很重要，只是筛选成本和生活复杂度都更高。"),
      makeRule(46, 100, "值得布局", "normal", 60, "高质量关系依然可能发生，但节奏和目标更偏质量导向。"),
    ],
  },
  {
    id: "marriage",
    title: "婚姻决策",
    category: "关系家庭",
    description: "婚姻是节奏、价值观、经济承载和长期承诺的综合选择。",
    window: "25-36 岁是常见主窗口",
    hint: "真正重要的不是赶进度，而是在合适阶段做清醒的长期决策。",
    rules: [
      makeRule(1, 21, "低优先级", "hard", 8, "大多数情况下还没有进入稳定承诺的成熟期。"),
      makeRule(22, 25, "可以准备", "challenge", 54, "适合开始认真理解长期关系与现实协同。"),
      makeRule(26, 36, "关键窗口", "golden", 91, "成熟度与现实基础更容易支持稳定婚姻决策。"),
      makeRule(37, 45, "高优先级", "easy", 76, "依然重要，但筛选效率和现实复杂度同步上升。"),
      makeRule(46, 100, "值得布局", "normal", 55, "重点从传统节奏转向质量、陪伴与价值契合。"),
    ],
  },
  {
    id: "parenting",
    title: "生育育儿",
    category: "关系家庭",
    description: "生育与育儿既是生理与体力议题，也是时间、情绪和家庭结构议题。",
    window: "27-38 岁通常更平衡",
    hint: "提前做健康评估和家庭协同设计，会比临时决策轻松得多。",
    rules: [
      makeRule(1, 24, "低优先级", "hard", 10, "还未进入大多数人适合承担这类责任的阶段。"),
      makeRule(25, 27, "可以准备", "challenge", 60, "适合做体检、沟通和现实安排。"),
      makeRule(28, 38, "关键窗口", "golden", 92, "身体条件与现实承接能力通常更平衡。"),
      makeRule(39, 45, "高优先级", "easy", 72, "仍可推进，但需要更充分的支持系统和风险预案。"),
      makeRule(46, 100, "低优先级", "hard", 26, "更多是照护与家庭结构议题，而非生育本身。"),
    ],
  },
  {
    id: "parentCare",
    title: "父母照护",
    category: "关系家庭",
    description: "随着年龄增长，照护父母会逐渐成为很多人避不开的重要责任。",
    window: "35 岁后持续上升，50 岁后更突出",
    hint: "越早做沟通、保险、健康和家庭分工安排，压力越不会集中爆发。",
    rules: [
      makeRule(1, 29, "低优先级", "hard", 18, "此时通常还不是主议题，但可以开始建立家庭风险意识。"),
      makeRule(30, 39, "值得布局", "normal", 66, "适合提前了解父母健康、财务和保障状况。"),
      makeRule(40, 55, "高优先级", "easy", 86, "很多家庭开始进入照护协同的关键阶段。"),
      makeRule(56, 70, "关键窗口", "golden", 94, "这是时间、精力和资源配置都高度相关的核心议题。"),
      makeRule(71, 100, "高优先级", "easy", 78, "更多体现为陪伴、安排与传承层面的责任。"),
    ],
  },
  {
    id: "health",
    title: "身体健康",
    category: "健康身心",
    description: "健康是人生里极少数几乎任何年龄都值得优先投入的长期项目。",
    window: "全周期有效，越早越省成本",
    hint: "健康不是锦上添花，而是多数人生窗口的底层前提。",
    rules: [
      makeRule(1, 12, "高优先级", "easy", 82, "重点是习惯、运动和基础体能。"),
      makeRule(13, 35, "关键窗口", "golden", 96, "最适合建立稳定运动、睡眠和饮食系统。"),
      makeRule(36, 55, "高优先级", "easy", 90, "需要把体检、修复、抗压和长期疾病预防纳入系统。"),
      makeRule(56, 100, "关键窗口", "golden", 94, "健康投入会直接决定生活质量、独立性和后续选择。"),
    ],
  },
  {
    id: "mentalResilience",
    title: "心理韧性",
    category: "健康身心",
    description: "情绪稳定、自我调节和心理弹性，会在压力时代显著影响决策质量。",
    window: "15 岁后长期重要，30 岁后价值更明显",
    hint: "很多问题不是能力不够，而是长期承压后没有恢复系统。",
    rules: [
      makeRule(1, 12, "可以准备", "challenge", 34, "重点是情绪识别、安全感与表达能力。"),
      makeRule(13, 25, "高优先级", "easy", 84, "自我认知、挫折恢复和情绪管理会深刻影响路径选择。"),
      makeRule(26, 45, "关键窗口", "golden", 90, "高压力与高责任并行时，心理韧性会成为核心底层能力。"),
      makeRule(46, 65, "高优先级", "easy", 82, "适合做长期稳定感建设，而不是只在崩溃时处理。"),
      makeRule(66, 100, "值得布局", "normal", 68, "重点转向情绪质量、陪伴感和内在稳定。"),
    ],
  },
  {
    id: "network",
    title: "人脉经营",
    category: "社交影响力",
    description: "高质量关系来自长期出现、可信输出与合作口碑，而不是单次社交热闹。",
    window: "18-50 岁较强，越早经营越有复利",
    hint: "人脉真正有用的前提，是你本身也值得被反复合作。",
    rules: [
      makeRule(1, 12, "可以准备", "challenge", 28, "先建立表达、协作和与人相处的基本能力。"),
      makeRule(13, 20, "高优先级", "easy", 76, "校园和早期社群是低成本连接的重要时期。"),
      makeRule(21, 45, "关键窗口", "golden", 91, "职业、项目和圈层流动最容易放大关系网络。"),
      makeRule(46, 60, "高优先级", "easy", 78, "广度不一定最重要，深连接与高质量关系更重要。"),
      makeRule(61, 100, "值得布局", "normal", 58, "更适合经营长期关系、陪伴与经验连接。"),
    ],
  },
  {
    id: "wealth",
    title: "财富积累",
    category: "财富资产",
    description: "财富积累是收入、储蓄、投资习惯与风险控制共同作用的长期工程。",
    window: "25-60 岁是最强积累带",
    hint: "越早理解现金流与风险边界，越容易把波动收入变成安全感。",
    rules: [
      makeRule(1, 17, "可以准备", "challenge", 30, "重点是财商启蒙、储蓄意识和延迟满足。"),
      makeRule(18, 25, "高优先级", "easy", 80, "先建立储蓄率和稳健习惯，比追求高收益更重要。"),
      makeRule(26, 45, "关键窗口", "golden", 95, "收入增长、资产配置和复利时间会同时发挥作用。"),
      makeRule(46, 60, "高优先级", "easy", 88, "适合强化资产安全、家庭保障和现金流质量。"),
      makeRule(61, 100, "值得布局", "normal", 70, "重点从扩张转向保值、流动性和生活质量。"),
    ],
  },
  {
    id: "homeOwnership",
    title: "买房置业",
    category: "财富资产",
    description: "置业往往同时牵动居住稳定、现金流压力和家庭结构选择。",
    window: "27-45 岁通常是主决策带",
    hint: "房产更像生活结构决策，不只是投资动作。",
    rules: [
      makeRule(1, 24, "低优先级", "hard", 12, "通常还不是主命题，先建立收入和流动性更重要。"),
      makeRule(25, 30, "可以准备", "challenge", 62, "适合评估城市、通勤、预算与生活方式需求。"),
      makeRule(31, 45, "关键窗口", "golden", 88, "这是很多人把置业纳入家庭和资产结构的高频时期。"),
      makeRule(46, 60, "高优先级", "easy", 72, "更多关注改善型置换、房贷压力与居住质量。"),
      makeRule(61, 100, "值得布局", "normal", 48, "重点更偏资产安全、养老便利和居住舒适。"),
    ],
  },
  {
    id: "retirement",
    title: "退休准备",
    category: "财富资产",
    description: "退休并不是某一天突然开始，而是很早就应该布局的长期安全系统。",
    window: "35 岁后优先级明显提升",
    hint: "越晚开始，越需要更高强度的储蓄和风险控制。",
    rules: [
      makeRule(1, 24, "低优先级", "hard", 10, "可以知道概念，但不必成为主要焦点。"),
      makeRule(25, 34, "可以准备", "challenge", 52, "适合建立长期储蓄与保险意识。"),
      makeRule(35, 50, "高优先级", "easy", 84, "越早形成退休账户和长期计划，压力越小。"),
      makeRule(51, 70, "关键窗口", "golden", 95, "这个阶段需要把养老现金流和资产安全真正落地。"),
      makeRule(71, 100, "高优先级", "easy", 86, "重点转向支出节奏、流动性和生活质量管理。"),
    ],
  },
  {
    id: "hobby",
    title: "兴趣深耕",
    category: "生活探索",
    description: "兴趣不仅提升幸福感，也可能在某些阶段成长为第二身份或长期陪伴。",
    window: "任何年龄都值得开始，越早越容易形成复利",
    hint: "兴趣不是无用消遣，它常常能成为抗压、连接和创造的来源。",
    rules: [
      makeRule(1, 18, "高优先级", "easy", 88, "这是广泛尝试、建立审美和感知力的黄金阶段。"),
      makeRule(19, 35, "值得布局", "normal", 72, "兴趣能帮助建立风格、社交和长期能量来源。"),
      makeRule(36, 55, "高优先级", "easy", 78, "越忙越需要兴趣作为恢复系统和生活稳定器。"),
      makeRule(56, 100, "关键窗口", "golden", 90, "兴趣会显著提升生活质量、认知活跃度和幸福感。"),
    ],
  },
  {
    id: "relocation",
    title: "迁居换城",
    category: "生活探索",
    description: "更换城市或生活环境，往往意味着重新配置职业、关系和生活方式。",
    window: "18-40 岁相对灵活，之后更依赖成熟资源",
    hint: "迁居成功通常不是冲动离开，而是清楚知道你要交换什么。",
    rules: [
      makeRule(1, 17, "低优先级", "hard", 8, "更多是被动跟随家庭环境变化。"),
      makeRule(18, 28, "高优先级", "easy", 84, "迁居最容易改变视野、平台与职业机会密度。"),
      makeRule(29, 40, "关键窗口", "golden", 88, "适合基于职业升级、家庭规划或生活方式重构做决策。"),
      makeRule(41, 55, "值得布局", "normal", 60, "可以迁居，但需要更充分的资源和家庭协同。"),
      makeRule(56, 100, "可以准备", "challenge", 42, "更适合为了养老、气候和生活质量做轻量调整。"),
    ],
  },
  {
    id: "languageSkill",
    title: "外语突破",
    category: "学习成长",
    description: "语言能力会直接影响信息获取、工作机会、跨文化沟通和迁移动能。",
    window: "12-35 岁是提升效率较高的主窗口",
    hint: "越早把语言变成工具，而不是考试项目，复利越明显。",
    rules: [
      makeRule(1, 11, "可以准备", "challenge", 34, "先建立兴趣和语感，不必急于功利化。"),
      makeRule(12, 22, "关键窗口", "golden", 92, "语言突破最容易形成长期能力优势。"),
      makeRule(23, 35, "高优先级", "easy", 82, "对职业跃迁、出国和信息密度提升很有帮助。"),
      makeRule(36, 50, "值得布局", "normal", 60, "仍值得学，但更适合围绕明确应用场景推进。"),
      makeRule(51, 100, "可以准备", "challenge", 40, "更适合作为兴趣或辅助能力，而非主赛道。"),
    ],
  },
  {
    id: "digitalSkill",
    title: "数字能力",
    category: "学习成长",
    description: "AI、数据、自动化和数字工具能力，正在成为多数行业的新型基础设施。",
    window: "18-45 岁优先级高，越早掌握越能放大职业杠杆",
    hint: "这类能力不是只给技术岗准备，而是未来多数岗位的通用加速器。",
    rules: [
      makeRule(1, 15, "可以准备", "challenge", 28, "先建立基本信息素养和工具意识。"),
      makeRule(16, 28, "关键窗口", "golden", 95, "越早掌握数字工具，越容易形成复利和机会差。"),
      makeRule(29, 45, "高优先级", "easy", 88, "对效率、协作和职业竞争力提升都很直接。"),
      makeRule(46, 60, "值得布局", "normal", 66, "重点是学会最能减负增效的那部分，而不是全覆盖。"),
      makeRule(61, 100, "可以准备", "challenge", 46, "适合围绕生活效率和轻量创作去掌握。"),
    ],
  },
  {
    id: "managementSkill",
    title: "管理能力",
    category: "职业事业",
    description: "管理不是头衔，而是带人、分配资源、做判断和推动系统运转的能力。",
    window: "28-50 岁是集中形成管理能力的阶段",
    hint: "越往上走，个人能力的边界越明显，管理能力会决定你的上限。",
    rules: [
      makeRule(1, 22, "低优先级", "hard", 16, "先把个人执行力和协作能力打牢。"),
      makeRule(23, 30, "可以准备", "challenge", 60, "适合带项目、带小团队，试着承担管理职责。"),
      makeRule(31, 45, "关键窗口", "golden", 93, "管理能力会直接影响职业天花板和资源调度能力。"),
      makeRule(46, 60, "高优先级", "easy", 82, "重点从带团队走向带系统、带判断。"),
      makeRule(61, 100, "值得布局", "normal", 56, "更适合转化为顾问、导师和组织影响力。"),
    ],
  },
  {
    id: "industryPivot",
    title: "行业转型",
    category: "职业事业",
    description: "从一个行业切换到另一个行业，往往比换岗位更需要积累可迁移资产。",
    window: "24-42 岁弹性最大",
    hint: "转型成功通常不是清空重来，而是把旧能力迁移到新行业里放大。",
    rules: [
      makeRule(1, 20, "低优先级", "hard", 10, "还没真正进入行业，不需要提前定义转型。"),
      makeRule(21, 28, "高优先级", "easy", 82, "试错成本低，最适合校准行业方向。"),
      makeRule(29, 42, "关键窗口", "golden", 90, "既有积累又有调整空间，是高质量行业转型高发期。"),
      makeRule(43, 55, "值得布局", "normal", 62, "需要更强的网络、作品和迁移能力支持。"),
      makeRule(56, 100, "可以准备", "challenge", 40, "更适合做轻转型或顾问式转向。"),
    ],
  },
  {
    id: "cashflow",
    title: "现金流规划",
    category: "财富资产",
    description: "现金流质量会直接决定你抵御风险、做选择和承担长期计划的能力。",
    window: "22-60 岁持续重要，30 岁后更该系统化",
    hint: "赚得多不等于稳，真正稳的是你能否掌控支出结构和储备周期。",
    rules: [
      makeRule(1, 17, "可以准备", "challenge", 24, "先建立花钱边界和储蓄意识。"),
      makeRule(18, 28, "高优先级", "easy", 78, "开始独立生活后，现金流习惯会很快影响生活质量。"),
      makeRule(29, 45, "关键窗口", "golden", 90, "房贷、育儿、换岗和创业都要求更强现金流管理。"),
      makeRule(46, 60, "高优先级", "easy", 86, "现金流质量会直接影响中年安全感和转型弹性。"),
      makeRule(61, 100, "关键窗口", "golden", 88, "退休后的生活稳定，本质上就是现金流管理问题。"),
    ],
  },
  {
    id: "insurance",
    title: "保险保障",
    category: "财富资产",
    description: "保障配置的价值在于避免一次意外把多年积累瞬间打穿。",
    window: "25 岁后优先级持续上升，成家后更明显",
    hint: "保险不是投资，而是给人生节奏留一层缓冲垫。",
    rules: [
      makeRule(1, 21, "低优先级", "hard", 12, "此时更多依赖家庭保障体系。"),
      makeRule(22, 30, "可以准备", "challenge", 58, "适合先搭基础保障，避免完全裸奔。"),
      makeRule(31, 50, "关键窗口", "golden", 90, "家庭责任与资产规模都上来后，保障的重要性显著提升。"),
      makeRule(51, 65, "高优先级", "easy", 84, "重点在续保、补缺口与长期护理类风险。"),
      makeRule(66, 100, "值得布局", "normal", 60, "更多转向已有保障维护与支出安排。"),
    ],
  },
  {
    id: "bodyManagement",
    title: "体态管理",
    category: "健康身心",
    description: "体态、力量和代谢状态会持续影响外在状态、自信感和身体寿命。",
    window: "15-45 岁最容易形成稳定成果",
    hint: "比起追求短期效果，更重要的是让身体进入可持续的好状态。",
    rules: [
      makeRule(1, 14, "可以准备", "challenge", 38, "重点是运动兴趣和身体协调性。"),
      makeRule(15, 30, "关键窗口", "golden", 92, "此时建立力量、代谢和体态习惯最省力。"),
      makeRule(31, 45, "高优先级", "easy", 86, "越早管理越能抵消久坐和高压带来的下滑。"),
      makeRule(46, 60, "值得布局", "normal", 70, "重点从塑形转向功能性、关节和长期稳定。"),
      makeRule(61, 100, "可以准备", "challenge", 52, "依然重要，但目标更偏灵活性、平衡和行动能力。"),
    ],
  },
  {
    id: "sleepRecovery",
    title: "睡眠修复",
    category: "健康身心",
    description: "高质量睡眠会直接影响认知、情绪、决策与长期健康，是被低估的底层事件。",
    window: "全周期重要，压力期尤其关键",
    hint: "很多效率问题，最后其实都是恢复系统出了问题。",
    rules: [
      makeRule(1, 12, "高优先级", "easy", 78, "睡眠习惯会长期影响身心基础。"),
      makeRule(13, 25, "高优先级", "easy", 84, "熬夜成本容易被低估，但对学习和情绪影响很大。"),
      makeRule(26, 45, "关键窗口", "golden", 92, "高压力阶段最需要把睡眠当成核心能力管理。"),
      makeRule(46, 65, "高优先级", "easy", 88, "修复质量会明显影响精力、情绪和身体状态。"),
      makeRule(66, 100, "关键窗口", "golden", 90, "睡眠质量直接关系到生活质量与认知活跃度。"),
    ],
  },
  {
    id: "communication",
    title: "沟通表达",
    category: "社交影响力",
    description: "清晰表达会影响关系质量、职业推进、影响力建立和冲突处理能力。",
    window: "15 岁后长期高价值，越早越有复利",
    hint: "很多机会不是不存在，而是输在表达、理解和传达上。",
    rules: [
      makeRule(1, 12, "高优先级", "easy", 74, "越早建立清晰表达能力，后续学习与社交都更顺。"),
      makeRule(13, 25, "关键窗口", "golden", 90, "表达能力最容易在学业、社交和职场起步中放大差距。"),
      makeRule(26, 50, "高优先级", "easy", 88, "这是影响晋升、合作和关系质量的核心能力。"),
      makeRule(51, 100, "值得布局", "normal", 70, "表达会更多转向经验输出、协调和陪伴质量。"),
    ],
  },
  {
    id: "circleUpgrade",
    title: "圈层升级",
    category: "社交影响力",
    description: "圈层并不是虚荣名词，而是你能接触到的信息、机会和合作质量的总和。",
    window: "20-45 岁是主动升级圈层的高势能期",
    hint: "真正的圈层升级，通常来自能力提升和长期可信输出，而不是单次社交。",
    rules: [
      makeRule(1, 17, "可以准备", "challenge", 24, "先把自己变成值得被连接的人。"),
      makeRule(18, 28, "高优先级", "easy", 82, "适合借校园、城市流动和初期职业窗口扩大边界。"),
      makeRule(29, 45, "关键窗口", "golden", 91, "高质量圈层会显著影响职业速度和资源质量。"),
      makeRule(46, 60, "值得布局", "normal", 68, "重心从广度转向关键连接的质量和密度。"),
      makeRule(61, 100, "可以准备", "challenge", 46, "更适合经营长期可信关系，而非追求新圈层。"),
    ],
  },
  {
    id: "childEducation",
    title: "子女教育",
    category: "关系家庭",
    description: "对子女教育方式、陪伴质量和资源配置的选择，会影响整个家庭的节奏。",
    window: "有孩子后会快速上升，35-55 岁往往最集中",
    hint: "教育不只是投入资源，更是投入陪伴方式和家庭结构设计。",
    rules: [
      makeRule(1, 27, "低优先级", "hard", 8, "在大多数情况下还未进入这类责任阶段。"),
      makeRule(28, 35, "可以准备", "challenge", 52, "有育儿计划时可以提前理解教育观和资源安排。"),
      makeRule(36, 55, "关键窗口", "golden", 92, "子女成长阶段会让教育决策成为家庭核心议题。"),
      makeRule(56, 70, "高优先级", "easy", 70, "更多体现为陪伴、支持和边界调整。"),
      makeRule(71, 100, "值得布局", "normal", 40, "主议题逐渐转向成年子女关系与家庭协同。"),
    ],
  },
  {
    id: "travel",
    title: "长途旅行",
    category: "生活探索",
    description: "旅行不仅是休闲，也会影响视野、节奏感、自我理解和生活方式选择。",
    window: "18-40 岁弹性最大，之后更看质量",
    hint: "好的旅行会重构人的感受力，而不只是增加打卡记录。",
    rules: [
      makeRule(1, 17, "可以准备", "challenge", 30, "更多是家庭陪伴式体验，重点在打开感受力。"),
      makeRule(18, 30, "关键窗口", "golden", 88, "时间弹性、体力和探索欲最容易形成高质量旅行体验。"),
      makeRule(31, 45, "高优先级", "easy", 74, "适合把旅行变成恢复、学习和重构节奏的一部分。"),
      makeRule(46, 65, "值得布局", "normal", 66, "更适合深度体验型而非高频折腾型旅行。"),
      makeRule(66, 100, "高优先级", "easy", 78, "只要身体允许，旅行会明显提升生活质量和活力感。"),
    ],
  },
  {
    id: "secondCurve",
    title: "第二曲线",
    category: "生活探索",
    description: "第二曲线可能是副业、兴趣事业、顾问角色或新的生活重心。",
    window: "35 岁后持续升温，50 岁后更关键",
    hint: "很多人真正的第二人生，不是在退休后突然开始，而是很早就在埋线。",
    rules: [
      makeRule(1, 24, "低优先级", "hard", 12, "先把第一曲线站稳，不必急于同时开太多线。"),
      makeRule(25, 35, "可以准备", "challenge", 58, "适合开始试探副业、内容、咨询或兴趣产品。"),
      makeRule(36, 50, "高优先级", "easy", 82, "这是为未来安全感和转型弹性布局第二曲线的黄金阶段。"),
      makeRule(51, 70, "关键窗口", "golden", 92, "第二曲线会直接决定你后半程的节奏和自由度。"),
      makeRule(71, 100, "高优先级", "easy", 80, "更适合转成轻量、稳定、可持续的生活重心。"),
    ],
  },
];

const state = {
  age: 25,
  category: "全部",
  sortMode: "best",
  detailEventId: null,
};

const ageSlider = document.getElementById("ageSlider");
const currentAgeDisplay = document.getElementById("currentAgeDisplay");
const ageMood = document.getElementById("ageMood");
const stageName = document.getElementById("stageName");
const stageSummary = document.getElementById("stageSummary");
const stageBadge = document.getElementById("stageBadge");
const stageNarrative = document.getElementById("stageNarrative");
const opportunityHint = document.getElementById("opportunityHint");
const stageOverview = document.getElementById("stageOverview");
const sortMode = document.getElementById("sortMode");
const eventGrid = document.getElementById("eventGrid");
const topActions = document.getElementById("topActions");
const visibleCount = document.getElementById("visibleCount");
const activeCategoryTitle = document.getElementById("activeCategoryTitle");
const activeCategoryHint = document.getElementById("activeCategoryHint");
const detailModal = document.getElementById("detailModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalStatusBadge = document.getElementById("modalStatusBadge");
const modalDescription = document.getElementById("modalDescription");
const modalWindow = document.getElementById("modalWindow");
const modalAdvice = document.getElementById("modalAdvice");
const chartAgeHint = document.getElementById("chartAgeHint");
const detailChart = document.getElementById("detailChart");
const ruleStrip = document.getElementById("ruleStrip");
const bgm = document.getElementById("bgm");
const musicToggle = document.getElementById("musicToggle");
const musicVolume = document.getElementById("musicVolume");
const musicProgress = document.getElementById("musicProgress");
const musicStatus = document.getElementById("musicStatus");
const musicTimeCurrent = document.getElementById("musicTimeCurrent");
const musicTimeDuration = document.getElementById("musicTimeDuration");

initialize();

function initialize() {
  if (sortMode) {
    sortMode.value = state.sortMode;
  }
  renderCategoryOverview();
  bindEvents();
  initializeMusic();
  render();
}

function bindEvents() {
  ageSlider.addEventListener("input", (event) => {
    state.age = Number(event.target.value);
    render();
  });

  sortMode.addEventListener("change", (event) => {
    state.sortMode = event.target.value;
    renderCards();
  });

  stageOverview.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-category]");
    if (!trigger) return;
    state.category = trigger.dataset.category;
    render();
  });

  eventGrid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-event-id]");
    if (!card) return;
    openDetail(card.dataset.eventId);
  });

  modalBackdrop.addEventListener("click", closeDetail);
  modalClose.addEventListener("click", closeDetail);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !detailModal.classList.contains("hidden")) {
      closeDetail();
    }
  });
}

function initializeMusic() {
  if (!bgm) return;

  bgm.volume = Number(musicVolume.value) / 100;
  musicStatus.textContent = "页面加载后会默认尝试开启音乐。";

  musicToggle.addEventListener("click", async () => {
    if (bgm.paused) {
      try {
        await bgm.play();
        musicToggle.textContent = "暂停音乐";
        musicStatus.textContent = "音乐已开启，页面会带一点更平稳的时间流动感。";
      } catch (error) {
        musicStatus.textContent = "浏览器阻止了自动播放，请再次点击播放。";
      }
    } else {
      bgm.pause();
      musicToggle.textContent = "播放音乐";
      musicStatus.textContent = "音乐已暂停，你也可以随时重新开启。";
    }
  });

  musicVolume.addEventListener("input", () => {
    bgm.volume = Number(musicVolume.value) / 100;
  });

  musicProgress.addEventListener("input", () => {
    if (!Number.isFinite(bgm.duration) || bgm.duration <= 0) return;
    bgm.currentTime = (Number(musicProgress.value) / 100) * bgm.duration;
  });

  bgm.addEventListener("loadedmetadata", () => {
    musicTimeDuration.textContent = formatTime(bgm.duration);
  });

  bgm.addEventListener("play", () => {
    musicToggle.textContent = "暂停音乐";
    musicStatus.textContent = "音乐已开启，页面会带一点更平稳的时间流动感。";
  });

  bgm.addEventListener("pause", () => {
    if (bgm.ended) return;
    musicToggle.textContent = "播放音乐";
  });

  bgm.addEventListener("timeupdate", () => {
    if (!Number.isFinite(bgm.duration) || bgm.duration <= 0) return;
    musicProgress.value = String((bgm.currentTime / bgm.duration) * 100);
    musicTimeCurrent.textContent = formatTime(bgm.currentTime);
  });

  bgm.addEventListener("ended", () => {
    musicToggle.textContent = "播放音乐";
  });

  attemptAutoplay();
}

async function attemptAutoplay() {
  try {
    await bgm.play();
  } catch (error) {
    musicToggle.textContent = "播放音乐";
    musicStatus.textContent = "已默认尝试开启音乐，但当前浏览器拦截了自动播放，你可以手动点一下继续。";
  }
}

function render() {
  updateStage();
  updateCategorySummary();
  renderCategoryOverview();
  renderTopActions();
  renderCards();
  updateModalIfOpen();
}

function updateStage() {
  const stage = getStage(state.age);
  const progress = ((state.age - 1) / 99) * 100;

  document.documentElement.style.setProperty("--track-fill", `${progress}%`);
  document.documentElement.style.setProperty("--stage-glow", stage.glow);
  document.documentElement.style.setProperty("--stage-secondary", stage.secondary);
  document.documentElement.style.setProperty("--accent", stage.accent);

  currentAgeDisplay.textContent = `${state.age}岁`;
  ageMood.textContent = stage.mood;
  stageName.textContent = stage.name;
  stageSummary.textContent = stage.summary;
  stageBadge.textContent = stage.name;
  stageNarrative.textContent = stage.narrative;
  opportunityHint.textContent = stage.opportunity;
}

function updateCategorySummary() {
  const summary = categoryDescriptions[state.category] || categoryDescriptions.全部;
  activeCategoryTitle.textContent = `${summary.title} · 当前年龄 ${state.age} 岁`;
  activeCategoryHint.textContent = summary.hint;
}

function renderCategoryOverview() {
  stageOverview.innerHTML = categories
    .map(
      (category) => `
        <button
          type="button"
          class="stage-pill ${category === state.category ? "active" : ""}"
          data-category="${category}"
        >
          <strong>${category}</strong>
          <span>${getCategoryCount(category)} 个事件</span>
        </button>
      `
    )
    .join("");
}

function renderTopActions() {
  const ranked = [...events]
    .map((event) => ({ event, status: getEventStatus(event, state.age) }))
    .sort((left, right) => right.status.score - left.status.score)
    .slice(0, 3);

  topActions.innerHTML = ranked
    .map(
      ({ event, status }) => `
        <li>
          <span>${event.title}</span>
          <small>${status.label}</small>
        </li>
      `
    )
    .join("");
}

function renderCards() {
  const visibleEvents = getVisibleEvents();
  visibleCount.textContent = String(visibleEvents.length);
  eventGrid.className = "event-grid";

  if (!visibleEvents.length) {
    eventGrid.innerHTML = `
      <div class="empty-state">
        当前筛选下没有事件，请切换筛选后继续浏览。
      </div>
    `;
    return;
  }

  const rankedIds = new Set(
    [...visibleEvents]
      .map((event) => ({ id: event.id, score: getEventStatus(event, state.age).score }))
      .sort((left, right) => right.score - left.score)
      .slice(0, 4)
      .map((item) => item.id)
  );

  eventGrid.innerHTML = visibleEvents
    .map((event) => renderEventCard(event, rankedIds.has(event.id)))
    .join("");
}

function renderEventCard(event, highlighted) {
  const status = getEventStatus(event, state.age);
  const priorityText = getPriorityText(status.score);

  return `
    <article class="event-card ${highlighted ? "is-highlighted" : ""}" data-event-id="${event.id}">
      <div class="event-card-head">
        <span class="category-tag">${event.category}</span>
        <span class="fit-chip">${priorityText}</span>
      </div>

      <h3>${event.title}</h3>
      <p class="card-description">${event.description}</p>

      <div class="status-row">
        <span class="status-badge tone-${status.tone}">${status.label}</span>
        <span class="status-score">重要度 ${status.score} / 100</span>
      </div>

      <div class="meta-row">
        <span>重点年龄带</span>
        <strong>${event.window}</strong>
      </div>

      <p class="card-advice">${status.advice}</p>

      <div class="card-footer">
        <span>机会提示</span>
        <strong>${event.hint}</strong>
      </div>
    </article>
  `;
}

function getVisibleEvents() {
  const filtered =
    state.category === "全部"
      ? [...events]
      : events.filter((event) => event.category === state.category);

  if (state.sortMode === "best") {
    return filtered.sort(
      (left, right) =>
        getEventStatus(right, state.age).score - getEventStatus(left, state.age).score
    );
  }

  return filtered.sort((left, right) => {
    if (left.category !== right.category) {
      return left.category.localeCompare(right.category, "zh-CN");
    }
    return left.title.localeCompare(right.title, "zh-CN");
  });
}

function openDetail(eventId) {
  state.detailEventId = eventId;
  updateModalIfOpen();
  detailModal.classList.remove("hidden");
  detailModal.setAttribute("aria-hidden", "false");
}

function closeDetail() {
  state.detailEventId = null;
  detailModal.classList.add("hidden");
  detailModal.setAttribute("aria-hidden", "true");
}

function updateModalIfOpen() {
  if (!state.detailEventId) return;

  const event = events.find((item) => item.id === state.detailEventId);
  if (!event) return;

  const status = getEventStatus(event, state.age);
  modalCategory.textContent = event.category;
  modalTitle.textContent = event.title;
  modalDescription.textContent = event.description;
  modalWindow.textContent = event.window;
  modalAdvice.textContent = status.advice;
  modalStatusBadge.className = `modal-status tone-${status.tone}`;
  modalStatusBadge.textContent = status.label;
  chartAgeHint.textContent = `当前年龄 ${state.age} 岁`;

  renderChart(event, state.age);
  ruleStrip.innerHTML = event.rules
    .map((rule) => `<span class="rule-chip">${rule.min}-${rule.max} 岁 · ${rule.label}</span>`)
    .join("");
}

function renderChart(event, age) {
  const width = 720;
  const height = 280;
  const padding = { top: 24, right: 24, bottom: 40, left: 28 };
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;
  const samples = Array.from({ length: 199 }, (_, index) => 1 + index * 0.5);
  const points = samples.map((sampleAge) => {
    const score = getCurveScore(event, sampleAge);
    const x = padding.left + ((sampleAge - 1) / 99) * plotWidth;
    const y = padding.top + (1 - score / 100) * plotHeight;
    return { age: sampleAge, score, x, y };
  });

  const polyline = points.map((point) => `${point.x},${point.y}`).join(" ");
  const currentPoint = {
    age,
    score: getCurveScore(event, age),
    x: padding.left + ((age - 1) / 99) * plotWidth,
    y: padding.top + (1 - getCurveScore(event, age) / 100) * plotHeight,
  };
  const decadeLabels = [1, 20, 40, 60, 80, 100];
  const scoreLabels = [20, 40, 60, 80, 100];
  const markers = Array.from({ length: 20 }, (_, index) => 1 + index * 5).filter(
    (markerAge) => markerAge <= 100
  );

  detailChart.innerHTML = `
    <defs>
      <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#f6c86c" />
        <stop offset="50%" stop-color="#7ad6ff" />
        <stop offset="100%" stop-color="#b893ff" />
      </linearGradient>
      <linearGradient id="fillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="rgba(122,214,255,0.28)" />
        <stop offset="100%" stop-color="rgba(122,214,255,0)" />
      </linearGradient>
    </defs>

    ${scoreLabels
      .map((score) => {
        const y = padding.top + (1 - score / 100) * plotHeight;
        return `
          <line x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}" stroke="rgba(255,255,255,0.10)" stroke-dasharray="5 8" />
          <text x="${padding.left - 4}" y="${y - 4}" fill="rgba(191,208,236,0.9)" text-anchor="end" font-size="11">${score}</text>
        `;
      })
      .join("")}

    ${decadeLabels
      .map((labelAge) => {
        const x = padding.left + ((labelAge - 1) / 99) * plotWidth;
        return `
          <line x1="${x}" y1="${padding.top}" x2="${x}" y2="${height - padding.bottom}" stroke="rgba(255,255,255,0.08)" />
          <text x="${x}" y="${height - 12}" fill="rgba(191,208,236,0.92)" text-anchor="middle" font-size="12">${labelAge}岁</text>
        `;
      })
      .join("")}

    ${markers
      .map((markerAge) => {
        const markerScore = getCurveScore(event, markerAge);
        const markerX = padding.left + ((markerAge - 1) / 99) * plotWidth;
        const markerY = padding.top + (1 - markerScore / 100) * plotHeight;
        return `<circle cx="${markerX}" cy="${markerY}" r="2.8" fill="rgba(255,255,255,0.72)" />`;
      })
      .join("")}

    <polyline
      points="${polyline} ${width - padding.right},${height - padding.bottom} ${padding.left},${height - padding.bottom}"
      fill="url(#fillGradient)"
      stroke="none"
    />
    <polyline
      points="${polyline}"
      fill="none"
      stroke="url(#curveGradient)"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <circle cx="${currentPoint.x}" cy="${currentPoint.y}" r="8" fill="#f6c86c" />
    <circle cx="${currentPoint.x}" cy="${currentPoint.y}" r="16" fill="rgba(246,200,108,0.18)" />
    <line x1="${currentPoint.x}" y1="${padding.top}" x2="${currentPoint.x}" y2="${height - padding.bottom}" stroke="rgba(246,200,108,0.45)" stroke-dasharray="4 8" />
    <text x="${currentPoint.x + 12}" y="${currentPoint.y - 12}" fill="#fff2c9" font-size="12">${age}岁 · ${currentPoint.score}</text>
  `;
}

function getStage(age) {
  return (
    stageDefinitions.find((stage) => age >= stage.min && age <= stage.max) ||
    stageDefinitions[stageDefinitions.length - 1]
  );
}

function getEventStatus(event, age) {
  return (
    event.rules.find((rule) => age >= rule.min && age <= rule.max) ||
    event.rules[event.rules.length - 1]
  );
}

function getCurveScore(event, age) {
  const rules = event.rules;
  const currentRule = getEventStatus(event, age);
  const currentIndex = rules.findIndex((rule) => rule === currentRule);
  let score = currentRule.score;

  if (currentIndex > 0) {
    const previousRule = rules[currentIndex - 1];
    const distanceFromStart = age - currentRule.min;
    if (distanceFromStart < 2.8) {
      const blend = 1 - distanceFromStart / 2.8;
      score = lerp(score, (score + previousRule.score) / 2, blend * 0.55);
    }
  }

  if (currentIndex < rules.length - 1) {
    const nextRule = rules[currentIndex + 1];
    const distanceFromEnd = currentRule.max - age;
    if (distanceFromEnd < 2.8) {
      const blend = 1 - distanceFromEnd / 2.8;
      score = lerp(score, (score + nextRule.score) / 2, blend * 0.55);
    }
  }

  const waveSeed = Array.from(event.id).reduce(
    (sum, char) => sum + char.charCodeAt(0),
    0
  );
  const wave =
    Math.sin((age + waveSeed) * 0.22) * 2.3 +
    Math.cos((age + waveSeed * 0.3) * 0.11) * 1.7;

  return clamp(score + wave, 8, 98);
}

function getCategoryCount(category) {
  return category === "全部"
    ? events.length
    : events.filter((event) => event.category === category).length;
}

function getPriorityText(score) {
  if (score >= 90) return "当前重点";
  if (score >= 75) return "优先推进";
  if (score >= 60) return "值得布局";
  if (score >= 40) return "可以准备";
  return "暂缓即可";
}

function lerp(start, end, amount) {
  return start + (end - start) * amount;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) {
    return "00:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainder = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
}

function makeRule(min, max, label, tone, score, advice) {
  return {
    min,
    max,
    label,
    tone,
    score,
    advice,
    difficulty: toneLabelMap[tone] || label,
  };
}

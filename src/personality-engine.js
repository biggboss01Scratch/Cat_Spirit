export const TRAITS = [
  "neuroticism",
  "extraversion",
  "dominance",
  "impulsivity",
  "agreeableness"
];

export const TRAIT_LABELS = {
  neuroticism: "Neuroticism / 神经质",
  extraversion: "Extraversion / 外向性",
  dominance: "Dominance / 支配欲",
  impulsivity: "Impulsivity / 冲动性",
  agreeableness: "Agreeableness / 宜人性"
};

export const QUESTIONNAIRE_ITEMS = [
  {
    id: "q1_new_people",
    text: "家里来陌生人时，猫咪通常会：",
    options: [
      {
        id: "hide",
        text: "马上躲起来，过很久才出来",
        traits: { neuroticism: 5, extraversion: 1, dominance: 3, impulsivity: 2, agreeableness: 4 }
      },
      {
        id: "observe",
        text: "在远处观察，不主动接近",
        traits: { neuroticism: 3, extraversion: 3, dominance: 4, impulsivity: 3, agreeableness: 5 }
      },
      {
        id: "approach",
        text: "主动靠近闻闻甚至蹭人",
        traits: { neuroticism: 2, extraversion: 5, dominance: 4, impulsivity: 4, agreeableness: 5 }
      }
    ]
  },
  {
    id: "q2_patrol_space",
    text: "在家里的高处（柜顶、窗台）它会：",
    options: [
      {
        id: "rarely",
        text: "很少去高处，更喜欢固定角落",
        traits: { neuroticism: 3, extraversion: 2, dominance: 2, impulsivity: 2, agreeableness: 4 }
      },
      {
        id: "sometimes",
        text: "偶尔去高处巡逻一下",
        traits: { neuroticism: 3, extraversion: 3, dominance: 4, impulsivity: 3, agreeableness: 4 }
      },
      {
        id: "often",
        text: "经常占领高点，像在管理领地",
        traits: { neuroticism: 2, extraversion: 4, dominance: 5, impulsivity: 4, agreeableness: 3 }
      }
    ]
  },
  {
    id: "q3_play_style",
    text: "玩逗猫棒时，它更像：",
    options: [
      {
        id: "wait",
        text: "潜伏很久再出手",
        traits: { neuroticism: 3, extraversion: 2, dominance: 3, impulsivity: 2, agreeableness: 4 }
      },
      {
        id: "balanced",
        text: "有节奏地追逐和休息",
        traits: { neuroticism: 2, extraversion: 4, dominance: 3, impulsivity: 3, agreeableness: 5 }
      },
      {
        id: "rush",
        text: "看到就冲，动作很猛",
        traits: { neuroticism: 3, extraversion: 5, dominance: 4, impulsivity: 5, agreeableness: 3 }
      }
    ]
  },
  {
    id: "q4_petting_reaction",
    text: "你抱它或摸它时，它通常：",
    options: [
      {
        id: "dislike",
        text: "明显抗拒，快速挣脱",
        traits: { neuroticism: 4, extraversion: 2, dominance: 4, impulsivity: 4, agreeableness: 2 }
      },
      {
        id: "short",
        text: "能接受短时间互动",
        traits: { neuroticism: 3, extraversion: 3, dominance: 3, impulsivity: 3, agreeableness: 4 }
      },
      {
        id: "love",
        text: "会主动贴贴、发出呼噜",
        traits: { neuroticism: 2, extraversion: 4, dominance: 2, impulsivity: 2, agreeableness: 5 }
      }
    ]
  },
  {
    id: "q5_food_patience",
    text: "等饭或零食时它会：",
    options: [
      {
        id: "quiet",
        text: "安静等待，节奏稳定",
        traits: { neuroticism: 2, extraversion: 2, dominance: 2, impulsivity: 1, agreeableness: 5 }
      },
      {
        id: "meow",
        text: "喵几声提醒你",
        traits: { neuroticism: 3, extraversion: 3, dominance: 3, impulsivity: 3, agreeableness: 4 }
      },
      {
        id: "urgent",
        text: "持续叫、扒腿或抢食",
        traits: { neuroticism: 4, extraversion: 4, dominance: 4, impulsivity: 5, agreeableness: 2 }
      }
    ]
  },
  {
    id: "q6_night_activity",
    text: "夜里它的活跃度通常：",
    options: [
      {
        id: "low",
        text: "大多在睡觉，活动很少",
        traits: { neuroticism: 2, extraversion: 1, dominance: 2, impulsivity: 2, agreeableness: 4 }
      },
      {
        id: "middle",
        text: "偶尔活动，但不太扰人",
        traits: { neuroticism: 3, extraversion: 3, dominance: 3, impulsivity: 3, agreeableness: 4 }
      },
      {
        id: "high",
        text: "经常跑酷，能量充沛",
        traits: { neuroticism: 3, extraversion: 5, dominance: 3, impulsivity: 5, agreeableness: 3 }
      }
    ]
  },
  {
    id: "q7_multi_cat",
    text: "遇到其他猫时，它更可能：",
    options: [
      {
        id: "avoid",
        text: "躲避冲突，不太接触",
        traits: { neuroticism: 4, extraversion: 2, dominance: 2, impulsivity: 2, agreeableness: 4 }
      },
      {
        id: "neutral",
        text: "保持距离，互相观察",
        traits: { neuroticism: 3, extraversion: 3, dominance: 3, impulsivity: 3, agreeableness: 3 }
      },
      {
        id: "lead",
        text: "主动掌控距离与节奏",
        traits: { neuroticism: 2, extraversion: 4, dominance: 5, impulsivity: 4, agreeableness: 2 }
      }
    ]
  },
  {
    id: "q8_change_tolerance",
    text: "家里摆设变动后，它会：",
    options: [
      {
        id: "stressed",
        text: "明显紧张，谨慎许多",
        traits: { neuroticism: 5, extraversion: 2, dominance: 2, impulsivity: 2, agreeableness: 3 }
      },
      {
        id: "adapt",
        text: "短暂警惕，很快适应",
        traits: { neuroticism: 3, extraversion: 3, dominance: 3, impulsivity: 3, agreeableness: 4 }
      },
      {
        id: "curious",
        text: "兴奋探索每个新变化",
        traits: { neuroticism: 2, extraversion: 5, dominance: 4, impulsivity: 4, agreeableness: 4 }
      }
    ]
  },
  {
    id: "q9_touch_boundary",
    text: "被摸到敏感部位（肚皮、尾巴）时：",
    options: [
      {
        id: "counterattack",
        text: "会立刻回头咬或拍",
        traits: { neuroticism: 4, extraversion: 3, dominance: 4, impulsivity: 5, agreeableness: 1 }
      },
      {
        id: "escape",
        text: "轻轻躲开，不太攻击",
        traits: { neuroticism: 3, extraversion: 2, dominance: 3, impulsivity: 3, agreeableness: 3 }
      },
      {
        id: "accept",
        text: "较能接受，甚至继续呼噜",
        traits: { neuroticism: 2, extraversion: 3, dominance: 2, impulsivity: 2, agreeableness: 5 }
      }
    ]
  },
  {
    id: "q10_human_following",
    text: "你在家走动时，它通常：",
    options: [
      {
        id: "independent",
        text: "大多自己待着，不太跟随",
        traits: { neuroticism: 2, extraversion: 2, dominance: 3, impulsivity: 2, agreeableness: 3 }
      },
      {
        id: "sometimes",
        text: "偶尔跟着你看看",
        traits: { neuroticism: 2, extraversion: 3, dominance: 3, impulsivity: 3, agreeableness: 4 }
      },
      {
        id: "always",
        text: "经常贴身跟随和互动",
        traits: { neuroticism: 2, extraversion: 5, dominance: 3, impulsivity: 4, agreeableness: 5 }
      }
    ]
  }
];

export const EXPERIMENT_ITEMS = [
  {
    id: "exp_tail_base_touch",
    title: "实验 1：轻触尾巴根部的反应",
    instruction:
      "在猫咪放松状态下，轻轻触碰尾巴根部 1-2 秒，观察它第一时间的反应（不要反复刺激）。",
    outcomes: [
      {
        id: "bite_or_swat",
        text: "迅速回头、咬或拍你",
        adjustments: { neuroticism: 1.4, extraversion: 0.1, dominance: 0.8, impulsivity: 1.2, agreeableness: -1.5 }
      },
      {
        id: "turn_and_leave",
        text: "回头看你并离开",
        adjustments: { neuroticism: 0.6, extraversion: -0.2, dominance: 0.4, impulsivity: 0.2, agreeableness: -0.6 }
      },
      {
        id: "purr_or_accept",
        text: "继续呼噜或接受抚摸",
        adjustments: { neuroticism: -0.6, extraversion: 0.2, dominance: -0.2, impulsivity: -0.3, agreeableness: 1.1 }
      }
    ]
  },
  {
    id: "exp_name_call",
    title: "实验 2：呼名召回反应",
    instruction: "在猫咪不在你脚边时，轻声叫名字 2 次，观察它是否回应并靠近。",
    outcomes: [
      {
        id: "ignore",
        text: "几乎不理会，继续做自己的事",
        adjustments: { neuroticism: 0.2, extraversion: -1.0, dominance: 0.6, impulsivity: -0.2, agreeableness: -0.8 }
      },
      {
        id: "look_only",
        text: "看你一眼，但不靠近",
        adjustments: { neuroticism: 0.1, extraversion: -0.3, dominance: 0.3, impulsivity: 0.1, agreeableness: -0.2 }
      },
      {
        id: "approach",
        text: "主动走过来并互动",
        adjustments: { neuroticism: -0.3, extraversion: 1.0, dominance: -0.1, impulsivity: 0.4, agreeableness: 0.9 }
      }
    ]
  }
];

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function toNumber(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function round1(value) {
  return Math.round(value * 10) / 10;
}

function round3(value) {
  return Math.round(value * 1000) / 1000;
}

function normalizeScore(value) {
  return clamp(toNumber(value, 5), 1, 10);
}

function normalizeTraitScores(scores) {
  const source = scores ?? {};
  return {
    neuroticism: normalizeScore(source.neuroticism),
    extraversion: normalizeScore(source.extraversion),
    dominance: normalizeScore(source.dominance),
    impulsivity: normalizeScore(source.impulsivity),
    agreeableness: normalizeScore(source.agreeableness)
  };
}

function confidentHigh(value, threshold = 7, tolerance = 0.5) {
  return normalizeScore(value) >= threshold - tolerance;
}

function confidentLow(value, threshold = 4, tolerance = 0.5) {
  return normalizeScore(value) <= threshold + tolerance;
}

function emptyTraitObject(initial = 0) {
  return {
    neuroticism: initial,
    extraversion: initial,
    dominance: initial,
    impulsivity: initial,
    agreeableness: initial
  };
}

function normalizeWeights(weighting) {
  const questionRaw = Math.max(0, toNumber(weighting?.questionnaire, 0.7));
  const experimentRaw = Math.max(0, toNumber(weighting?.experiment, 0.3));
  const sum = questionRaw + experimentRaw;
  if (sum <= 0) {
    return { questionnaire: 0.7, experiment: 0.3 };
  }
  return {
    questionnaire: round3(questionRaw / sum),
    experiment: round3(experimentRaw / sum)
  };
}

function optionById(question, optionId) {
  return question.options.find((option) => option.id === optionId) || null;
}

function outcomeById(experiment, outcomeId) {
  return experiment.outcomes.find((outcome) => outcome.id === outcomeId) || null;
}

function findQuestion(questionId) {
  return QUESTIONNAIRE_ITEMS.find((item) => item.id === questionId) || null;
}

function findExperiment(experimentId) {
  return EXPERIMENT_ITEMS.find((item) => item.id === experimentId) || null;
}

function safeAnswers(answers) {
  return Array.isArray(answers) ? answers : [];
}

function scoreFromTraitSums(traitSums, answerCount) {
  const scores = {};
  const denominator = Math.max(1, answerCount);
  for (const trait of TRAITS) {
    const avg1to5 = traitSums[trait] / denominator;
    const mapped = (avg1to5 / 5) * 10;
    scores[trait] = round1(clamp(mapped, 1, 10));
  }
  return scores;
}

function inferTemperamentFromBase(baseScores) {
  const N = toNumber(baseScores.neuroticism, 5);
  const E = toNumber(baseScores.extraversion, 5);
  const D = toNumber(baseScores.dominance, 5);
  const I = toNumber(baseScores.impulsivity, 5);
  const A = toNumber(baseScores.agreeableness, 5);

  if (N >= 7 && A <= 4) {
    return {
      code: "cool_reserved",
      label: "高冷谨慎",
      description: "边界感强，先观察后互动"
    };
  }
  if (A >= 7 && E >= 7) {
    return {
      code: "sunny_affectionate",
      label: "元气亲人",
      description: "互动动机强，社交积极"
    };
  }
  if (D >= 7 && E >= 5) {
    return {
      code: "royal_controller",
      label: "领地主导",
      description: "喜欢掌控空间与节奏"
    };
  }
  if (I >= 7 && E >= 6) {
    return {
      code: "chaotic_runner",
      label: "冲动跑酷",
      description: "反应快，能量释放需求高"
    };
  }
  if (A >= 7 && N <= 4) {
    return {
      code: "gentle_companion",
      label: "温和陪伴",
      description: "情绪稳定，对人友好"
    };
  }
  return {
    code: "balanced_observer",
    label: "平衡观察者",
    description: "行为稳定，在不同情境中保持适应"
  };
}

function calculateQuestionnaireScores(questionnaireAnswers) {
  const traitSums = emptyTraitObject(0);
  let validCount = 0;
  const trace = [];

  for (const answer of safeAnswers(questionnaireAnswers)) {
    const question = findQuestion(answer?.questionId);
    if (!question) {
      continue;
    }
    const option = optionById(question, answer?.optionId);
    if (!option) {
      continue;
    }

    validCount += 1;
    trace.push({
      question_id: question.id,
      option_id: option.id,
      option_text: option.text
    });
    for (const trait of TRAITS) {
      traitSums[trait] += toNumber(option.traits[trait], 3);
    }
  }

  const scores = scoreFromTraitSums(traitSums, validCount || QUESTIONNAIRE_ITEMS.length);
  return {
    scores,
    answered_count: validCount,
    trace
  };
}

function calculateExperimentAdjustments(experimentAnswers) {
  const adjustments = emptyTraitObject(0);
  let validCount = 0;
  const trace = [];

  for (const answer of safeAnswers(experimentAnswers)) {
    const experiment = findExperiment(answer?.experimentId);
    if (!experiment) {
      continue;
    }
    const outcome = outcomeById(experiment, answer?.outcomeId);
    if (!outcome) {
      continue;
    }

    validCount += 1;
    trace.push({
      experiment_id: experiment.id,
      outcome_id: outcome.id,
      outcome_text: outcome.text
    });
    for (const trait of TRAITS) {
      adjustments[trait] += toNumber(outcome.adjustments[trait], 0);
    }
  }

  if (validCount > 0) {
    for (const trait of TRAITS) {
      adjustments[trait] = round3(adjustments[trait] / validCount);
    }
  }

  return {
    adjustments,
    answered_count: validCount,
    trace
  };
}

function blendFinalScores(baseScores, adjustments, normalizedWeights) {
  const finalScores = {};
  const correctedScores = {};

  for (const trait of TRAITS) {
    const base = toNumber(baseScores[trait], 5);
    const correction = toNumber(adjustments[trait], 0) * 2;
    const corrected = clamp(base + correction, 1, 10);
    correctedScores[trait] = round1(corrected);

    const blended =
      base * normalizedWeights.questionnaire +
      corrected * normalizedWeights.experiment;
    finalScores[trait] = round1(clamp(blended, 1, 10));
  }

  return { correctedScores, finalScores };
}

export function evaluatePersonalityAssessment(input) {
  const questionnaireAnswers = safeAnswers(input?.questionnaireAnswers);
  const experimentAnswers = safeAnswers(input?.experimentAnswers);
  const weights = normalizeWeights(input?.weighting);

  const questionnaire = calculateQuestionnaireScores(questionnaireAnswers);
  const temperament = inferTemperamentFromBase(questionnaire.scores);
  const experiment = calculateExperimentAdjustments(experimentAnswers);
  const blended = blendFinalScores(questionnaire.scores, experiment.adjustments, weights);
  const animePersona = mapToAnimePersona(blended.finalScores);

  return {
    base_temperament: temperament,
    anime_persona: animePersona,
    stage_scores: {
      questionnaire: questionnaire.scores,
      corrected_by_experiment: blended.correctedScores,
      final: blended.finalScores
    },
    score_debug: {
      weights,
      questionnaire_answered: questionnaire.answered_count,
      experiment_answered: experiment.answered_count
    },
    traces: {
      questionnaire: questionnaire.trace,
      experiment: experiment.trace
    }
  };
}

export function calculateTraitScore(observations, questionMaxScore = 5) {
  if (!Array.isArray(observations) || observations.length === 0) {
    return 5;
  }

  let weightedSum = 0;
  let weightSum = 0;

  for (const item of observations) {
    const x = toNumber(item?.value, 0);
    const w = Math.max(0, toNumber(item?.weight, 0));

    weightedSum += w * x;
    weightSum += w;
  }

  if (weightSum <= 0) {
    return 5;
  }

  const maxWeightedScore = weightSum * questionMaxScore;
  if (maxWeightedScore <= 0) {
    return 5;
  }

  const normalizedScore = (weightedSum / maxWeightedScore) * 10;
  return round1(clamp(normalizedScore, 1, 10));
}

export function calculatePersonalityScores(traitObservations, questionMaxScore = 5) {
  const scores = {};
  const input = traitObservations ?? {};

  for (const trait of TRAITS) {
    scores[trait] = calculateTraitScore(input[trait], questionMaxScore);
  }

  return scores;
}

export function inferArchetype(scores) {
  const s = scores ?? {};
  const N = toNumber(s.neuroticism, 5);
  const E = toNumber(s.extraversion, 5);
  const D = toNumber(s.dominance, 5);
  const I = toNumber(s.impulsivity, 5);
  const A = toNumber(s.agreeableness, 5);

  if (A >= 7 && E >= 7) {
    return "Energetic_Support";
  }
  if (N >= 7 && A <= 4) {
    return "Cold_Sentinel";
  }
  if (D >= 7 && E >= 6) {
    return "Regal_Commander";
  }
  if (I >= 7 && E >= 6) {
    return "Trickster_Runner";
  }
  if (A >= 7 && N <= 4) {
    return "Gentle_Healer";
  }
  return "Balanced_Cyber";
}

const PERSONA_PROFILE_MAP = {
  genki: {
    code: "genki",
    label: "元气",
    label_en: "Genki",
    core_traits: ["社交恐怖分子", "好奇心溢出", "情绪价值提供者"],
    portrait_text:
      "你是那种会在门口迎接每一个人的小太阳，对世界毫无防备之心，哪怕是陌生人也想上去蹭一蹭。但这种看似无限的元气背后，其实藏着一丝疲惫。因为习惯性地输出情绪价值，一旦没得到期待的回应，就会陷入“是不是我不讨人喜欢了”的自我怀疑，本质上，你是通过不断地讨好世界，来确认自己的存在感。",
    quote: "只要我跑得够快，寂寞就追不上我！"
  },
  tsundere: {
    code: "tsundere",
    label: "傲娇",
    label_en: "Tsundere",
    core_traits: ["口是心非", "情感推拉大师", "隐藏的粘人精"],
    portrait_text:
      "你可能会在别人想靠近时一脸嫌弃地走开，但当对方真的走开时，你又会暗中观察，制造“偶遇”。这种行为背后，是根深蒂固的情感表达障碍。明明心里很在意，话到嘴边却变成了带刺的防御。你非常渴望被坚定地选择，但又害怕展示软弱后会被轻视，这种“反复横跳”的别扭，正是安全感匮乏的表现。",
    quote: "我只是正好路过这里，才不是特意来看你的，笨蛋。"
  },
  kuudere: {
    code: "kuudere",
    label: "无口",
    label_en: "Kuudere",
    core_traits: ["深度思考", "情绪稳定（表面上）", "高效的节能主义者"],
    portrait_text:
      "你总是待在房间的角落或高处，像一尊精致的雕像，不需要过多互动，就能在同一个空间里感知彼此。这种姿态常被误解为高冷或迟钝，但其实源于一种难以打破的孤独感。你不擅长、也不屑于无意义的社交，在快节奏的环境中容易因为慢半拍而感到吃力，内心积压了大量无法排解的细微感受。",
    quote: "沉默，是我对这个世界最体面的礼貌。"
  },
  onee_san: {
    code: "onee_san",
    label: "御姐",
    label_en: "Onee-san",
    core_traits: ["领导力", "包容心", "极强的自我管理能力"],
    portrait_text:
      "你是团队里的“定海神针”。不管是朋友闹矛盾，还是同事心情沮丧，你总能气定神闲地出现，用行动或话语平息所有混乱。但这种强大也成了一种包袱，习惯了照顾他人和掌控局面，导致别人忘了你也需要被照顾。当你露出脆弱的一面时，反而会感到羞愧，宁愿独自躲起来舔舐伤口。",
    quote: "别慌，有我在，天塌不下来。"
  },
  trickster: {
    code: "trickster",
    label: "捣蛋鬼",
    label_en: "Trickster",
    core_traits: ["创造力爆发", "探索欲强", "规则的挑战者"],
    portrait_text:
      "你就是那个凌晨三点还在兴奋“跑酷”的人，对一切规则的边界都充满好奇。你活在当下，所有的行为逻辑都是“有趣就行”。然而，这种行为常被误解为“不靠谱”，因为你的注意力太容易被新鲜事物夺走。但内心深处，你只是害怕无聊，害怕平庸的生活会磨平自己，所谓的“捣蛋”其实是你对枯燥现实的一种反抗。",
    quote: "如果规则不是用来打破的，那将毫无意义。"
  },
  guardian: {
    code: "guardian",
    label: "守护者",
    label_en: "Guardian",
    core_traits: ["责任感爆棚", "克制", "极强的防御属性"],
    portrait_text:
      "你不一定粘人，但你一定忠诚。你就像那只守在浴室门口的猫，存在不是为了讨好，而是为了确保自己领地里的人平安无事。这份责任感也让你神经紧绷，总是处于预警状态，很难真正地放松下来。它有时会变成一种自我束缚，甚至会因为无法预料的意外而产生强烈的挫败感。",
    quote: "你可以偶尔软弱，剩下的交给我来守候。"
  },
  healer: {
    code: "healer",
    label: "治愈系",
    label_en: "Healer",
    core_traits: ["同理心极强", "情绪净化器", "柔软无害"],
    portrait_text:
      "你的必杀技是“呼噜”和“踩奶”。你像一台情绪净化器，能敏锐地捕捉到空气中悲伤的分子，并在别人最需要的时候静静地陪伴。但这种极强的同理心也导致了你边界感的缺失，太容易受他人情绪影响，常常为了安慰别人而牺牲自己的空间。因为太好说话，你内心的真实需求反而容易被忽略。",
    quote: "如果生活有点苦，那就来揉揉我的肚子吧。"
  },
  imp: {
    code: "imp",
    label: "小恶魔",
    label_en: "Imp",
    core_traits: ["极端矛盾", "无法预测", "极致的利己（也可能是利他）主义"],
    portrait_text:
      "你时而像元气般热情，时而像傲娇般冷酷，完全不按套路出牌。前一秒还在贴贴，后一秒就亮出爪子，像一个矛盾的结合体。这种无法预测的性格，让你觉得自己像个局外人，难以融入任何圈子，并带来一种极度的疏离感。这种“反骨”其实是为了掩饰对深度连接的恐惧——“既然早晚会离开，不如先让我破坏掉这一切”，这是一种隐藏的自毁倾向。",
    quote: "爱我或者恨我，选一个吧，反正别想指望我。"
  }
};

function personaByCode(code) {
  const profile = PERSONA_PROFILE_MAP[code] || PERSONA_PROFILE_MAP.imp;
  return {
    ...profile,
    core_traits: [...profile.core_traits]
  };
}

export function mapToAnimePersona(scores, options = {}) {
  const s = normalizeTraitScores(scores);
  const high = toNumber(options.highThreshold, 7);
  const low = toNumber(options.lowThreshold, 4);
  const strictTolerance = Math.max(0.2, Math.min(1.0, toNumber(options.tolerance, 1.0) * 0.5));

  const AHigh = confidentHigh(s.agreeableness, high, strictTolerance);
  const EHigh = confidentHigh(s.extraversion, high, strictTolerance);
  const NHigh = confidentHigh(s.neuroticism, high, strictTolerance);
  const DHigh = confidentHigh(s.dominance, high, strictTolerance);
  const IHigh = confidentHigh(s.impulsivity, high, strictTolerance);
  const ELow = confidentLow(s.extraversion, low, strictTolerance);
  const ILow = confidentLow(s.impulsivity, low, strictTolerance);
  const ALow = confidentLow(s.agreeableness, low, strictTolerance);
  const DLow = confidentLow(s.dominance, low, strictTolerance);
  const NLow = confidentLow(s.neuroticism, low, strictTolerance);

  if (AHigh && EHigh) {
    return personaByCode("genki");
  }
  if (NHigh && ALow) {
    return personaByCode("tsundere");
  }
  if (ELow && ILow) {
    return personaByCode("kuudere");
  }
  if (DHigh && AHigh) {
    return personaByCode("onee_san");
  }
  if (IHigh && DLow) {
    return personaByCode("trickster");
  }
  if (ILow && DHigh) {
    return personaByCode("guardian");
  }
  if (AHigh && NLow) {
    return personaByCode("healer");
  }
  return personaByCode("imp");
}

function pickPrimaryTone(scores) {
  const {
    neuroticism: N,
    extraversion: E,
    dominance: D,
    impulsivity: I,
    agreeableness: A
  } = scores;

  if (A >= 7 && E >= 7) {
    return {
      title: "元气少女",
      palette: ["#f59f00", "#ffd43b", "#ffe066"],
      visualTendency: "暖橙主色 + 跃动发光边缘"
    };
  }
  if (N >= 7 && A <= 4) {
    return {
      title: "高冷三无",
      palette: ["#5c7cfa", "#ced4da", "#748ffc"],
      visualTendency: "冷蓝银灰 + 低饱和氛围"
    };
  }
  if (D >= 7) {
    return {
      title: "御姐女王",
      palette: ["#343a40", "#adb5bd", "#868e96"],
      visualTendency: "深色硬朗 + 金属饰边"
    };
  }
  if (I >= 7) {
    return {
      title: "调皮疾行者",
      palette: ["#ff6b6b", "#ffa94d", "#ffd8a8"],
      visualTendency: "高反差点缀 + 速度感线条"
    };
  }
  return {
    title: "平衡型赛博猫灵",
    palette: ["#0b7285", "#15aabf", "#a5d8ff"],
    visualTendency: "青蓝渐变 + 几何发光纹路"
  };
}

export function mapAvatarByPersonality(scores, archetype) {
  const tone = pickPrimaryTone(scores);
  const accessories = [];
  const tags = [];

  if (scores.dominance >= 7) {
    tags.push("Queen");
    accessories.push("电子披肩");
    accessories.push("战术光鞭");
  }
  if (scores.agreeableness >= 7) {
    tags.push("Supportive");
    accessories.push("柔光耳饰");
  }
  if (scores.extraversion >= 7) {
    tags.push("Energetic");
    accessories.push("动态尾迹特效");
  }
  if (scores.neuroticism >= 7) {
    tags.push("Alert");
    accessories.push("环境扫描目镜");
  }
  if (scores.impulsivity >= 7) {
    tags.push("Chaotic");
    accessories.push("随机弹出表情模块");
  }

  if (tags.length === 0) {
    tags.push("Balanced");
    accessories.push("基础霓虹项圈");
  }

  return {
    archetype,
    persona_title: tone.title,
    tags,
    color_palette: tone.palette,
    visual_tendency: tone.visualTendency,
    accessories
  };
}

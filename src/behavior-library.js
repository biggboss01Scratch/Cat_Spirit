export const BEHAVIOR_LIBRARY = [
  {
    action_id: "kneading",
    action_name: "踩奶",
    base_meaning: "对环境感到安全，唤起幼年依恋记忆"
  },
  {
    action_id: "midnight_zoomies",
    action_name: "半夜跑酷",
    base_meaning: "夜间精力释放和狩猎本能模拟"
  },
  {
    action_id: "staring_ceiling",
    action_name: "盯着天花板",
    base_meaning: "感知微小运动、声音或光影变化"
  },
  {
    action_id: "slow_blink",
    action_name: "慢眨眼",
    base_meaning: "表达信任和放松，是友好社交信号"
  },
  {
    action_id: "hide_box",
    action_name: "钻纸箱",
    base_meaning: "寻找受保护空间来降低压力"
  }
];

export function findBehavior({ actionId, actionName }) {
  if (actionId) {
    const byId = BEHAVIOR_LIBRARY.find((item) => item.action_id === actionId);
    if (byId) {
      return byId;
    }
  }

  if (actionName) {
    const normalized = String(actionName).trim().toLowerCase();
    const byName = BEHAVIOR_LIBRARY.find(
      (item) => item.action_name.toLowerCase() === normalized
    );
    if (byName) {
      return byName;
    }
  }

  return null;
}

# 赛博猫灵 MVP 技术规格（问卷 + 实验版）

## 1. 目标

将猫格评估从“手动拉条”升级为三阶段流程：

1. 初始定性（问卷）：10 道选择题建立基础性格底色。
2. 动态修正（实验）：1-2 个互动实验修正行为倾向。
3. 最终映射：将两部分结果加权融合，输出最终猫格向量与化身。

## 2. 模块说明

### 2.1 Personality Engine

- 文件: `src/personality-engine.js`
- 核心新增:
  - `QUESTIONNAIRE_ITEMS`：10 题问卷题库
  - `EXPERIMENT_ITEMS`：互动实验题库
  - `evaluatePersonalityAssessment(input)`：主评估入口
- 输入结构:
  - `questionnaireAnswers = [{ questionId, optionId }]`
  - `experimentAnswers = [{ experimentId, outcomeId }]`
  - `weighting = { questionnaire, experiment }`
- 输出结构:
  - `base_temperament`（例如高冷谨慎、元气亲人）
  - `stage_scores.questionnaire`
  - `stage_scores.corrected_by_experiment`
  - `stage_scores.final`
  - `score_debug` 与 `traces`

### 2.2 Avatar Mapping

- 文件: `src/avatar-mapping.js`
- 输入: `stage_scores.final`
- 输出:
  - `persona_title`
  - `tags`
  - `color_palette`
  - `visual_tendency`
  - `accessories`

### 2.3 Interpreter

- 文件: `src/interpreter.js`
- 输入:
  - `catProfile`（包含最终猫格 + 基础底色）
  - `actionName`
  - `baseMeaning`
- 路径:
  - 按优先级选择 LLM：`LLM_API_*` > `QWEN_API_KEY` / `DASHSCOPE_API_KEY` > `OPENAI_API_KEY`
  - 无 Key 时使用本地 fallback

## 3. API 设计

### `GET /api/personality/questionnaire`

返回 10 题问卷。

### `GET /api/personality/experiments`

返回实验清单与结果选项。

### `POST /api/personality/assess`

完成三阶段评估并返回：

- `cat_profile`
- `avatar`
- `assessment`（含底色、阶段分数、权重与答题轨迹）

### 兼容保留接口

- `POST /api/personality/score`
- `POST /api/interpreter`
- `GET /api/behaviors`
- `POST /api/workflow/demo`

## 4. 前端实现

- 文件:
  - `public/index.html`
  - `public/app.js`
  - `public/styles.css`
- 交互:
  - 问卷渲染（10 题单选）
  - 实验渲染（可选 1-2 题）
  - 权重输入（默认问卷 0.7 / 实验 0.3）
  - 结果展示（底色 + 雷达图 + 化身 JSON）
  - 行为转译

## 5. 后续建议

1. 加入问卷版本号与 A/B 题库，支持运营调参。
2. 将实验结果写入历史记录，支持时间维度猫格漂移分析。
3. 将权重调整为分场景权重（社交场景、进食场景、休息场景）。


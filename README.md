# Cyber Cat-Spirit (赛博猫灵) MVP

This project includes:

- Questionnaire + experiment personality assessment
- Anime persona / avatar mapping
- Behavior interpretation (optional LLM)

## 1. Run

```bash
npm.cmd start
```

Open:

```text
http://localhost:3100
```

If port is occupied:

```powershell
$env:PORT=3101
npm.cmd start
```

## 2. Env Config (.env)

Copy `.env.example` to `.env` and fill:

```env
PORT=3100

# Priority: LLM_API_* > QWEN_API_KEY/DASHSCOPE_API_KEY > OPENAI_API_KEY
LLM_API_KEY=
LLM_PROVIDER=
LLM_MODEL=
LLM_BASE_URL=
LLM_API_INTERFACE=

# Qwen (recommended for your case)
QWEN_API_KEY=
QWEN_MODEL=qwen-plus
QWEN_BASE_URL=https://dashscope.aliyuncs.com/compatible-mode/v1
QWEN_API_INTERFACE=chat_completions

# OpenAI
OPENAI_API_KEY=
OPENAI_MODEL=gpt-4.1-mini
```

Notes:

- If all LLM keys are empty, interpreter will fall back to local template output.
- `LLM_API_INTERFACE` / `QWEN_API_INTERFACE` / `OPENAI_API_INTERFACE` supports:
  - `responses`
  - `chat_completions`
- Qwen's default compatible endpoint is:
  - `https://dashscope.aliyuncs.com/compatible-mode/v1`

## 3. API Endpoints

### `GET /api/health`

Service health check.

### `GET /api/personality/questionnaire`

Get 10-question questionnaire config.

### `GET /api/personality/experiments`

Get interactive experiment config.

### `GET /api/personality/persona-images`

Get persona image mapping config for radar area image slots.

### `POST /api/personality/assess`

Evaluate questionnaire + experiment answers and return final profile.

### `GET /api/behaviors`

Get behavior library.

### `POST /api/interpreter`

Interpret a behavior using personality profile.

## 4. Persona Image Assets

Default image directory:

```text
public/assets/personas
```

Default filenames:

- `genki.png`
- `tsundere.png`
- `kuudere.png`
- `onee_san.png`
- `trickster.png`
- `guardian.png`
- `healer.png`
- `imp.png`

You can override image paths/URLs in `.env`:

- `PERSONA_IMAGE_GENKI`
- `PERSONA_IMAGE_TSUNDERE`
- `PERSONA_IMAGE_KUUDERE`
- `PERSONA_IMAGE_ONEE_SAN`
- `PERSONA_IMAGE_TRICKSTER`
- `PERSONA_IMAGE_GUARDIAN`
- `PERSONA_IMAGE_HEALER`
- `PERSONA_IMAGE_IMP`

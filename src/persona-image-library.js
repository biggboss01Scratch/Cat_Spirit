const PERSONA_META = [
  { code: "genki", label: "\u5143\u6c14", label_en: "Genki" },
  { code: "tsundere", label: "\u50b2\u5a07", label_en: "Tsundere" },
  { code: "kuudere", label: "\u65e0\u53e3", label_en: "Kuudere" },
  { code: "onee_san", label: "\u5fa1\u59d0", label_en: "Onee-san" },
  { code: "trickster", label: "\u6363\u86cb\u9b3c", label_en: "Trickster" },
  { code: "guardian", label: "\u5b88\u62a4\u8005", label_en: "Guardian" },
  { code: "healer", label: "\u6cbb\u6108\u7cfb", label_en: "Healer" },
  { code: "imp", label: "\u5c0f\u6076\u9b54", label_en: "Imp" }
];

function getEnvString(key) {
  const value = process.env[key];
  return typeof value === "string" ? value.trim() : "";
}

function toImageEnvKey(code) {
  const normalized = String(code || "")
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "_");
  return `PERSONA_IMAGE_${normalized}`;
}

function normalizeImageUrl(value) {
  const raw = String(value || "").trim();
  if (!raw) {
    return "";
  }
  if (/^https?:\/\//i.test(raw) || raw.startsWith("/")) {
    return raw;
  }
  return `/assets/personas/${raw}`;
}

function defaultImageUrl(code) {
  return `/assets/personas/${code}.png`;
}

export function buildPersonaImageLibrary() {
  return PERSONA_META.map((item) => {
    const envKey = toImageEnvKey(item.code);
    const fromEnv = normalizeImageUrl(getEnvString(envKey));

    return {
      ...item,
      env_key: envKey,
      image_url: fromEnv || defaultImageUrl(item.code)
    };
  });
}

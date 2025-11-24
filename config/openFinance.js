import dotenv from "dotenv";
dotenv.config();

const parseApiKeyPairs = () => {
  const rawPairs = process.env.OPEN_FINANCE_KEYS?.split(",") || [];

  return rawPairs
    .map((pair) => pair.trim())
    .filter(Boolean)
    .reduce((acc, pair, index) => {
      const [clientAppId, apiKey] = pair.split(":").map((value) => value?.trim());

      if (clientAppId && apiKey) {
        acc[clientAppId] = apiKey;
      } else if (apiKey) {
        acc[`client_app_${index}`] = apiKey;
      }

      return acc;
    }, {});
};

const config = {
  institution: {
    id: process.env.INSTITUTION_ID || "fi_001",
    name: process.env.INSTITUTION_NAME || "api-financeira",
    status: process.env.INSTITUTION_STATUS
      ? process.env.INSTITUTION_STATUS === "true"
      : true,
  },
  auth: {
    apiKeyHeader: process.env.API_KEY_HEADER || "x-api-key",
    apiKeys: parseApiKeyPairs(),
  },
};

export default config;


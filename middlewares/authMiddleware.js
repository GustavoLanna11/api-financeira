import config from "../config/openFinance.js";

const findClientAppId = (apiKey) => {
  const entries = Object.entries(config.auth.apiKeys || {});
  const match = entries.find(([, value]) => value === apiKey);
  return match ? match[0] : null;
};

export const verifyApiKey = (req, res, next) => {
  const apiKeyHeader = config.auth.apiKeyHeader.toLowerCase();
  const apiKey =
    req.headers[apiKeyHeader] || req.headers[config.auth.apiKeyHeader];

  if (!apiKey) {
    return res.status(401).json({ error: "API Key não fornecida" });
  }

  const clientAppId = findClientAppId(apiKey);

  if (!clientAppId) {
    return res.status(401).json({ error: "API Key inválida" });
  }

  req.clientAppId = clientAppId;
  return next();
};


import consentService from "../services/consentServices.js";

const createConsent = async (req, res) => {
  try {
    const { customerId, permissions, expiresAt } = req.body;
    const clientAppId = req.clientAppId || req.body.clientAppId;

    if (!customerId || !permissions?.length || !expiresAt || !clientAppId) {
      return res
        .status(400)
        .json({
          error:
            "customerId, permissions, expiresAt e clientAppId são obrigatórios",
        });
    }

    const consent = await consentService.create({
      customerId,
      clientAppId,
      permissions,
      expiresAt,
    });

    return res.status(201).json(consent);
  } catch (error) {
    console.error("Erro ao criar consentimento:", error);
    return res.status(500).json({ error: "Erro ao criar consentimento" });
  }
};

const revokeConsent = async (req, res) => {
  try {
    const consent = await consentService.revoke(req.params.id);

    if (!consent) {
      return res.status(404).json({ error: "Consentimento não encontrado" });
    }

    return res.json(consent);
  } catch (error) {
    console.error("Erro ao revogar consentimento:", error);
    return res.status(500).json({ error: "Erro ao revogar consentimento" });
  }
};

const listConsents = async (req, res) => {
  try {
    const consents = await consentService.findAllByClientApp(req.clientAppId);
    return res.json(consents);
  } catch (error) {
    console.error("Erro ao listar consentimentos:", error);
    return res.status(500).json({ error: "Erro ao listar consentimentos" });
  }
};

const getConsentById = async (req, res) => {
  try {
    const consent = await consentService.getById(
      req.params.id,
      req.clientAppId
    );

    if (!consent) {
      return res.status(404).json({ error: "Consentimento não encontrado" });
    }

    return res.json(consent);
  } catch (error) {
    console.error("Erro ao buscar consentimento:", error);
    return res.status(500).json({ error: "Erro ao buscar consentimento" });
  }
};

export default {
  createConsent,
  revokeConsent,
  listConsents,
  getConsentById,
};


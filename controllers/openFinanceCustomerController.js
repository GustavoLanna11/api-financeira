import userServices from "../services/userServices.js";
import bankAccountService from "../services/bankAccountServices.js";
import consentService from "../services/consentServices.js";

const validateConsent = async (customerId, clientAppId, permission) => {
  const consent = await consentService.findActiveByCustomerAndApp(
    customerId,
    clientAppId
  );

  if (!consent) {
    return { error: "Consentimento não autorizado para este cliente" };
  }

  if (permission && !consent.permissions.includes(permission)) {
    return {
      error: `Consentimento sem permissão para ${permission}`,
    };
  }

  return { consent };
};

const getCustomerById = async (req, res) => {
  try {
    const { error } = await validateConsent(
      req.params.id,
      req.clientAppId
    );

    if (error) {
      return res.status(403).json({ error });
    }

    const customer = await userServices.getOne(req.params.id);
    if (!customer) {
      return res.status(404).json({ error: "Cliente não encontrado" });
    }

    const { _id, name, cpf } = customer.toObject();
    return res.json({ _id, name, cpf });
  } catch (err) {
    console.error("Erro ao buscar cliente:", err);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

const getCustomerAccounts = async (req, res) => {
  try {
    const { error } = await validateConsent(
      req.params.id,
      req.clientAppId,
      "accounts"
    );

    if (error) {
      return res.status(403).json({ error });
    }

    const accounts = await bankAccountService.getByUserId(req.params.id);
    const filteredAccounts = accounts.map((account) => ({
      _id: account._id,
      type: account.type,
      branch: account.branch,
      number: account.number,
    }));

    return res.json(filteredAccounts);
  } catch (err) {
    console.error("Erro ao buscar contas do cliente:", err);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export default { getCustomerById, getCustomerAccounts };


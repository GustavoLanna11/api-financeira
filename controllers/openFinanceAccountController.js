import bankAccountService from "../services/bankAccountServices.js";
import transactionService from "../services/transactionServices.js";
import consentService from "../services/consentServices.js";

const ensureConsentForAccount = async (accountId, clientAppId, permission) => {
  const account = await bankAccountService.getOne(accountId);
  if (!account) {
    return { status: 404, error: "Conta não encontrada" };
  }

  const ownerId = account?.user?.[0] || account.user;
  if (!ownerId) {
    return { status: 400, error: "Conta sem vínculo de usuário" };
  }

  const consent = await consentService.findActiveByCustomerAndApp(
    ownerId,
    clientAppId
  );

  if (!consent) {
    return { status: 403, error: "Consentimento não autorizado para esta conta" };
  }

  if (permission && !consent.permissions.includes(permission)) {
    return {
      status: 403,
      error: `Consentimento sem permissão para ${permission}`,
    };
  }

  return { account };
};

const getBalance = async (req, res) => {
  try {
    const { account, status, error } = await ensureConsentForAccount(
      req.params.id,
      req.clientAppId,
      "accounts"
    );

    if (error) {
      return res.status(status).json({ error });
    }

    return res.json({
      balance: account.balance,
    });
  } catch (err) {
    console.error("Erro ao consultar saldo:", err);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

const getTransactions = async (req, res) => {
  try {
    const { account, status, error } = await ensureConsentForAccount(
      req.params.id,
      req.clientAppId,
      "transactions"
    );

    if (error) {
      return res.status(status).json({ error });
    }

    const transactions = await transactionService.getByAccount(account._id);

    const simplified = transactions.map((transaction) => ({
      _id: transaction._id,
      date: transaction.date,
      description: transaction.description,
      amount: transaction.amount,
      type: transaction.type,
      category: transaction.category,
    }));

    return res.json(simplified);
  } catch (err) {
    console.error("Erro ao consultar transações da conta:", err);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export default { getBalance, getTransactions };


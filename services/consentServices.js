import Consent from "../models/Consent.js";

class ConsentService {
  async create({ customerId, clientAppId, permissions, expiresAt }) {
    const consent = await Consent.create({
      customer: customerId,
      clientAppId,
      permissions,
      expiresAt,
    });
    return consent;
  }

  async revoke(consentId) {
    return Consent.findByIdAndUpdate(
      consentId,
      { status: "revoked", revokedAt: new Date() },
      { new: true }
    );
  }

  async findActiveByCustomerAndApp(customerId, clientAppId) {
    return Consent.findOne({
      customer: customerId,
      clientAppId,
      status: "active",
      expiresAt: { $gt: new Date() },
    });
  }

  async findAllByClientApp(clientAppId) {
    return Consent.find({
      clientAppId,
      status: { $in: ["active", "expired"] },
    }).sort({ createdAt: -1 });
  }

  async getById(consentId, clientAppId) {
    return Consent.findOne({
      _id: consentId,
      clientAppId,
    });
  }
}

export default new ConsentService();


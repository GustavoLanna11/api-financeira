import mongoose from "mongoose";

const ConsentSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    clientAppId: {
      type: String,
      required: true,
      index: true,
    },
    permissions: {
      type: [String],
      enum: ["accounts", "transactions"],
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "revoked", "expired"],
      default: "active",
    },
    expiresAt: {
      type: Date,
      required: true,
    },
    revokedAt: Date,
  },
  {
    timestamps: true,
  }
);

ConsentSchema.methods.isActive = function isActive() {
  const notExpired = !this.expiresAt || this.expiresAt > new Date();
  return this.status === "active" && notExpired;
};

const Consent = mongoose.model("Consent", ConsentSchema);
export default Consent;


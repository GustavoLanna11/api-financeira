import config from "../config/openFinance.js";

const getInstitutionData = (req, res) => {
  res.json(config.institution);
};

export default { getInstitutionData };


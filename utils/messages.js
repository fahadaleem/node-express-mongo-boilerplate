const messages = require("../configs/messages.json");

const getErrorMessage = (errorType) => {
  return messages.errors[errorType] || "Unknown error occurred";
};

const getSuccessMessage = (successType) => {
  return messages.success[successType] || "Unknown success message";
};

module.exports = {
  getErrorMessage,
  getSuccessMessage,
};

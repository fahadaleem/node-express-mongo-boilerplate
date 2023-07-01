const handleServerError = (err, req, res, next) => {
  res
    .status(err.code)
    .json({ status: false, message: err.message || "Internal server error" });
};

module.exports = handleServerError;

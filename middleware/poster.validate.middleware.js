const { postValidator } = require("../Validator/poster.validator");

module.exports.PostValidate = function (req, res, next) {
  try {
    const { error } = postValidator(req.body);
    if (error) {
      return res.status(400).json({ msg: error.details[0].message });
    }
    next();
  } catch (error) {
    console.log(error.message);
  }
};

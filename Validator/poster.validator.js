const Joi = require("joi");

exports.postValidator = function (data) {
  try {
    const schema = Joi.object({
      speaker: Joi.string().required(),
      theme: Joi.string().required(),
      date: Joi.string().required(),
      hour: Joi.number().required(),
      location: Joi.string().required(),
    });
    return schema.validate(data);
  } catch (error) {
    res.json(details[0].message);
  }
};

const PostSchemas = require("../schemas/Poster.schema");
const BaseError = require("../utils/BeseError");
const ProfilSchemas = require("../schemas/profil.schema");

const CreateProfil = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;

    const foundedUser = await ProfilSchemas.findOne({ email: email });

    if (foundedUser) {
      throw BaseError.BadRequest("User has already registered!");
    }
    await ProfilSchemas.create({
      name,
      email,
      phone,
    });
    res.json({
      message: "Profil created",
    });
  } catch (err) {
    next(err);
  }
};

const editProfil = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, phone, email } = req.body;

    const foundedProfil = await ProfilSchemas.findById(id);
    if (!foundedProfil) {
      throw BaseError.BadRequest("Profil not founded");
    }

    let result = await ProfilSchemas.findByIdAndUpdate(
      id,
      {
        name,
        phone,
        email,
      },
      { new: true }
    );

    res.json({
      message: "Updated a profil",
      result,
    });
  } catch (err) {
    next(err);
  }
};

const getProfil = async (req, res, next) => {
  try {
    const { id } = req.params;

    const foundedProfil = await ProfilSchemas.findById(id);
    if (!foundedProfil) {
      throw BaseError.BadRequest("Profil not founded");
    }

    const foundedPoster = await PostSchemas.find({
      speaker: foundedProfil.name,
    });

    res.json({
      profil: foundedProfil,
      posters: foundedPoster,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  CreateProfil,
  editProfil,
  getProfil,
};

const PostSchemas = require("../schemas/Poster.schema");
const BaseError = require("../utils/BeseError");

const getPoster = async (req, res, next) => {
  try {
    const Post = await PostSchemas.find();
    res.json(Post);
  } catch (err) {
    next(err);
  }
};

const addPoster = async (req, res, next) => {
  try {
    const { speaker, theme, date, hour, location } = req.body;

    await PostSchemas.create({
      speaker,
      theme,
      date,
      hour,
      location,
    });
    res.json({
      message: "Added new poster",
    });
  } catch (err) {
    next(err);
  }
};

const updatePoster = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { speaker, theme, date, hour, location } = req.body;

    const foundedPost = await PostSchemas.findById(id);
    if (!foundedPost) {
      throw BaseError.BadRequest("Poster not founded");
    }

    let result = await Postchemas.findByIdAndUpdate(
      id,
      {
        speaker,
        theme,
        date,
        hour,
        location,
      },
      { new: true }
    );

    res.json({
      message: "Updated a poster",
      result,
    });
  } catch (err) {
    next(err);
  }
};

const deletePoster = async (req, res, next) => {
  try {
    const { id } = req.params;

    const foundedPost = await PostSchemas.findById(id);
    if (!foundedPost) {
      throw BaseError.BadRequest("Poster not founded");
    }

    await PostSchemas.findByIdAndDelete(id);

    res.json({
      message: "Deleted a poster",
    });
  } catch (err) {
    next(err);
  }
};

const getOnePoster = async (req, res, next) => {
  try {
    const { id } = req.params;

    const foundedPost = await PostSchemas.findById(id);
    if (!foundedPost) {
      throw BaseError.BadRequest("Poster not founded");
    }
    const Post = await PostSchemas.findOne({ _id: id });
    res.json(Post);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getPoster,
  addPoster,
  updatePoster,
  deletePoster,
  getOnePoster,
};

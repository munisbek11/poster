const { Schema, model } = require("mongoose");

const postschemas = new Schema(
  {
    speaker: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    hour: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const PostSchemas = model("posts", postschemas);

module.exports = PostSchemas;

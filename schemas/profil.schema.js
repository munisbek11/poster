const { Schema, model } = require("mongoose");

const profilSchemas = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      validate: {
        validator: function (value) {
          return value.toString().length <= 9;
        },
        message: " Telefon raqami 9 ta raqamdan oshmasligi kerak",
      },
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const ProfilSchemas = model("Profil", profilSchemas);

module.exports = ProfilSchemas;

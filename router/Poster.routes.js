const { Router } = require("express");
const {
  getPoster,
  getOnePoster,
  addPoster,
  updatePoster,
  deletePoster,
} = require("../controller/poster.controller");
const { PostValidate } = require("../middleware/poster.validate.middleware");
const posterRouter = Router();

posterRouter.get("/get_posters", getPoster);
posterRouter.get("/get_one_poster/:id", getOnePoster);
posterRouter.post("/add_poster", [PostValidate], addPoster);
posterRouter.put("/update_poster/:id", [PostValidate], updatePoster);
posterRouter.delete("/delete_poster/:id", deletePoster);

module.exports = posterRouter;

const {Router} = require("express")
const { CreateProfil, editProfil, getProfil } = require("../controller/profil.controller")

const ProfilRouter = Router()

ProfilRouter.post("/create_profil", CreateProfil)
ProfilRouter.put("/edit_profil/:id", editProfil)
ProfilRouter.get("/get_profil/:id", getProfil)

module.exports = ProfilRouter
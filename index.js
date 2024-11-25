const express = require("express");
const cors = require("cors");
const connectDB = require("./db/config.db");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/error.middleware");
const posterRouter = require("./router/Poster.routes");
const ProfilRouter = require("./router/profil.routes");
const app = express();

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 4000;

connectDB();

app.use(posterRouter);
app.use(errorMiddleware);
app.use(ProfilRouter)

app.listen(PORT, () => {
  console.log(`Server is running on the port:${PORT}`);
});

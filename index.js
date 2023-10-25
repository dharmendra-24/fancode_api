// packages
import express, { urlencoded, json } from "express";
import cors from "cors";
import MatchController from "./cricket_match/controller.js";

import { connect } from "./utils/db.js";
const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;

app.post("/api/cricket/select-team", MatchController.startMatch);
app.get("/api/cricket/matchs", MatchController.matchs);

app.get("/", (req, res) => {
  res.json("Server is Running ");
});

export const start = async () => {
  try {
    await connect();
    app.listen(PORT, () => {
      console.log(`REST API on http://localhost:${PORT}/`);
      //   console.log(`DataBase_Connected:${process.env.MONGO_CONNECTION_STRING}/`);
    });
  } catch (e) {
    console.error(e);
  }
};
start();

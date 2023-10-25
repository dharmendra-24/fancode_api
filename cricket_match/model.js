import mongoose from "mongoose";

const cricketMatchSchema = new mongoose.Schema({
  date: {
    type: String,
    default: "",
  },
  tournamentOrganisingBody: {
    type: String,
    default: "ICC Cricket World Cup 2023",
  },
  team1: {
    name: {
      type: String,
    },
    score: {
      type: Number,
      default: 0,
    },
    over: {
      type: Number,
      default: 0,
    },
    outPlayers: {
      type: Number,
      default: 0,
    },
    url: {
      type: String,
      default: "../../assets/images/sri-lanka.jpg",
    },
  },
  team2: {
    name: {
      type: String,
      default: "Team 1",
    },
    score: {
      type: Number,
      default: 0,
    },
    over: {
      type: Number,
      default: 0,
    },
    outPlayers: {
      type: Number,
      default: 0,
    },
    url: {
      type: String,
      default: "./australia.jpg",
    },
  },
  tossWinner: {
    type: String,
    default: "",
  },
  statement: {
    type: String,
    default: "",
  },
});

export const CricketMatch = mongoose.model("cricket_match", cricketMatchSchema);

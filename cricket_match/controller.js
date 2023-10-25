import { CricketMatch } from "./model.js";
class MatchController {
  static startMatch = (req, res) => {
    const { tossWinner, team1, team2 } = req.body;
    if (!tossWinner || !team2 || !team1) {
      return res.status(400).json({ message: "please select a team" });
    }
    console.log(req.body);
    const match = CricketMatch.create(req.body);
    return res.status(200).json({
      data: match,
      message: "please select a team",
    });
  };
  static matchs = async (req, res) => {
    const matchs = await CricketMatch.find();
    // console.log(matchs);
    return res.status(200).json({ data: matchs });
  };
}

export default MatchController;

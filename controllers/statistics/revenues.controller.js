import { readFileSync } from "fs";

// Members
const members = JSON.parse(readFileSync("./members.json"));

// trainers
const trainers = JSON.parse(readFileSync("./trainers.json"));

// total revenues
export const totalRevenues = (req, res) => {
  let revenues = 0;
  members.map((mem) => (revenues += mem.memberShip.cost));
  res.json({ message: "revenues of the gym", revenues });
};

// specific trainer revenues
export const trainerRevenues = (req, res) => {
  let id = req.params.id;
  let revenues = 0;
  let index = trainers.findIndex((train) => train.id == id);
  if (index == -1) {
    res.json({ message: "this trainer not found" });
  }
  members
    .filter((mem) => mem.trainerId == id)
    .map((mem) => (revenues += mem.memberShip.cost));
  res.json({ message: "trainer revenues", revenues });
};

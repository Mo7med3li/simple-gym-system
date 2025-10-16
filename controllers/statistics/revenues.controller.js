import { readFileSync, writeFileSync } from "fs";

// Members
const members = JSON.parse(readFileSync("./members.json"));

// total revenues
export const totalRevenues = (req, res) => {
  let revenues = 0;
  members.map((mem) => (revenues += mem.memberShip.cost));
  res.json({ message: "revenues of the gym", revenues });
};

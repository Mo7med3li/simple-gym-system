import { readFileSync, writeFileSync } from "fs";

const members = JSON.parse(readFileSync("./members.json"));
const trainers = JSON.parse(readFileSync("./trainers.json"));

// get members
export const getMembers = (req, res) => {
  res.json({ message: "success", members });
};

// add member
export const addMembers = (req, res) => {
  const member = req.body;
  member.id = members.length + 1;
  member.status = "active";

  members.push(member);
  writeFileSync("./members.json", JSON.stringify(members));

  res.json({ message: "member added successfully", member });
};

// get member by id
export const getSpecificMember = (req, res) => {
  let id = req.params.id;
  const member = members.find((mem) => mem.id == id);
  if (!member) {
    return res.json({ message: "member not found" });
  }
  res.json({ message: "Success", member });
};

// update member
export const updateMember = (req, res) => {
  let id = req.params.id;
  let member = req.body;
  let index = members.findIndex((mem) => mem.id == id);
  // handle not found members
  if (index === -1) {
    return res.json({ message: "member not found" });
  }
  members[index].name = member.name;
  writeFileSync("./members.json", JSON.stringify(members));
  res.json({ message: "member update successfully", member: members[index] });
};

// delete member
export const deleteMember = (req, res) => {
  let id = req.params.id;
  let index = members.findIndex((mem) => mem.id == id);
  // handle not found members
  if (index === -1) {
    return res.json({ message: "member not found" });
  }
  members.splice(index, 1);
  writeFileSync("./members.json", JSON.stringify(members));
  res.json({ message: "member delete successfully", members });
};

// get members with their trainers
export const membersWithTrainers = (req, res) => {
  let membersWithTrainers = members.map((member) => {
    let trainer = trainers.find((trainer) => trainer.id == member.trainerId);
    return {
      ...member,
      trainer,
      trainerId: undefined,
    };
  });
  res.json({ message: "success", membersWithTrainers });
};

// check access for the gym
export const checkAccessGym = (req, res) => {
  let id = req.params.id;
  let member = members.find((member) => member.id == id);

  if (member.status === "active") {
    return res.json({
      message: "this user allowed to enter the gym",
      member,
    });
  }

  res.status(401).json({ message: "this use is not allowed to enter the gym" });
};

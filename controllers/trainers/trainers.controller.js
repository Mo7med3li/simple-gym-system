import { readFileSync, writeFileSync } from "fs";

// trainers
const trainers = JSON.parse(readFileSync("./trainers.json"));

// Members
const members = JSON.parse(readFileSync("./members.json"));

// get All trainers
export const getAllTrainers = (req, res) => {
  res.json({ message: "success", trainers });
};

// add trainer
export const addTrainer = (req, res) => {
  console.log(req.body);
  let trainer = req.body;
  trainer.id = trainers.length + 1;
  trainers.push(trainer);
  writeFileSync("./trainers.json", JSON.stringify(trainers));
  res.json({ message: "trainer added successfully", trainers });
};

// get trainer by id
export const getSpecificTrainer = (req, res) => {
  let id = req.params.id;
  const trainer = trainers.find((train) => train.id == id);
  if (!trainer) {
    return res.json({ message: "trainer not found" });
  }
  res.json({
    message: "success",
    trainer,
  });
};

// get all trainers with their members
export const allTrainersWithMembers = (req, res) => {
  let trainersWithHisMembers = trainers.map((trainer) => {
    let member = members.filter((mem) => trainer.id == mem.trainerId);
    return { ...trainer, members: member };
  });
  res.json({ message: "success", trainersWithHisMembers });
};

// update trainer
export const updateTrainer = (req, res) => {
  let id = req.params.id;
  let trainer = req.body;
  const index = trainers.findIndex((train) => train.id == id);
  if (index == -1) {
    res.json({ message: "this trainer not found" });
  }
  trainers[index].name = trainer.name || trainers[index].name;
  trainers[index].duration = trainer.duration || trainers[index].duration;
  writeFileSync("./trainers.json", JSON.stringify(trainers));
  res.json({
    message: "trainer updates successfully",
    trainer: trainers[index],
  });
};

// delete trainer
export const deleteTrainer = (req, res) => {
  let id = req.params.id;
  const index = trainers.findIndex((train) => train.id == id);
  if (index == -1) {
    res.json({ message: "this trainer not found" });
  }
  trainers.splice(index, 1);

  writeFileSync("./trainers.json", JSON.stringify(trainers));
  res.json({
    message: "trainer deleted successfully",
    trainer: trainers,
  });
};

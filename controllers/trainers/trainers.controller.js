import { readFileSync, writeFileSync } from "fs";

// trainers
const trainers = JSON.parse(readFileSync("./trainers.json"));

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

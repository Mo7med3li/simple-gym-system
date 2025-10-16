import { Router } from "express";
import { readFileSync, writeFileSync } from "fs";
import {
  addTrainer,
  allTrainersWithMembers,
  getAllTrainers,
  getSpecificTrainer,
} from "../controllers/trainers/trainers.controller.js";

const trainersRoute = Router();

// trainers
const trainers = JSON.parse(readFileSync("./trainers.json"));
const members = JSON.parse(readFileSync("./members.json"));

trainersRoute
  .get("/", getAllTrainers)
  .get("/all", allTrainersWithMembers)
  .post("/", addTrainer)
  .get("/:id", getSpecificTrainer);

export default trainersRoute;

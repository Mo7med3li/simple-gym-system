import { Router } from "express";
import { readFileSync, writeFileSync } from "fs";
import {
  addTrainer,
  getAllTrainers,
  getSpecificTrainer,
} from "../controllers/trainers/trainers.controller.js";

const trainersRoute = Router();

// trainers
const trainers = JSON.parse(readFileSync("./trainers.json"));
const members = JSON.parse(readFileSync("./members.json"));

trainersRoute.get("/", getAllTrainers).post("/", addTrainer);

export default trainersRoute;

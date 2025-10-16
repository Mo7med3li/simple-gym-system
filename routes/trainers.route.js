import { Router } from "express";
import {
  addTrainer,
  allTrainersWithMembers,
  deleteTrainer,
  getAllTrainers,
  getSpecificTrainer,
  specificTrainerWithMembers,
  updateTrainer,
} from "../controllers/trainers/trainers.controller.js";

const trainersRoute = Router();

trainersRoute
  .get("/", getAllTrainers)
  .get("/all", allTrainersWithMembers)
  .get("/members/:id", specificTrainerWithMembers)
  .post("/", addTrainer)
  .get("/:id", getSpecificTrainer)
  .put("/:id", updateTrainer)
  .delete("/:id", deleteTrainer);

export default trainersRoute;

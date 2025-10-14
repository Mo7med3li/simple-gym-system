import { Router } from "express";
import {
  addMembers,
  checkAccessGym,
  deleteMember,
  getMembers,
  getSpecificMember,
  membersWithTrainers,
  updateMember,
} from "../controllers/members/members.controller.js";
import { readFileSync, writeFileSync } from "fs";

const members = JSON.parse(readFileSync("./members.json"));
const trainers = JSON.parse(readFileSync("./trainers.json"));

const membersRouter = Router();

membersRouter
  .get("/trainers", membersWithTrainers)
  .get("/", getMembers)
  .post("/", addMembers)
  .get("/:id", getSpecificMember)
  .put("/:id", updateMember)
  .delete("/:id", deleteMember)
  .get("/access/:id", checkAccessGym);

export default membersRouter;

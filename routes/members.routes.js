import { Router } from "express";
import {
  addMembers,
  checkAccessGym,
  deleteMember,
  getMembers,
  getSpecificMember,
  membersWithTrainers,
  softDelete,
  updateMember,
} from "../controllers/members/members.controller.js";

const membersRouter = Router();

membersRouter
  .get("/trainers", membersWithTrainers)
  .get("/", getMembers)
  .post("/", addMembers)
  .get("/:id", getSpecificMember)
  .put("/:id", updateMember)
  .delete("/:id", deleteMember)
  .get("/access/:id", checkAccessGym)
  .delete("/soft-delete/:id", softDelete);

export default membersRouter;

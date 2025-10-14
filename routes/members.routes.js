import { Router } from "express";
import {
  addMembers,
  deleteMember,
  getMembers,
  getSpecificMember,
  updateMember,
} from "../controllers/members/members.controller.js";

const membersRouter = Router();

membersRouter
  .get("/", getMembers)
  .post("/", addMembers)
  .get("/:id", getSpecificMember)
  .put("/:id", updateMember)
  .delete("/:id", deleteMember);

export default membersRouter;

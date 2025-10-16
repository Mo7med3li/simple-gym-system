import { Router } from "express";
import { readFileSync, writeFileSync } from "fs";
import { totalRevenues } from "../controllers/statistics/revenues.controller.js";

// trainers
const trainers = JSON.parse(readFileSync("./trainers.json"));

// Members
const members = JSON.parse(readFileSync("./members.json"));
const staticsRouter = Router();
staticsRouter.get("/", totalRevenues);
export default staticsRouter;

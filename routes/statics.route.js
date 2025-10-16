import { Router } from "express";
import {
  totalRevenues,
  trainerRevenues,
} from "../controllers/statistics/revenues.controller.js";

const staticsRouter = Router();
staticsRouter.get("/", totalRevenues).get("/:id", trainerRevenues);
export default staticsRouter;

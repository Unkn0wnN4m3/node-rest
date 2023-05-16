import { Router } from "express";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getProject,
} from "../controllers/projects.controller.js";

const router = Router();

router.get("/projects", getProjects);
router.get("/projects/:id", getProject);
router.post("/projects", createProject);
router.put("/projects/:id", updateProject);
router.delete("/projects/:id", deleteProject);

export default router;

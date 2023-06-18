import { Router } from "express";
import { body } from "express-validator";
import { createRole, fetchAllRoles } from "../controllers/role.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

router.post("/", authMiddleware, createRole);

router.get("/", authMiddleware, fetchAllRoles);

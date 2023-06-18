import { Router } from "express";
import { body } from "express-validator";
import {
  createCommunity,
  fetchAllCommunities,
  fetchCommunityMembers,
  fetchJoinedCommunity,
  fetchOwnedCommunity,
} from "../controllers/community.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

router.get("/", authMiddleware, fetchAllCommunities);

router.post("/", authMiddleware, createCommunity);

router.get("/:id/members", authMiddleware, fetchCommunityMembers);

router.get("/me/owner", authMiddleware, fetchOwnedCommunity);

router.get("/me/member", authMiddleware, fetchJoinedCommunity);

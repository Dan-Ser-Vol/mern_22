import { Router } from "express";
import { createPost, getAll, getById } from "../controllers/posts.js";
import {checkAuth} from "../utils/checkAuth.js"

const router = new Router();
router.post("/", checkAuth, createPost);
router.get("/", getAll);
router.get("/:id", getById);

export default router;

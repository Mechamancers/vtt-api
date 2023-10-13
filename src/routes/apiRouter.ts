import express from "express";
import filesRouter from "./filesRouter";
import gamesRouter from "./gamesRouter";
import usersRouter from "./usersRouter";

const router = express.Router();

router.use("/games", gamesRouter);
router.use("/users", usersRouter);
router.use("/files", filesRouter);

export default router;

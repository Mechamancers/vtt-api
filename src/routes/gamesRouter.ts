import express from "express";
import GameController from "../controllers/gameController";

const router = express.Router();

router.get("/", GameController.getAllGames);
router.get("/:id", GameController.getGameById);
router.post("/", GameController.createGame);
router.post("/join/:gameCode", GameController.joinGameFromCode);
router.patch("/:id", GameController.updateGameById);
router.delete("/:id", GameController.deleteGame);
router.delete("/:id/leave", GameController.leaveGame);
router.delete("/:id/players/:playerId", GameController.kickUserFromGame);

export default router;

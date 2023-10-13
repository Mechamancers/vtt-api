import express from "express";
import UserController from "../controllers/userController";

const router = express.Router();

router.get("/", UserController.getAllUsers);
router.get("/me", UserController.getCurrentUser);
router.get("/:id", UserController.getUserById);
router.post("/", UserController.createUser);
router.patch("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

export default router;

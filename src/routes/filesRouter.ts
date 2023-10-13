import express from "express";
import FileController from "../controllers/fileController";

const router = express.Router();

router.get("/", FileController.getAllFiles);
router.get("/:id", FileController.getFileById);
router.post("/", FileController.uploadFile);
router.patch("/:id", FileController.updateFile);
router.delete("/:id", FileController.deleteFile);

export default router;

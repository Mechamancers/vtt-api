import { Request, Response, NextFunction } from "express";

class FileController {
  // get all files and folders
  static async getAllFiles(req: Request, res: Response, next: NextFunction) {
    console.log("Get all files");
  }

  // get file by ID
  static async getFileById(req: Request, res: Response, next: NextFunction) {}

  // upload file
  static async uploadFile(req: Request, res: Response, next: NextFunction) {}

  // update file
  static async updateFile(req: Request, res: Response, next: NextFunction) {}

  // delete file
  static async deleteFile(req: Request, res: Response, next: NextFunction) {}
}

export default FileController;

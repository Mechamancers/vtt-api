import { Request, Response, NextFunction } from "express";

class UserController {
  // get current user
  static async getCurrentUser(
    req: Request,
    res: Response,
    next: NextFunction
  ) {}

  // get all users
  static async getAllUsers(req: Request, res: Response, next: NextFunction) {}

  // get user by id
  static async getUserById(req: Request, res: Response, next: NextFunction) {}

  // create user
  static async createUser(req: Request, res: Response, next: NextFunction) {}

  // update user
  static async updateUser(req: Request, res: Response, next: NextFunction) {}

  // delete user
  static async deleteUser(req: Request, res: Response, next: NextFunction) {}
}

export default UserController;

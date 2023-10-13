import { Request, Response, NextFunction } from "express";
// import the game model from ../models

class GameController {
  // fetch all games
  static async getAllGames(req: Request, res: Response, next: NextFunction) {}

  // fetch game by id
  static async getGameById(req: Request, res: Response, next: NextFunction) {}

  // create new game
  static async createGame(req: Request, res: Response, next: NextFunction) {}

  // join game from code
  static async joinGameFromCode(
    req: Request,
    res: Response,
    next: NextFunction
  ) {}

  // update game
  static async updateGameById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {}

  // delete game
  static async deleteGame(req: Request, res: Response, next: NextFunction) {}

  // current user leave game
  static async leaveGame(req: Request, res: Response, next: NextFunction) {}

  // game owner kick player
  static async kickUserFromGame(
    req: Request,
    res: Response,
    next: NextFunction
  ) {}
}

export default GameController;

import { Request, Response } from "express";
import authService from "./auth.service";

class AuthController {
  async login(req: Request, res: Response) {
    try {
      const { usuario, password } = req.body;

      const resultado = await authService.login({
        usuario,
        password,
      });

      return res.status(200).json(resultado);
    } catch (error) {
      return res.status(401).json({
        erroր: error instanceof Error ? error.message : "Error de autenticación",
      });
    }
  }
}

export default new AuthController();
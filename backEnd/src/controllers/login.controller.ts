import { Request, Response } from "express";
import { loginUserService } from "../services/login/login.service";

const loginUserController = async (req: Request, res: Response) => {
  const token: string = await loginUserService(req.body);

  return res.json({ token });
};

export { loginUserController };

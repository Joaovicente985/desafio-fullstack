import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.service";
import { updateUserService } from "../services/users/updateUser.service";
import { readUserService } from "../services/users/readUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import { tUserResponse, tUserUpdate } from "../interfaces/user.interfaces";

const readUserController = async (req: Request, res: Response) => {
  const userId: string = res.locals.userId;

  const userInfo: tUserResponse = await readUserService(userId);

  return res.status(200).json(userInfo);
};

const createUserController = async (req: Request, res: Response) => {
  const newUser: tUserResponse = await createUserService(req.body);

  return res.status(201).json(newUser);
};

const updateUserController = async (req: Request, res: Response) => {
  const newUserData: tUserUpdate = req.body;
  const userId: string = res.locals.userId;

  const updatedUser: tUserResponse = await updateUserService(
    userId,
    newUserData
  );

  return res.status(200).json(updatedUser);
};

const deleteUserController = async (req: Request, res: Response) => {
  const userId: string = res.locals.userId;

  await deleteUserService(userId);

  return res.status(204).send();
};

export {
  readUserController,
  createUserController,
  updateUserController,
  deleteUserController,
};

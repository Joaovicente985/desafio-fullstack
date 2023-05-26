import { Router } from "express";
import { ensureUserIsAuthenticatedMiddleware } from "../middlewares/ensureUserIsAutenticated.middleware";
import {
  createUserController,
  readUserController,
  updateUserController,
} from "../controllers/users.controllers";
import { validateBodyMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { updateUserSchema, userSchemaRequest } from "../schemas/user.schemas";

const usersRoutes = Router();

usersRoutes.get("", ensureUserIsAuthenticatedMiddleware, readUserController);
usersRoutes.post(
  "",
  validateBodyMiddleware(userSchemaRequest),
  createUserController
);
usersRoutes.patch(
  "",
  ensureUserIsAuthenticatedMiddleware,
  validateBodyMiddleware(updateUserSchema),
  updateUserController
);
usersRoutes.delete("");

export { usersRoutes };

import { Router } from "express";
import { ensureUserIsAuthenticatedMiddleware } from "../middlewares/ensureUserIsAutenticated.middleware";
import { validateBodyMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { contactSchemaRequest } from "../schemas/contact.schemas";
import { createContactController } from "../controllers/contacts.controllers";

const contactsRoutes = Router();

contactsRoutes.get("", ensureUserIsAuthenticatedMiddleware);
contactsRoutes.post(
  "",
  ensureUserIsAuthenticatedMiddleware,
  validateBodyMiddleware(contactSchemaRequest),
  createContactController
);
contactsRoutes.patch("/:id", ensureUserIsAuthenticatedMiddleware);
contactsRoutes.delete("/:id", ensureUserIsAuthenticatedMiddleware);

export { contactsRoutes };

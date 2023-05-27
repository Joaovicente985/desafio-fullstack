import { Router } from "express";
import { ensureUserIsAuthenticatedMiddleware } from "../middlewares/ensureUserIsAutenticated.middleware";
import { validateBodyMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { contactSchemaRequest } from "../schemas/contact.schemas";
import {
  createContactController,
  readContactsController,
  updateContactController,
  deleteContactController,
} from "../controllers/contacts.controllers";

const contactsRoutes = Router();

contactsRoutes.get(
  "",
  ensureUserIsAuthenticatedMiddleware,
  readContactsController
);
contactsRoutes.post(
  "",
  ensureUserIsAuthenticatedMiddleware,
  validateBodyMiddleware(contactSchemaRequest),
  createContactController
);
contactsRoutes.patch(
  "/:id",
  ensureUserIsAuthenticatedMiddleware,
  updateContactController
);
contactsRoutes.delete(
  "/:id",
  ensureUserIsAuthenticatedMiddleware,
  deleteContactController
);

export { contactsRoutes };

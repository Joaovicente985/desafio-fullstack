import { Request, Response } from "express";
import { createContactService } from "../services/contacs/createContact.service";
import { readContactsService } from "../services/contacs/readContacts.service";
import { updateContactService } from "../services/contacs/updateContact.service";
import { deleteContactService } from "../services/contacs/deleteContact.service";
import {
  tContactRequest,
  tContact,
  tContactUpdate,
} from "../interfaces/contact.intefaces";

const readContactsController = async (req: Request, res: Response) => {
  console.log(res.locals.userId);
  const userId: string = res.locals.userId;
  const contactId: string = req.params.id;

  const contact: tContact = await readContactsService(userId, contactId);

  return res.json(contact);
};

const createContactController = async (req: Request, res: Response) => {
  const userId: string = res.locals.userId;

  const newContact: tContactRequest = await createContactService(
    req.body,
    userId
  );

  return res.status(201).json(newContact);
};

const updateContactController = async (req: Request, res: Response) => {
  const contactId: string = req.params.id;

  const newValues: tContactUpdate = req.body;

  const updatedContact: tContactUpdate = await updateContactService(
    contactId,
    newValues
  );

  return res.json(updatedContact);
};

const deleteContactController = async (req: Request, res: Response) => {
  const contactId: string = req.params.id;

  await deleteContactService(contactId);

  return res.status(204).send();
};

export {
  readContactsController,
  createContactController,
  updateContactController,
  deleteContactController,
};

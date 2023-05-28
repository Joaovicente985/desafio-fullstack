import { z } from "zod";
import {
  contactSchema,
  contactSchemaRequest,
  contactsSchemaResponse,
} from "../schemas/contact.schemas";
import { DeepPartial } from "typeorm";

type tContact = z.infer<typeof contactSchema>;
type tContactRequest = z.infer<typeof contactSchemaRequest>;
type tContactResponse = z.infer<typeof contactsSchemaResponse>;
type tContactUpdate = DeepPartial<tContactRequest>;

export { tContact, tContactRequest, tContactResponse, tContactUpdate };

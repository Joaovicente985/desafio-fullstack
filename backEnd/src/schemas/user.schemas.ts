import { z } from "zod";
import { contactsSchemaResponse } from "./contact.schemas";

const userSchema = z.object({
  id: z.string().uuid(),
  fullName: z.string().min(10).max(120),
  email: z.string().email().min(10).max(45),
  password: z.string().min(6),
  phoneNumber: z.string().min(8).max(14),
  registerDate: z.date().or(z.string()),
  contacts: contactsSchemaResponse,
});

const userSchemaRequest = userSchema.omit({
  id: true,
  registerDate: true,
  contacts: true,
});

const userSchemaResponse = userSchema.omit({
  password: true,
});

const updateUserSchema = userSchemaRequest.partial();

export { userSchema, userSchemaRequest, updateUserSchema, userSchemaResponse };

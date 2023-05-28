import { z } from "zod";

const contactSchema = z.object({
  id: z.string(),
  fullName: z.string().min(10).max(120),
  email: z.string().email().min(10).max(45),
  phoneNumber: z.string().min(6).max(45),
  registerDate: z.date().or(z.string()),
});

const contactSchemaRequest = contactSchema.omit({
  id: true,
  registerDate: true,
});

const contactsSchemaResponse = z.array(contactSchema);

export { contactSchema, contactSchemaRequest, contactsSchemaResponse };

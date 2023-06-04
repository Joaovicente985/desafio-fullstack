import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().nonempty("Insira o nome completo"),
  email: z.string().email("Insira um email"),
  phoneNumber: z.string().nonempty("Insira um telefone"),
});

const contactSchemaUpdate = z.object({
  fullName: z.string().nonempty("Insira um nome"),
  email: z.string().email().nonempty("Insira um e-mail"),
  phoneNumber: z.string().nonempty("Insira um número de telefone"),
});

type tContact = z.infer<typeof contactSchema>;
type tContactUpdate = z.infer<typeof contactSchemaUpdate>;

export { contactSchema, contactSchemaUpdate };

export type { tContact, tContactUpdate };
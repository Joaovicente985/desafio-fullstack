import { z } from "zod";

const contactSchema = z.object({
  fullName: z
    .string()
    .nonempty("Insira o nome completo")
    .min(10, "O nome deve conter pelo menos 10 caractéres")
    .max(120, "O nome deve conter no máximo 120 caractéres"),
  email: z.string().email("Insira um email"),
  phoneNumber: z
    .string()
    .nonempty("Insira um telefone")
    .min(8, "O telefone deve conter no mínimo 8 caractéres"),
});

type tContact = z.infer<typeof contactSchema>;

export { contactSchema };

export type { tContact };

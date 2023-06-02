import { z } from "zod";

const registerSchema = z.object({
  fullName: z.string().nonempty("Insira o nome completo").min(10).max(120),
  email: z.string().email("Insira um e-mail válido"),
  password: z.string().nonempty("Insira uma senha"),
  phoneNumber: z
    .string()
    .nonempty("insira um número de telefone")
    .min(8)
    .max(14),
});

type tRegister = z.infer<typeof registerSchema>;

export { registerSchema };

export type { tRegister };

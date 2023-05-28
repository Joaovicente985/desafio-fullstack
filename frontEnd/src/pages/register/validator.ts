import { z } from "zod";

const registerSchema = z.object({
  fullName: z.string().min(10).max(120).nonempty("Insira o nome completo"),
  email: z
    .string()
    .email("Insira um e-mail válido")
    .nonempty("insira um e-mail"),
  password: z.string().nonempty("Insira uma senha"),
  phoneNumber: z
    .string()
    .min(8)
    .max(14)
    .nonempty("insira um número de telefone"),
});

type tRegister = z.infer<typeof registerSchema>;

export { registerSchema };

export type { tRegister };

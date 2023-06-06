import { z } from "zod";

const registerSchema = z.object({
  fullName: z.string().nonempty("Insira o nome completo").min(10).max(120),
  email: z.string().email("Insira um e-mail válido"),
  password: z
    .string()
    .nonempty("Insira uma senha")
    .min(6, "A senha deve conter no mínimo 6 caractéres"),
  phoneNumber: z
    .string()
    .nonempty("insira um número de telefone")
    .min(8, "O telefone deve conter no mínimo 8 caractéres")
    .max(14),
});

type tRegister = z.infer<typeof registerSchema>;

export { registerSchema };

export type { tRegister };

import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Insira um e-mail válido"),
  password: z
    .string()
    .nonempty("Insira uma senha")
    .min(6, "A senha deve conter no mínimo 6 caractéres"),
});

type tLogin = z.infer<typeof loginSchema>;

export { loginSchema };

export type { tLogin };

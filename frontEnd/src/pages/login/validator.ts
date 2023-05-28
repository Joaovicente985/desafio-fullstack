import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Insira um e-mail válido"),
  password: z.string().nonempty("Insira uma senha"),
});

type tLogin = z.infer<typeof loginSchema>;

export { loginSchema };

export type { tLogin };

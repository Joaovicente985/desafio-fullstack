import { z } from "zod";

const userSchema = z.object({
  id: z.string().uuid(),
  fullName: z.string().min(10).max(120),
  email: z.string().email().min(10).max(45),
  password: z.string().min(6).max(45),
  phoneNumber: z.string().min(8).max(14),
  registerDate: z.date(),
});

const userSchemaRequest = userSchema.omit({
  id: true,
});

const userSchemaResponse = userSchema.omit({
  password: true,
});

const updateUserSchema = userSchemaRequest.partial();

export { userSchema, userSchemaRequest, updateUserSchema, userSchemaResponse };

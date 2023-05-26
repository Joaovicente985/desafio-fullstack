import { TypeOf, z } from "zod";
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
} from "../schemas/user.schemas";
import { DeepPartial } from "typeorm";

type tUser = z.infer<typeof userSchema>;
type tUserRequest = z.infer<typeof userSchemaRequest>;
type tUserResponse = z.infer<typeof userSchemaResponse>;
type tUserUpdate = DeepPartial<tUserRequest>;

export { tUser, tUserRequest, tUserResponse, tUserUpdate };

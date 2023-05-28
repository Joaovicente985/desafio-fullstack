import { appDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { tUserRequest, tUserResponse } from "../../interfaces/user.interfaces";
import { userSchemaResponse } from "../../schemas/user.schemas";
import { customError } from "../../errors/customErrors";
import { Repository } from "typeorm";

const createUserService = async (
  data: tUserRequest
): Promise<tUserResponse> => {
  const userEmail: string = data.email;
  const userRepo: Repository<User> = appDataSource.getRepository(User);
  const foundUser: User | null = await userRepo.findOne({
    where: {
      email: userEmail,
    },
  });

  if (foundUser) {
    throw new customError("User already exists.", 409);
  }

  const createUser = userRepo.create({ ...data });

  await userRepo.save(createUser);

  return userSchemaResponse.parse(createUser);
};

export { createUserService };

import { Repository } from "typeorm";
import { appDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { tUserUpdate, tUserResponse } from "../../interfaces/user.interfaces";
import { userSchemaResponse } from "../../schemas/user.schemas";

const updateUserService = async (
  userId: string,
  partialData: tUserUpdate
): Promise<tUserResponse> => {
  const userRepo: Repository<User> = appDataSource.getRepository(User);

  const foundUser: User | null = await userRepo.findOneBy({
    id: userId,
  });

  const userResponse: tUserUpdate = userRepo.create({
    ...foundUser,
    ...partialData,
  });

  await userRepo.save(userResponse);

  return userSchemaResponse.parse(userResponse);
};

export { updateUserService };

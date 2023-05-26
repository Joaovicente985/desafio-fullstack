import { appDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { tUserResponse } from "../../interfaces/user.interfaces";
import { userSchemaResponse } from "../../schemas/user.schemas";
import { Repository } from "typeorm";

const readUserService = async (userId: string): Promise<tUserResponse> => {
  const userRepo: Repository<User> = appDataSource.getRepository(User);

  const user: User | null = await userRepo.findOneBy({
    id: userId,
  });

  return userSchemaResponse.parse(user);
};

export { readUserService };

import { Repository } from "typeorm";
import { appDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const deleteUserService = async (userId: string): Promise<void> => {
  const userRepo: Repository<User> = appDataSource.getRepository(User);

  const foundUser = await userRepo.findOne({
    where: {
      id: userId,
    },
  });

  await userRepo.remove(foundUser!);
};

export default deleteUserService;

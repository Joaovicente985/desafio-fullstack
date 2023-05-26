import { appDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { customError } from "../../errors/customErrors";
import { tLoginRequest } from "../../interfaces/login.interfaces";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const loginUserService = async (data: tLoginRequest): Promise<string> => {
  const userRepo = appDataSource.getRepository(User);

  const user = await userRepo.findOne({
    where: {
      email: data.email,
    },
  });

  if (!user) {
    throw new customError("Invalid credentials", 403);
  }

  const passwordMatch = await compare(data.password, user.password);

  if (!passwordMatch) {
    throw new customError("Invalid credentials", 403);
  }

  const token = jwt.sign({ userName: user.fullName }, process.env.SECRET_KEY!, {
    expiresIn: "1h",
    subject: user.id,
  });

  return token;
};

export { loginUserService };

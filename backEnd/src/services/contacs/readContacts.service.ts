import { Repository } from "typeorm";
import { Contact } from "../../entities/contact.entity";
import { tContactResponse } from "../../interfaces/contact.intefaces";
import { appDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { contactsSchemaResponse } from "../../schemas/contact.schemas";

const readContactsService = async (
  userId: string
): Promise<tContactResponse> => {
  const contactRepo: Repository<Contact> = appDataSource.getRepository(Contact);
  const userRepo: Repository<User> = appDataSource.getRepository(User);

  const user: User | null = await userRepo.findOneBy({
    id: userId,
  });

  const contacts: Contact[] = await contactRepo.find({
    where: {
      user: !user,
    },
  });

  return contactsSchemaResponse.parse(contacts);
};

export { readContactsService };

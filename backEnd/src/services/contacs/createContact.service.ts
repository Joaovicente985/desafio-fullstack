import { Repository } from "typeorm";
import { appDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { tContact, tContactRequest } from "../../interfaces/contact.intefaces";
import { User } from "../../entities/user.entity";
import { contactSchema } from "../../schemas/contact.schemas";

const createContactService = async (
  contactData: tContactRequest,
  userId: string
): Promise<tContact> => {
  const contactRepo: Repository<Contact> = appDataSource.getRepository(Contact);
  const userRepo: Repository<User> = appDataSource.getRepository(User);

  const user: User | null = await userRepo.findOneBy({
    id: userId,
  });

  const newContact: Contact = contactRepo.create({
    ...contactData,
    user: user!,
  });

  const createContact = await contactRepo.save(newContact);

  return contactSchema.parse(createContact);
};

export { createContactService };

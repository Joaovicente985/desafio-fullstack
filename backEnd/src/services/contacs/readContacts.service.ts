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

  const contacts: Contact[] = await contactRepo
    .createQueryBuilder("contacts")
    .where("contacts.user = :id", { id: userId })
    .getMany();

  return contactsSchemaResponse.parse(contacts);
};

export { readContactsService };

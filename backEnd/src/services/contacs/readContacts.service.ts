import { Repository } from "typeorm";
import { Contact } from "../../entities/contact.entity";
import { tContact } from "../../interfaces/contact.intefaces";
import { appDataSource } from "../../data-source";
import { contactSchema } from "../../schemas/contact.schemas";

const readContactsService = async (
  userId: string,
  contactId: string
): Promise<tContact> => {
  const contactRepo: Repository<Contact> = appDataSource.getRepository(Contact);

  const contacts: Contact = await contactRepo
    .createQueryBuilder("contacts")
    .where("contacts.id = :id", { id: contactId })
    .andWhere("contacts.user = :userId", { userId: userId })
    .getOneOrFail();

  return contactSchema.parse(contacts);
};

export { readContactsService };

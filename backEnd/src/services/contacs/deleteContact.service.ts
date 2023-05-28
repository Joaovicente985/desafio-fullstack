import { Repository } from "typeorm";
import { Contact } from "../../entities/contact.entity";
import { appDataSource } from "../../data-source";
import { customError } from "../../errors/customErrors";

const deleteContactService = async (contactId: string): Promise<void> => {
  const contactRepo: Repository<Contact> = appDataSource.getRepository(Contact);

  const contact: Contact | null = await contactRepo.findOneBy({
    id: contactId,
  });

  if (!contact) {
    throw new customError("Contact not found", 404);
  }

  await contactRepo.remove(contact);
};

export { deleteContactService };

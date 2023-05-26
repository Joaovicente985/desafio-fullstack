import { Repository } from "typeorm";
import { tContactUpdate } from "../../interfaces/contact.intefaces";
import { Contact } from "../../entities/contact.entity";
import { appDataSource } from "../../data-source";
import { customError } from "../../errors/customErrors";
import { contactSchema } from "../../schemas/contact.schemas";

const updateContactService = async (
  contactId: string,
  contactData: tContactUpdate
): Promise<tContactUpdate> => {
  const contactRepo: Repository<Contact> = appDataSource.getRepository(Contact);
  const contact: Contact | null = await contactRepo.findOneBy({
    id: contactId,
  });

  if (!contact) {
    throw new customError("Contact not found", 404);
  }

  const updatedContact = contactRepo.create({
    ...contact,
    ...contactData,
  });

  await contactRepo.save(updatedContact);

  return contactSchema.parse(updatedContact);
};

export { updateContactService };

import { ReactNode, createContext } from "react";
import { z } from "zod";
import { api } from "../services/api";

const contactSchema = z.object({
  fullName: z.string().nonempty("Insira o nome completo"),
  email: z.string().email("Insira um email"),
  phoneNumber: z.string().nonempty("Insira um telefone"),
});

const contactSchemaUpdate = z.object({
  fullName: z.string().optional(),
  email: z.string().email().optional(),
  phoneNumber: z.string().optional(),
});

type tContact = z.infer<typeof contactSchema>;
type tContactUpdate = z.infer<typeof contactSchemaUpdate>;

interface ContactProviderProps {
  children: ReactNode;
}

interface ContactContextValues {
  createContact: (data: tContact) => void;
  updateContact: (data: tContactUpdate, id: string) => void;
  deleteContact: (id: string) => void;
}

const ContactContext = createContext<ContactContextValues>(
  {} as ContactContextValues
);

const ContactProvider = ({ children }: ContactProviderProps) => {
  const createContact = async (data: tContact) => {
    try {
      await api.post("/contacts", data);

      alert("Contato criado com sucesso!");
    } catch (error) {
      console.error(error);
    }
  };

  const updateContact = async (data: tContactUpdate, id: string) => {
    try {
      api.patch(`/contacts/${id}`, data);

      alert("Contato atualizado com sucesso!");
    } catch (error) {
      console.error(error);
    }
  };

  const deleteContact = async (id: string) => {
    try {
      await api.delete(`/contacts/${id}`);

      alert("Contato removido com sucesso!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ContactContext.Provider
      value={{ createContact, updateContact, deleteContact }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export { ContactProvider, ContactContext };

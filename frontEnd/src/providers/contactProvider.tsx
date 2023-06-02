import { ReactNode, createContext } from "react";
import { api } from "../services/api";
import {
  tContact,
  tContactUpdate,
} from "../components/modalCreateForm/validator";

interface ContactProviderProps {
  children: ReactNode;
}

interface ContactContextValues {
  readContact: (id: string) => void;
  createContact: (data: tContact) => void;
  updateContact: (data: tContactUpdate, id: string) => void;
  deleteContact: (id: string) => void;
}

const ContactContext = createContext<ContactContextValues>(
  {} as ContactContextValues
);

const ContactProvider = ({ children }: ContactProviderProps) => {
  const readContact = async (id: string) => {
    try {
      await api.get(`/contact/${id}`);
    } catch (error) {
      console.error(error);
    }
  };
  const createContact = async (data: tContact) => {
    console.log(data);
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
      value={{ readContact, createContact, updateContact, deleteContact }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export { ContactProvider, ContactContext };

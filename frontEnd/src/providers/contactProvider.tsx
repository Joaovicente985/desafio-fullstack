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
  readContact: () => void;
  createContact: (data: tContact) => void;
  updateContact: (data: tContactUpdate) => void;
  deleteContact: () => void;
}

const ContactContext = createContext<ContactContextValues>(
  {} as ContactContextValues
);

const ContactProvider = ({ children }: ContactProviderProps) => {
  const getToken = localStorage.getItem("@Token");

  const readContact = async () => {
    const id = localStorage.getItem("@Id");
    try {
      await api.get(`/contacts/${id}`);
    } catch (error) {
      console.error(error);
    }
  };
  const createContact = async (data: tContact) => {
    try {
      await api.post("/contacts", data, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });

      alert("Contato criado com sucesso!");
    } catch (error) {
      console.error(error);
    }
  };

  const updateContact = async (data: tContactUpdate) => {
    const id = localStorage.getItem("@Id");
    try {
      api.patch(`/contacts/${id}`, data);

      alert("Contato atualizado com sucesso!");
    } catch (error) {
      console.error(error);
    }
  };

  const deleteContact = async () => {
    const id = localStorage.getItem("@Id");
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

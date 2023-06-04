import { ReactNode, createContext, useState } from "react";
import { api } from "../services/api";
import {
  tContact,
  tContactUpdate,
} from "../components/modalCreateForm/validator";
import { iContact } from "../interfaces";

interface ContactProviderProps {
  children: ReactNode;
}

interface ContactContextValues {
  readContact: () => void;
  createContact: (data: tContact) => void;
  updateContact: (data: tContactUpdate) => void;
  deleteContact: () => void;
  contactInfo: iContact | void;
  setContactInfo: React.Dispatch<React.SetStateAction<iContact | undefined>>;
  modal: boolean;
  modalCreate: boolean;
  modalUpdate: boolean;
  modalDelete: boolean;
  modalInfo: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalCreate: React.Dispatch<React.SetStateAction<boolean>>;
  setModalUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  setModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
  setModalInfo: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactContext = createContext<ContactContextValues>(
  {} as ContactContextValues
);

const ContactProvider = ({ children }: ContactProviderProps) => {
  const getToken = localStorage.getItem("@Token");
  const [contactInfo, setContactInfo] = useState<iContact>();
  const [modal, setModal] = useState<boolean>(false);
  const [modalCreate, setModalCreate] = useState<boolean>(false);
  const [modalUpdate, setModalUpdate] = useState<boolean>(false);
  const [modalDelete, setModalDelete] = useState<boolean>(false);
  const [modalInfo, setModalInfo] = useState<boolean>(false);

  const readContact = async () => {
    const id = localStorage.getItem("@Id");
    try {
      const response = await api.get(`/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });
      setContactInfo(response.data);
      setModal(true);
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
      setModalCreate(false);
    } catch (error) {
      console.error(error);
    }
  };

  const updateContact = async (data: tContactUpdate) => {
    const id = localStorage.getItem("@Id");
    try {
      api.patch(`/contacts/${id}`, data, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });

      alert("Contato atualizado com sucesso!");
      setModalUpdate(false);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteContact = async () => {
    const id = localStorage.getItem("@Id");
    try {
      await api.delete(`/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });

      alert("Contato removido com sucesso!");
      setModalDelete(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        readContact,
        createContact,
        updateContact,
        deleteContact,
        contactInfo,
        setContactInfo,
        modal,
        modalCreate,
        modalUpdate,
        modalDelete,
        modalInfo,
        setModal,
        setModalCreate,
        setModalUpdate,
        setModalDelete,
        setModalInfo,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export { ContactProvider, ContactContext };

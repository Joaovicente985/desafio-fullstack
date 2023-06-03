import { useEffect, useState } from "react";
import {
  StyledContactsCont,
  StyledDashCont,
  StyledDashHeader,
  StyledModalContainer,
} from "./style";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { ModalCreateForm } from "../../components/modalCreateForm";
import { useContact } from "../../hooks/useContact";

interface iUser {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  contacts: iContacts[] | [];
}

interface iContacts {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  registerDate: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("@Token");
  const [user, setUser] = useState<iUser>();
  const [modal, setModal] = useState<boolean>(false);
  const [modalCreate, setModalCreate] = useState<boolean>(false);
  const [modalUpdate, setModalUpdate] = useState<boolean>(false);
  const [contactInfo, setContactInfo] = useState<iContacts | void>();

  const { readContact, deleteContact } = useContact();

  const logoutUser = () => {
    localStorage.removeItem("@Token");
    navigate("/login");
  };

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
    (async () => {
      try {
        const response = await api.get<iUser>("users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        navigate("/login");
      }
    })();
  }, []);

  return (
    <>
      {modal && (
        <StyledModalContainer>
          <div>
            <h1>{contactInfo?.fullName}</h1>
            <h2>{contactInfo?.email}</h2>
            <h2>{contactInfo?.phoneNumber}</h2>
            <h2>{contactInfo?.registerDate}</h2>
          </div>
        </StyledModalContainer>
      )}
      {modalCreate && (
        <StyledModalContainer>
          <div>
            <ModalCreateForm />
          </div>
        </StyledModalContainer>
      )}
      {modalUpdate && (
        <StyledModalContainer>
          <div></div>
        </StyledModalContainer>
      )}
      <StyledDashCont>
        <StyledDashHeader>
          <h1>@Contacts</h1>
          <section>
            <button onClick={() => setModal(true)}>Info</button>
            <button onClick={() => logoutUser()}>Logout</button>
          </section>
        </StyledDashHeader>
        <StyledContactsCont>
          <div>
            <h1>Seja</h1>
            <h1>Bem</h1>
            <h1>Vindo(a)</h1>
            <h1>{user?.fullName}</h1>
          </div>
          <section>
            <h1>Contatos</h1>
            <ul>
              {user ? (
                user.contacts.length > 0 ? (
                  user.contacts.map((contact) => (
                    <li key={contact.id}>
                      <h3>@{contact.fullName}</h3>
                      <span>
                        <button
                          onClick={() => {
                            localStorage.setItem("@Id", contact.id),
                              setModal(true),
                              setContactInfo(readContact());
                          }}
                        >
                          Ver contato
                        </button>
                        <button
                          onClick={() => {
                            localStorage.setItem("@Id", contact.id),
                              setModalUpdate(true),
                              setContactInfo(readContact());
                          }}
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => {
                            localStorage.setItem("@Id", contact.id),
                              setContactInfo(readContact()),
                              setModal(true);
                          }}
                        >
                          Remover
                        </button>
                      </span>
                    </li>
                  ))
                ) : (
                  <>
                    <h1>@Você ainda não tem nenhum contato...</h1>
                  </>
                )
              ) : (
                <>
                  <h1>@Carregando...</h1>
                </>
              )}
            </ul>
            <button onClick={() => setModalCreate(true)}>
              Cadastrar novo contato
            </button>
          </section>
        </StyledContactsCont>
      </StyledDashCont>
    </>
  );
};

export { Dashboard };

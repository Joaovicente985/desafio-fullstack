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
import { iUser } from "../../interfaces";
import { ModalUpdateForm } from "../../components/modalUpdateForm";

const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("@Token");
  const [user, setUser] = useState<iUser>();

  const {
    readContact,
    deleteContact,
    contactInfo,
    setContactInfo,
    modal,
    modalCreate,
    modalUpdate,
    modalDelete,
    setModal,
    setModalCreate,
    setModalUpdate,
    setModalDelete,
  } = useContact();

  const getContactInfo = async () => {
    const token = localStorage.getItem("@Token");
    const contactId = localStorage.getItem("@Id");
    try {
      const response = await api.get(`/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContactInfo(response.data);
      setModalUpdate(true);
    } catch (error) {
      console.error(error);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("@Token");
    navigate("/login");
  };

  useEffect(() => {
    console.log("oi");
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
  }, [modal, modalCreate, modalUpdate, modalDelete, token, navigate]);

  return (
    <>
      {modal && (
        <StyledModalContainer>
          <div>
            <section>
              <button onClick={() => setModal(false)}>X</button>
            </section>
            <span>
              <h1>Nome Completo</h1>
              <h3>{contactInfo?.fullName}</h3>
              <h1>E-mail</h1>
              <h3>{contactInfo?.email}</h3>
              <h1>Telefone</h1>
              <h3>{contactInfo?.phoneNumber}</h3>
              <h1>Data de cadastro</h1>
              <h3>{contactInfo?.registerDate}</h3>
            </span>
          </div>
        </StyledModalContainer>
      )}
      {modalCreate && (
        <StyledModalContainer>
          <div>
            <section>
              <button onClick={() => setModalCreate(false)}>X</button>
            </section>
            <ModalCreateForm />
          </div>
        </StyledModalContainer>
      )}
      {modalUpdate && (
        <StyledModalContainer>
          <div>
            <section>
              <button onClick={() => setModalUpdate(false)}>X</button>
            </section>
            <ModalUpdateForm />
          </div>
        </StyledModalContainer>
      )}
      {modalDelete && (
        <StyledModalContainer>
          <div>
            <section>
              <button onClick={() => setModalDelete(false)}>X</button>
            </section>
            <span>
              <h1>Deseja remover este contato?</h1>
            </span>
            <span>
              <button onClick={() => deleteContact()}>Remover</button>
            </span>
          </div>
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
                              readContact();
                          }}
                        >
                          Ver contato
                        </button>
                        <button
                          onClick={() => {
                            localStorage.setItem("@Id", contact.id),
                              getContactInfo();
                          }}
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => {
                            localStorage.setItem("@Id", contact.id),
                              setModalDelete(true);
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

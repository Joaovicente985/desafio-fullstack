import { useEffect, useState } from "react";
import { StyledContactsCont, StyledDashCont, StyledDashHeader } from "./style";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

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

  const logoutUser = () => {
    localStorage.removeItem("@Token");
    navigate("/login");
  };

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
    (async () => {
      const response = await api.get<iUser>("users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
    })();
  }, []);

  return (
    <StyledDashCont>
      <StyledDashHeader>
        <h1>@Contacts</h1>
        <section>
          <button>Info</button>
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
                      <button>Ver contato</button>
                      <button>Editar</button>
                      <button>Remover</button>
                    </span>
                  </li>
                ))
              ) : (
                <li>Não tem nada</li>
              )
            ) : (
              <li>Não tem nada</li>
            )}
          </ul>
          <button>Cadastrar novo contato</button>
        </section>
      </StyledContactsCont>
    </StyledDashCont>
  );
};

export { Dashboard };

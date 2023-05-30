import { useEffect, useState } from "react";
import { StyledContactsCont, StyledDashCont, StyledDashHeader } from "./style";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

interface iUser {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  contacts: [];
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
        <h1>{user?.fullName}</h1>
        <p>{user?.email}</p>
        <p>{user?.phoneNumber}</p>
      </StyledContactsCont>
    </StyledDashCont>
  );
};

export { Dashboard };

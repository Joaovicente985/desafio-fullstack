import { ReactNode, createContext, useState } from "react";
import { tLogin } from "../pages/login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { tRegister } from "../pages/register/validator";
import { iUser } from "../interfaces";

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextValues {
  loginUser: (data: tLogin) => void;
  registerUser: (data: tRegister) => void;
  updateUser: (data: tRegister) => void;
  user: iUser | undefined;
  modalUpdateUser: boolean;
  setModalUpdateUser: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<iUser | undefined>>;
}

const UserContext = createContext<UserContextValues>({} as UserContextValues);

const UserProvider = ({ children }: UserProviderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<iUser>();
  const [modalUpdateUser, setModalUpdateUser] = useState<boolean>(false);

  const loginUser = async (data: tLogin) => {
    try {
      const response = await api.post("/login", data);

      const { token } = response.data;

      api.defaults.headers.common.Authorization = `
            Bearer ${token}
        `;

      localStorage.setItem("@Token", token);

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const registerUser = async (data: tRegister) => {
    try {
      await api.post("/users", data);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = async (data: tRegister) => {
    const getToken = localStorage.getItem("@Token");
    try {
      await api.patch("/users", data, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });

      const response = await api.get<iUser>("users", {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });
      setUser(response.data);

      alert("Usuário atualizado com sucesso!");
      setModalUpdateUser(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        loginUser,
        registerUser,
        updateUser,
        user,
        modalUpdateUser,
        setUser,
        setModalUpdateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };

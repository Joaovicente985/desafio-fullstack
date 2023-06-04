import { ReactNode, createContext } from "react";
import { tLogin } from "../pages/login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { tRegister } from "../pages/register/validator";

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextValues {
  loginUser: (data: tLogin) => void;
  registerUser: (data: tRegister) => void;
}

const UserContext = createContext<UserContextValues>({} as UserContextValues);

const UserProvider = ({ children }: UserProviderProps) => {
  const navigate = useNavigate();

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

  return (
    <UserContext.Provider value={{ loginUser, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };

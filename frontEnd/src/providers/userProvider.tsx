import { ReactNode, createContext, useState } from "react";
import { tLogin } from "../pages/login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { tRegister } from "../pages/register/validator";
import { iUser } from "../interfaces";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextValues {
  loginUser: (data: tLogin) => void;
  registerUser: (data: tRegister) => void;
  updateUser: (data: tRegister) => void;
  deleteUser: () => void;
  user: iUser | undefined;
  modalUpdateUser: boolean;
  modalDeleteUser: boolean;
  setUser: React.Dispatch<React.SetStateAction<iUser | undefined>>;
  setModalUpdateUser: React.Dispatch<React.SetStateAction<boolean>>;
  setModalDeleteUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserContext = createContext<UserContextValues>({} as UserContextValues);

const UserProvider = ({ children }: UserProviderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<iUser>();
  const [modalUpdateUser, setModalUpdateUser] = useState<boolean>(false);
  const [modalDeleteUser, setModalDeleteUser] = useState<boolean>(false);
  const getToken = localStorage.getItem("@Token");

  const loginUser = async (data: tLogin) => {
    try {
      const response = await api.post("/login", data);

      const { token } = response.data;

      api.defaults.headers.common.Authorization = `
            Bearer ${token}
        `;

      localStorage.setItem("@Token", token);

      toast.success("Seja bem vindo!", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/dashboard");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.message.includes("403")) {
          toast.error("E-mail ou senha inválidos!", {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error("Houve algum erro, tente novamente mais tarde!", {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }
      console.error(error);
    }
  };

  const registerUser = async (data: tRegister) => {
    try {
      await api.post("/users", data);

      toast.success("Cadastro realizado com sucesso!", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data.message.includes("already exists")) {
          toast.error("Este e-mail ja está sendo utilizado!", {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error("Houve algum erro, tente novamente mais tarde!", {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }
      console.error(error);
    }
  };

  const updateUser = async (data: tRegister) => {
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

      toast.success("Usuário atualizado com sucesso", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setModalUpdateUser(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data.message.includes("violates unique")) {
          toast.error("Este e-mail ja está sendo utilizado!", {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error("Houve algum erro, tente novamente mais tarde!", {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }
      console.error(error);
    }
  };

  const deleteUser = async () => {
    try {
      await api.delete("/users", {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });

      toast.success("Usuário deletado com sucesso, redirecionando...", {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("");
    } catch (error) {
      toast.error("Houve algum erro, tente novamente mais tarde!", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        loginUser,
        registerUser,
        updateUser,
        deleteUser,
        user,
        modalUpdateUser,
        modalDeleteUser,
        setUser,
        setModalUpdateUser,
        setModalDeleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };

import { UserContext } from "../providers/userProvider";
import { useContext } from "react";

const useAuth = () => {
  const userContext = useContext(UserContext);

  return userContext;
};

export { useAuth };

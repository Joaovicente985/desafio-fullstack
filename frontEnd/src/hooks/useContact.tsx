import { ContactContext } from "../providers/contactProvider";
import { useContext } from "react";

const useContact = () => {
  const contactContext = useContext(ContactContext);

  return contactContext;
};

export { useContact };

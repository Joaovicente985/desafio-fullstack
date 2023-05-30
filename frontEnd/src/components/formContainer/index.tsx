import { PropsWithChildren } from "react";
import { StyledFormContainer } from "./style";

const FormContainer = ({ children }: PropsWithChildren) => {
  return (
    <>
      <StyledFormContainer>{children}</StyledFormContainer>
    </>
  );
};

export { FormContainer };

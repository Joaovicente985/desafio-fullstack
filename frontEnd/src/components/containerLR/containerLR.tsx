import { PropsWithChildren } from "react";
import { StyledContainer } from "./style";

const ContainerLR = ({ children }: PropsWithChildren) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export { ContainerLR };

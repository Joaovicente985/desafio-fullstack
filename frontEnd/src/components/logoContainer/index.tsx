import { PropsWithChildren } from "react";
import { StyledLogoCont } from "./style";

const LogoContainer = ({ children }: PropsWithChildren) => {
  return <StyledLogoCont>{children}</StyledLogoCont>;
};

export { LogoContainer };

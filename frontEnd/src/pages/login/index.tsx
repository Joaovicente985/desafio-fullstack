import { ContainerLR } from "../../components/containerLR/containerLR";
import { FormContainer } from "../../components/formContainer/formContainer";

const Login = () => {
  return (
    <ContainerLR>
      <FormContainer>
        <h1>Login</h1>

        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" />

          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="Senha" />

          <button type="submit">Entrar</button>
        </form>
      </FormContainer>
    </ContainerLR>
  );
};

export { Login };

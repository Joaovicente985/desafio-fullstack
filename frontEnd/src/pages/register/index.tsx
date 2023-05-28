import { ContainerLR } from "../../components/containerLR/containerLR";
import { FormContainer } from "../../components/formContainer/formContainer";

const Register = () => {
  return (
    <ContainerLR>
      <FormContainer>
        <h1>Cadastrar Usuário</h1>

        <form>
          <label htmlFor="fullName">Nome Completo</label>
          <input type="text" id="fullName" placeholder="Nome Completo" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" />

          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="Senha" />

          <label htmlFor="phoneNumber">Telefone</label>
          <input type="text" id="phoneNumber" placeholder="Telefone" />

          <button type="submit">Cadastrar</button>
        </form>
      </FormContainer>
    </ContainerLR>
  );
};

export { Register };

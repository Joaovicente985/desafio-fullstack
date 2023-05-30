import { useForm } from "react-hook-form";
import { ContainerLR } from "../../components/containerLR";
import { FormContainer } from "../../components/formContainer";
import { registerSchema, tRegister } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import { LogoContainer } from "../../components/logoContainer";

const Register = () => {
  const { register, handleSubmit } = useForm<tRegister>({
    resolver: zodResolver(registerSchema),
  });

  const { registerUser } = useAuth();

  return (
    <ContainerLR>
      <LogoContainer>
        <h1>@Contacts</h1>
      </LogoContainer>
      <FormContainer>
        <h1>Cadastrar Usuário</h1>

        <form onSubmit={handleSubmit(registerUser)}>
          <label htmlFor="fullName">Nome Completo</label>
          <input
            type="text"
            id="fullName"
            placeholder="Nome Completo"
            {...register("fullName")}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email")}
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Senha"
            {...register("password")}
          />

          <label htmlFor="phoneNumber">Telefone</label>
          <input
            type="text"
            id="phoneNumber"
            placeholder="Telefone"
            {...register("phoneNumber")}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </FormContainer>
    </ContainerLR>
  );
};

export { Register };

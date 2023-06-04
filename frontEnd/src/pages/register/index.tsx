import { useForm } from "react-hook-form";
import { ContainerLR } from "../../components/containerLR";
import { FormContainer } from "../../components/formContainer";
import { registerSchema, tRegister } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import { LogoContainer } from "../../components/logoContainer";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "../../components/modalCreateForm/style";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tRegister>({
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
          {errors.fullName && (
            <ErrorMessage>{errors.fullName.message}</ErrorMessage>
          )}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Senha"
            {...register("password")}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}

          <label htmlFor="phoneNumber">Telefone</label>
          <input
            type="text"
            id="phoneNumber"
            placeholder="(xx) xxxxx-xxxx"
            {...register("phoneNumber")}
          />
          {errors.phoneNumber && (
            <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>
          )}

          <button type="submit">Cadastrar</button>
        </form>
      </FormContainer>
      <LogoContainer>
        <h2>Já está cadastrado?</h2>
        <button onClick={() => navigate("/")}>Voltar para o Login</button>
      </LogoContainer>
    </ContainerLR>
  );
};

export { Register };

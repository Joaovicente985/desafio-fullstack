import { useForm } from "react-hook-form";
import { ContainerLR } from "../../components/containerLR";
import { FormContainer } from "../../components/formContainer";
import { loginSchema, tLogin } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import { LogoContainer } from "../../components/logoContainer";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "../../components/modalCreateForm/style";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tLogin>({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();

  const { loginUser } = useAuth();

  return (
    <ContainerLR>
      <LogoContainer>
        <h1>@Contacts</h1>
      </LogoContainer>
      <FormContainer>
        <h1>Login</h1>

        <form onSubmit={handleSubmit(loginUser)}>
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

          <button type="submit">Entrar</button>
        </form>
      </FormContainer>
      <LogoContainer>
        <h2>Não está cadastrado?</h2>
        <button onClick={() => navigate("/register")}>Cadastrar</button>
      </LogoContainer>
    </ContainerLR>
  );
};

export { Login };

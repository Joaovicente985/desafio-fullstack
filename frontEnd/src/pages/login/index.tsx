import { useForm } from "react-hook-form";
import { ContainerLR } from "../../components/containerLR/containerLR";
import { FormContainer } from "../../components/formContainer/formContainer";
import { loginSchema, tLogin } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const { register, handleSubmit } = useForm<tLogin>({
    resolver: zodResolver(loginSchema),
  });

  const { loginUser } = useAuth();

  return (
    <ContainerLR>
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

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Senha"
            {...register("password")}
          />

          <button type="submit">Entrar</button>
        </form>
      </FormContainer>
    </ContainerLR>
  );
};

export { Login };

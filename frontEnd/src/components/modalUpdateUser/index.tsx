import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage, StyledModalForm } from "../modalCreateForm/style";
import { useAuth } from "../../hooks/useAuth";
import { registerSchema, tRegister } from "../../pages/register/validator";

const ModalUpdateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tRegister>({
    resolver: zodResolver(registerSchema),
  });

  const { user, updateUser } = useAuth();

  return (
    <StyledModalForm onSubmit={handleSubmit(updateUser)}>
      <label htmlFor="fullName">Nome Completo</label>
      <input
        type="text"
        id="fullName"
        placeholder="Nome Completo"
        defaultValue={user?.fullName}
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
        defaultValue={user?.email}
        {...register("email")}
      />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

      <label htmlFor="password">Senha</label>
      <input
        type="password"
        id="password"
        placeholder="Insira uma nova senha ou digite novamente"
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
        defaultValue={user?.phoneNumber}
        {...register("phoneNumber")}
      />
      {errors.phoneNumber && (
        <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>
      )}

      <button type="submit">Atualizar</button>
    </StyledModalForm>
  );
};

export { ModalUpdateUser };

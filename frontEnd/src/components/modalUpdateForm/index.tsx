import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContact } from "../../hooks/useContact";
import {
  contactSchemaUpdate,
  tContactUpdate,
} from "../modalCreateForm/validator";
import { ErrorMessage, StyledModalForm } from "../modalCreateForm/style";

const ModalUpdateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tContactUpdate>({
    resolver: zodResolver(contactSchemaUpdate),
  });

  const { updateContact } = useContact();

  return (
    <StyledModalForm onSubmit={handleSubmit(updateContact)}>
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

      <button type="submit">Atualizar</button>
    </StyledModalForm>
  );
};

export { ModalUpdateForm };

import { ErrorMessage, StyledModalForm } from "./style";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, tContact } from "./validator";
import { useContact } from "../../hooks/useContact";

const ModalCreateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tContact>({
    resolver: zodResolver(contactSchema),
  });

  const { createContact } = useContact();

  return (
    <StyledModalForm onSubmit={handleSubmit(createContact)}>
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

      <button type="submit">Cadastrar</button>
    </StyledModalForm>
  );
};

export { ModalCreateForm };

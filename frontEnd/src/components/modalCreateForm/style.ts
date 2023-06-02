import styled from "styled-components";

const StyledModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  text-shadow: 2px 0 black, -2px 0 black, 0 2px black, 0 -2px black,
    1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;

  label {
    color: var(--grey0);
    font-size: 2rem;
  }

  input {
    height: 4rem;
    border-radius: 1.5rem;
    background-color: var(--grey0);
    border: 3px solid black;
    padding: 0 1rem;

    ::placeholder {
      color: var(--darkGreen);
    }
  }

  button {
    height: 4rem;
    border-radius: 1.5rem;
    background-color: var(--grey0);
    border: 3px solid black;
    color: var(--darkGreen);
    font-size: 1.8rem;
    text-shadow: 2px 0 var(--grey0), -2px 0 var(--grey0), 0 2px var(--grey0),
      0 -2px var(--grey0), 1px 1px var(--grey0), -1px -1px var(--grey0),
      1px -1px var(--grey0), -1px 1px var(--grey0);

    :hover {
      opacity: 80%;
    }
  }
`;

const ErrorMessage = styled.p`
  margin-bottom: 5px;

  color: red;
  font-size: 2rem;
  font-weight: 700;
`;

export { StyledModalForm, ErrorMessage };

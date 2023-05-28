import styled from "styled-components";

const StyledFormContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  width: 500px;
  height: max-content;
  gap: 2rem;
  padding: 2rem;
  background-color: var(--darkGreen);
  border-radius: 1.5rem;
  border: 2px solid black;

  text-shadow: 2px 0 black, -2px 0 black, 0 2px black, 0 -2px black,
    1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;

  h1 {
    color: var(--grey0);
    font-size: 3rem;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    width: 100%;

    label {
      color: var(--grey0);
      font-size: 1.5rem;
    }

    input {
      height: 3rem;
      border-radius: 1.5rem;
      background-color: var(--grey0);
      border: 2px solid black;
      padding: 0 1rem;

      ::placeholder {
        color: var(--darkGreen);
      }
    }

    button {
      height: 3rem;
      border-radius: 1.5rem;
      background-color: var(--grey0);
      border: 2px solid black;
      color: var(--darkGreen);
      font-size: 1.5rem;
      text-shadow: 2px 0 var(--grey0), -2px 0 var(--grey0), 0 2px var(--grey0),
        0 -2px var(--grey0), 1px 1px var(--grey0), -1px -1px var(--grey0),
        1px -1px var(--grey0), -1px 1px var(--grey0);

      :hover {
        opacity: 80%;
      }
    }
  }
`;

export { StyledFormContainer };

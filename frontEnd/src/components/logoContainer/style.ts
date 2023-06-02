import styled from "styled-components";

const StyledLogoCont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: 500px;
  height: max-content;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--darkGreen);
  border-radius: 1.5rem;
  border: 3px solid black;

  text-shadow: 2px 0 black, -2px 0 black, 0 2px black, 0 -2px black,
    1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;

  h1 {
    color: var(--grey0);
    font-size: 2.5rem;
  }

  h2 {
    color: var(--grey0);
    font-size: 2rem;
  }

  button {
    height: 5rem;
    width: 100%;
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

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export { StyledLogoCont };

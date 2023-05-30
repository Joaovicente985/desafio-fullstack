import styled from "styled-components";

const StyledDashCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100vw;
  height: 100vh;
`;

const StyledDashHeader = styled.header`
  display: flex;
  width: 100%;
  height: max-content;
  justify-content: space-between;
  background-color: var(--darkGreen);
  padding: 2rem;
  border-bottom: 2px solid black;

  h1 {
    color: var(--grey0);
    font-size: 3rem;
    text-shadow: 2px 0 black, -2px 0 black, 0 2px black, 0 -2px black,
      1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;
  }

  section {
    display: flex;
    gap: 1rem;

    button {
      height: max-content;
      border-radius: 1.5rem;
      background-color: var(--grey0);
      padding: 0.5rem 1rem;
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

const StyledContactsCont = styled.div`
  display: flex;
  height: 85%;
  width: 98%;
  background-color: var(--darkGreen);
  border: 2px solid black;
  border-radius: 1rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export { StyledDashCont, StyledDashHeader, StyledContactsCont };

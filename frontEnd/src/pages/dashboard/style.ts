import styled from "styled-components";
import image from "../../assets/contacts.jpg";

const StyledDashCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  width: 100vw;
  height: 100vh;
  padding: 0.7rem 0;
`;

const StyledDashHeader = styled.header`
  display: flex;
  width: 98%;
  height: max-content;
  align-items: center;
  justify-content: space-between;
  background-color: var(--darkGreen);
  padding: 2rem;
  border: 2px solid black;
  border-radius: 1rem;

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
  height: 83%;
  width: 98%;
  padding: 3rem;
  gap: 2rem;
  background-color: var(--darkGreen);
  border: 2px solid black;
  border-radius: 1rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 30%;
    padding: 2rem;
    background: url(${image});
    background-size: cover;
    border: 2px solid black;
    border-radius: 1rem;

    h1 {
      color: var(--darkGreen);
      font-size: 3rem;
      text-shadow: 2px 0 var(--grey0), -2px 0 var(--grey0), 0 2px var(--grey0),
        0 -2px var(--grey0), 1px 1px var(--grey0), -1px -1px var(--grey0),
        1px -1px var(--grey0), -1px 1px var(--grey0);
    }
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 70%;
    gap: 1rem;

    h1 {
      color: var(--grey0);
      font-size: 3rem;
      text-shadow: 2px 0 black, -2px 0 black, 0 2px black, 0 -2px black,
        1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      height: 83%;
      width: 100%;
      background-color: var(--grey0);
      padding: 1.5rem;
      gap: 2rem;
      border: 2px solid black;
      border-radius: 1rem;
      overflow-y: scroll;

      h3 {
        overflow: hidden;
      }

      li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        list-style: none;
        width: 20%;
        min-width: 180px;
        max-width: 320px;
        height: 45%;
        padding: 1rem;
        background-color: var(--darkGreen);
        color: var(--grey0);
        border: 2px solid black;
        border-radius: 1rem;
        overflow: hidden;
        font-size: 2rem;
        text-shadow: 2px 0 black, -2px 0 black, 0 2px black, 0 -2px black,
          1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;

        span {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          button {
            display: flex;
            color: var(--grey0);
            background-color: yellowgreen;
            height: 30%;
            opacity: 90%;
            font-size: 1.6rem;
            text-shadow: 2px 0 black, -2px 0 black, 0 2px black, 0 -2px black,
              1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;

            :hover {
              opacity: 100%;
            }
          }
        }
      }
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--grey0);
      font-size: 3rem;
      height: 10%;
      border-radius: 1rem;
      border: 2px solid black;
      padding: 0.3rem;

      :hover {
        opacity: 90%;
      }
    }
  }
`;

export { StyledDashCont, StyledDashHeader, StyledContactsCont };

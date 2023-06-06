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
  border: 3px solid black;
  border-radius: 1rem;

  @media (max-width: 500px) {
    padding: 0.5rem;
  }

  h1 {
    color: var(--grey0);
    font-size: 3rem;
    text-shadow: 2px 0 black, -2px 0 black, 0 2px black, 0 -2px black,
      1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;
  }

  section {
    display: flex;
    gap: 1rem;

    @media (max-width: 500px) {
      gap: 0;
    }

    button {
      height: max-content;
      border-radius: 1.5rem;
      background-color: var(--grey0);
      padding: 1rem 1.5rem;
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
  }
`;

const StyledContactsCont = styled.div`
  display: flex;
  height: 89%;
  width: 98%;
  padding: 3rem;
  gap: 2rem;
  background-color: var(--darkGreen);
  border: 3px solid black;
  border-radius: 1rem;
  overflow-y: scroll;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1rem;
  }

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
    border: 3px solid black;
    border-radius: 1rem;

    @media (max-width: 700px) {
      width: 100%;
    }

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

    @media (max-width: 700px) {
      display: flex;
      width: 100%;
      justify-content: flex-start;
      height: max-content;
    }

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
      align-items: flex-start;
      height: 83%;
      width: 100%;
      background-color: var(--grey0);
      padding: 1.5rem;
      gap: 2rem;
      border: 3px solid black;
      border-radius: 1rem;
      overflow-y: auto;

      h1 {
        font-size: 3rem;
        color: black;
        text-shadow: 2px 0 var(--grey0), -2px 0 var(--grey0), 0 2px var(--grey0),
          0 -2px var(--grey0), 1px 1px var(--grey0), -1px -1px var, 1px -1px var,
          -1px 1px var;
      }

      li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        list-style: none;
        gap: 2rem;
        width: 180px;
        height: 250px;
        padding: 2rem;
        background-color: var(--darkGreen);
        color: var(--grey0);
        border: 3px solid black;
        border-radius: 1rem;
        font-size: 2rem;
        text-shadow: 2px 0 black, -2px 0 black, 0 2px black, 0 -2px black,
          1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;

        @media (max-width: 700px) {
          width: 48%;
        }

        @media (max-width: 500px) {
          width: 95%;
        }

        h3 {
          overflow: hidden;
        }

        span {
          display: flex;
          flex-direction: column;
          height: 50%;
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
      color: var(--darkGreen);
      font-size: 2rem;
      height: 10%;
      border-radius: 1rem;
      border: 3px solid black;
      padding: 0.3rem;
      text-shadow: 2px 0 var(--grey0), -2px 0 var(--grey0), 0 2px var(--grey0),
        0 -2px var(--grey0), 1px 1px var(--grey0), -1px -1px var(--grey0),
        1px -1px var(--grey0), -1px 1px var(--grey0);

      :hover {
        opacity: 80%;
      }

      @media (max-width: 700px) {
        display: flex;
        height: 70px;
      }
    }
  }
`;

const StyledModalContainer = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: rgba(107, 202, 60, 0.38);
  z-index: 999;

  div {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    min-width: 30rem;
    max-width: 90%;
    width: max-content;
    min-height: 30rem;
    max-height: 90vh;
    height: max-content;
    background-color: var(--darkGreen);
    border: 3px solid black;
    border-radius: 1rem;
    gap: 2rem;

    section {
      display: flex;
      width: 100%;
      align-items: flex-end;
      justify-content: flex-end;

      button {
        display: flex;
        color: var(--grey0);
        background-color: yellowgreen;
        height: 30%;
        opacity: 90%;
        font-size: 1.6rem;
        padding: 0.7rem 1.3rem;
        border-radius: 150%;
        border: 3px solid black;
        text-shadow: 2px 0 black, -2px 0 black, 0 2px black, 0 -2px black,
          1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;

        :hover {
          opacity: 100%;
        }
      }
      .alert {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        background-color: var(--alert);
        color: var(--grey0);
        border: 3px solid black;
        border-radius: 1rem;
        text-shadow: 2px 0 black, -2px 0 black, 0 2px black, 0 -2px black,
          1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;
      }

      .update {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        background-color: yellowgreen;
        color: var(--grey0);
        border: 3px solid black;
        border-radius: 1rem;
        text-shadow: 2px 0 black, -2px 0 black, 0 2px black, 0 -2px black,
          1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;
      }
    }

    span {
      display: flex;
      flex-direction: column;
      max-height: 25rem;
      gap: 1rem;
      background-color: var(--grey0);
      padding: 1rem;
      border-radius: 1rem;
      border: 3px solid black;
      overflow-y: scroll;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8rem 3rem;
        background-color: var(--darkGreen);
        border-radius: 150%;
        border: 3px solid black;
        color: var(--grey0);
        font-size: 2rem;
        opacity: 100%;
        text-shadow: 2px 0 black, -2px 0 black, 0 2px black, 0 -2px black,
          1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;
        :hover {
          background-color: var(--alert);
        }
      }
    }

    h1 {
      color: yellowgreen;
      font-size: 2rem;
      text-shadow: 2px 0 black, -2px 0 black, 0 2px black, 0 -2px black,
        1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;
    }

    h3 {
      font-size: 2rem;
      text-shadow: 2px 0 yellowgreen, -2px 0 yellowgreen, 0 2px yellowgreen,
        0 -2px yellowgreen, 1px 1px yellowgreen, -1px -1px yellowgreen,
        1px -1px yellowgreen, -1px 1px yellowgreen;
    }
  }
`;

export {
  StyledDashCont,
  StyledDashHeader,
  StyledContactsCont,
  StyledModalContainer,
};

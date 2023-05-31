import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --darkPurple: #301934;

        --darkGreen: #023020;

        --grey0: #DEE0FB;

        font-size: 60%;
    }

    @media (min-width: 700px) {
        :root {
            font-size: 62.5%;
        }
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body,html {
        width: 100%;
        height: 100vh;
    }

    button {
        cursor: pointer;
    }
`;

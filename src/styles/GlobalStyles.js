import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
       
    }

    body {
        background: linear-gradient(to bottom, #E1F5FE, #F5F5F5);
        color:${({ theme }) => theme.COLORS.COLOR_BLUE};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    transition: transform 0.3s ease-out;
    font-family: 'Roboto', sans-serif;
    }
    h1, h2, h3, h4, h5, h6 {
  font-family: 'Poppins', sans-serif;
  
}

    a {
        text-decoration: none;
        color: inherit;
        color:${({ theme }) => theme.COLORS.COLOR_BLUE};
    }
`;

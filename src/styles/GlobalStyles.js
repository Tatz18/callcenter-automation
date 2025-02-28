import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif; /* Modern, sans-serif font like the Dribbble shot */
    background: #F8F9FC; /* Light background from Dribbble */
    color: #333;
  }
  h1, h2, h3 {
    margin: 0;
    font-weight: 600;
  }
  button, select {
    font-family: 'Inter', sans-serif;
    border-radius: 12px; /* Rounded corners from Dribbble */
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
`;
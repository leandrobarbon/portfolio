import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   html{
      font-size: 62.5%;
      background: #2A0944;
      scroll-behavior: smooth;
      font-family: 'Roboto', sans-serif;
      padding: 0 120px;
      max-width: 1920px;
      margin: 0 auto;
   }

   a {
      text-decoration: none;
   }

   li{
      list-style: none;
   } 

   button {
      cursor: pointer;
   }
`;
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    color:#fff;
    background-color: #000;
    font-family: Trebuchet MS, Verdana, Arial, Helvetica, sans-serif
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, li, ol{
    list-style: none;
    padding:0;
    margin:0;
  }

  main{
    display: flex;
    height: 100vh;
    align-items: center;
    padding:15px;
  }

  .content{
    margin: 0 auto;
    max-width: 800px;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 3vw;
    border: 3px solid #fff;
    border-radius: 5px;

    button{
      max-width: 130px;
      width: 100%;
      margin:0 auto;
      height: 30px;
      border: 1px solid #fff;
      font-weight: 600;
      background-color: #000;
      color: #fff;
      border-radius: 5px;
      cursor: pointer;
    }
  }


`;

export default GlobalStyle;

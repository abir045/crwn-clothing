import { createGlobalStyle } from 'styled-components';

 export const GlobalStyle = createGlobalStyle`

body {
  font-family: "Open Sans Condensed";
  margin:0;
  background: #79a9bc;
  opacity:0.9;
  padding: 0px 0px 0px 0px;
  //transparent;
  //#79a9bc;
    /* fallback for old browsers */
  
  /* background: -webkit-linear-gradient(to right, #2ebf91, #8360c3);  */
   /* Chrome 10-25, Safari 5.1-6 */
  /* background: linear-gradient(to right, #2ebf91, #8360c3); */
   /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
   
 


  @media screen and (max-width: 800px){
      padding: 0px;
  }
}

a {
  text-decoration: none;
  color: black;
  font-weight: 32px;
}

* {
  box-sizing: border-box;
}



`;




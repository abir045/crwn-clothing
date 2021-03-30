import styled,{ css }  from 'styled-components';

import {Link} from 'react-router-dom';


const OptionsContainerStyles = css`

padding: 10px 15px;
cursor: pointer;

 /* @media screen and (max-width: 800px){
  color:white;
  
  } */

`;



export const HeaderContainer = styled.div`

position:absolute;
 height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 25px; */
  z-index: 9;
  top:0;



   @media screen and (max-width: 800px){
    height: 60px;  
    padding: 10px;
    margin-bottom: 20px;
  
  }

`

export const LogoContainer = styled(Link)`

 height: 100%;
 width: 130px;
 padding: 15px;

  @media screen and (max-width: 800px){
     
      padding:0;
      width:50%;
  }

`

export const OptionsContainer = styled.div`

    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    //padding:10px 10px 10px 10px;
     text-transform:uppercase;
   

     @media screen and (max-width: 800px){
     width: 100%;
     text-transform:uppercase;
   
  }


`

export const ShopContainer = styled.div`

    width: 100px;
    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 10px;
    color:white;
 
  

     @media screen and (max-width: 800px){
     width: 80%;
     
     }


`

export const OptionLink = styled(Link)`

${OptionsContainerStyles}

`;

export const OptionDiv = styled.div`

${OptionsContainerStyles}

`;




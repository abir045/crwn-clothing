import styled,{ css }  from 'styled-components';

import {Link} from 'react-router-dom';


const OptionsContainerStyles = css`

padding: 10px 15px;
cursor: pointer;

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
 width: 70px;
 padding: 25px;

  @media screen and (max-width: 800px){
      width: 50px;
      padding: 0;
  }

`

export const OptionsContainer = styled.div`

    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

     @media screen and (max-width: 800px){
     width: 80%;
  }


`

export const ShopContainer = styled.div`

    width: 100px;
    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 10px;

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




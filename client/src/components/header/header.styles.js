import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

const OptionsContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;

  /* @media screen and (max-width: 800px){
  color:white;
  
  } */
`;

export const HeaderContainer = styled.div`
  position: sticky;
  height: 70px;
  width: auto;
  display: flex;
  justify-content: space-between;
  background: #dbd7d7;

  z-index: 9;
  top: 0;

  @media screen and (max-width: 800px) {
    //height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100px;
  width: 110px;
  padding: 10px 10px 10px 10px;
  position: absolute;
  top: 1.3rem;
  left: 50%;
  @media screen and (max-width: 800px) {
    padding: 0;
    width: 70px;
    left: 46%;
    //width:100px;
    /* width:60%; */
  }
`;

export const OptionsContainer = styled.div`
  width: 80px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  //padding:10px 10px 10px 10px;
  text-transform: uppercase;
  position: sticky;
  @media screen and (max-width: 800px) {
    width: 50%;
    text-transform: uppercase;
  }
`;

export const ShopContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 10px 10px;
  //display: flex;
  //align-items: center;
  //justify-content: flex-start;

  //color: white;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  ${OptionsContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionsContainerStyles}
`;

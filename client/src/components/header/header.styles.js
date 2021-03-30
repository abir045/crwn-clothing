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
  width: 100%;
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
  position: sticky;
  left: 50%;
  @media screen and (max-width: 800px) {
    padding: 0;
    width: 70px;
    left: 40%;
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
  width: 80px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 10px;
  color: white;
  left: 20%;

  @media screen and (max-width: 800px) {
    width: 70%;
  }
`;

export const OptionLink = styled(Link)`
  ${OptionsContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionsContainerStyles}
`;

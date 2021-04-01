import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ed3b3b;
  height: 100vh;
  text-align: center;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  transform: translateX(-100%);
  transform: translateX(-100%);
  /* transform: translateY(-10%);
  transform: translateY(-10%);
  transform: translateY(-10%); */
  //transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transform: ${({ open }) =>
    open ? "translateX(0) translateY(10%)" : "translateY(0)translateX(-100%)"};
  z-index: 9;

  @media screen and (max-width: 800px) {
    width: 100%;
  }

  a {
    font-size: 1.2rem;
    //text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #dbd7d7;
    //text-decoration: none;
    transition: color 0.1s ease-in-out;
    //linear;

    @media screen and (max-width: 800px) {
      font-size: 1rem;
      text-align: center;
    }

    &:hover {
      color: black;
    }
  }
`;

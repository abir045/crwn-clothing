import styled from "styled-components";
import { BackgroundImage } from "../collection-item/collection-item.styles";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  position: absolute;
  top: 1.3rem;
  right: 2rem;
  width: 45px;
  height: 45px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShopIcon = styled(ShoppingIcon)`
  width: 24px;
  height: 24px;
`;

export const ItemCountContainer = styled.div`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;

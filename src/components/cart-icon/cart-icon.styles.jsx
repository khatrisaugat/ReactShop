import styled from "styled-components";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
`;

export const ShoppingIconContainer = styled(ShoppingIcon)`
  width: 35px;
  height: 35px;
  fill: #fff;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  bottom: 5px;
  border-radius: 50%;
`;

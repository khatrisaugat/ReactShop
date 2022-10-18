import styled, { css } from "styled-components";

const attributeCss = css`
  width: 23%;
  font-weight: bold;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const NameContainer = styled.span`
  ${attributeCss}
`;

export const QuantityContainer = styled.span`
  ${attributeCss}
  display: flex;
  justify-items: center;
  align-items: center;
  padding-left: 20px;
`;

export const ArrowContainer = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: 2px solid #6c757d;
  border-radius: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #6c757d;
    color: #34b3f1;
  }
`;

export const ValueContainer = styled.span`
  margin: 0 10px;
`;

export const PriceContainer = styled.span`
  ${attributeCss}
`;

export const RemoveButtonContainer = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: 2px solid #6c757d;
  border-radius: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  &:hover {
    background-color: #6c757d;
    color: #d61c4e;
  }
`;

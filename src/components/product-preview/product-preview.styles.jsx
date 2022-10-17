import styled from "styled-components";

export const ProductPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  width: 22%;
`;

export const ProductImageContainer = styled.div`
  width: 100%;
  height: 90%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  button {
    display: none;
  }
  &:hover {
    // filter: brightness(150%);
    opacity: 0.85;
    button {
      display: block;
      cursor: pointer;
      opacity: 1;
    }
  }
`;

export const ProductInfoContainer = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
  font-size: larger;
`;

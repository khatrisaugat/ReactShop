import styled from "styled-components";

export const MenuItemsContainer = styled.div`
  min-width: 30%;
  height: ${(props) => (props.size == "large" ? "380px" : "240px")};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    & .content {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const BackgroundImageContainer = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

export const ContentTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
  text-transform: uppercase;
`;

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;

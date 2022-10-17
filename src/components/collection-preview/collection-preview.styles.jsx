import styled from "styled-components";
import { Link } from "react-router-dom";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  padding: 20px 80px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TitleContainer = styled.h1`
  text-align: center;
  margin: auto;
  font-size: 28px;
`;

export const ViewAllContainer = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: larger;
  font-weight: bold;
  border-bottom: #000 1px solid;
  transition: all 0.1s ease-in-out;
  &:hover {
    color: #074a6c;
    border: none;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./menu-items.style.css";
import {
  MenuItemsContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./menu-items.styles";

function MenuItems({ title, imageUrl, size, linkUrl }) {
  const navigate = useNavigate();

  return (
    <MenuItemsContainer size={size} onClick={() => navigate(linkUrl)}>
      <BackgroundImageContainer
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></BackgroundImageContainer>
      <ContentContainer>
        <ContentTitle>{title}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemsContainer>
  );
}

export default MenuItems;

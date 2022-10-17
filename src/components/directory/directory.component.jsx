import React from "react";
import MenuItems from "./../menu-items/menu-items.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectoryItems } from "../../redux/directory/directory.selectors";
import { DirectoryMenuContainer } from "./directory.styles";

export const DirectoryMenu = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
        <MenuItems
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
      {/* <MenuItems title="HATS" />
        <MenuItems title="SNEAKERS" />
        <MenuItems title="JACKETS" />
        <MenuItems title="WOMENS" />
        <MenuItems title="MENS" /> */}
    </DirectoryMenuContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selectDirectoryItems,
});

export default connect(mapStateToProps)(DirectoryMenu);

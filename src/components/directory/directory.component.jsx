import React, { Component } from "react";
import MenuItems from "./../menu-items/menu-items.component";
import "./directory.style.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectoryItems } from "../../redux/directory/directory.selectors";

export const DirectoryMenu = ({ sections }) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     sections: [
  //       {
  //         title: "hats",
  //         imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  //         id: 1,
  //       },
  //       {
  //         title: "jackets",
  //         imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  //         id: 2,
  //       },
  //       {
  //         title: "sneakers",
  //         imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  //         id: 3,
  //       },
  //       {
  //         title: "womens",
  //         imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  //         size: "large",
  //         id: 4,
  //       },
  //       {
  //         title: "mens",
  //         imageUrl:
  //           "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //         size: "large",
  //         id: 5,
  //       },
  //     ],
  //   };
  // }
  return (
    <div className="directory-menu">
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
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selectDirectoryItems,
});

export default connect(mapStateToProps)(DirectoryMenu);

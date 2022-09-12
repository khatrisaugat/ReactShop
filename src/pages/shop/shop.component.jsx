import React from "react";
import { connect } from "react-redux";
import { selectShopCollections } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import "./shop.style.css";
import { Link } from "react-router-dom";
export const Shop = ({ collections }) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     collections: SHOP_DATA,
  //   };
  // }

  return (
    <div className="shop">
      <h1 className="title">Collections</h1>
      {Object.keys(collections).map((keys) => (
        <CollectionPreview
          key={collections[keys].id}
          {...collections[keys]}
          noOfProducts={4}
          linkExists
        />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});
export default connect(mapStateToProps)(Shop);

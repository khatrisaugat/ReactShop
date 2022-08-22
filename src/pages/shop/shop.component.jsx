import React, { Component } from "react";
import SHOP_DATA from "./shopData";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import "./shop.style.css";
export class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    return (
      <div className="shop">
        <h1 className="title">Collections</h1>
        {this.state.collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;

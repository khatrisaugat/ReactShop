import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { ShopPageContainer, ShopPageTitle } from "./shop.styles";
import { WithSpinner } from "../../components/with-spinner/with-spinner.component";
const CollectionPreviewWithSpinner = WithSpinner(CollectionPreview);
class Shop extends Component {
  render() {
    const { collections, isLoading } = this.props;
    console.log(collections);
    return (
      <ShopPageContainer>
        <ShopPageTitle>SHOP</ShopPageTitle>
        {collections.map((collection) => (
          <CollectionPreviewWithSpinner
            isLoading={isLoading}
            key={collection.id}
            {...collection}
            noOfProducts={4}
            linkExists
          />
        ))}
      </ShopPageContainer>
    );
  }
}
export default Shop;

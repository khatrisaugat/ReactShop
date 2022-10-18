import React, { Component } from "react";
import { connect } from "react-redux";
import { selectShopCollections } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { ShopPageContainer, ShopPageTitle } from "./shop.styles";
import { convertedCollectionsData } from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
class Shop extends Component {
  unSubcribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollection } = this.props;

    this.unSubcribeFromSnapshot = convertedCollectionsData().then(
      (collections) => {
        // this.setState({ collections });
        updateCollection(collections);
      }
    );
  }
  render() {
    const { collections } = this.props;
    console.log(collections);
    return (
      <ShopPageContainer>
        <ShopPageTitle>SHOP</ShopPageTitle>
        {collections.map((collection) => (
          <CollectionPreview
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

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});
const mapDispatchToProps = (dispatch) => ({
  updateCollection: (collections) => dispatch(updateCollections(collections)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Shop);

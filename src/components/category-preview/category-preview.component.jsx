import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { selectShopCollections } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "./../collection-preview/collection-preview.component";

function CategoryPreview({ collections }) {
  console.log(collections);
  const params = useParams();
  return (
    <div className="category-preview">
      {collections
        .filter((collections) => collections.routeName === params.collectionId)
        .map((collection) => (
          <CollectionPreview key={collection.id} {...collection} />
        ))}
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});
export default connect(mapStateToProps)(CategoryPreview);

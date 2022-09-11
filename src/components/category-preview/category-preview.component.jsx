import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { selectShopCollections } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "./../collection-preview/collection-preview.component";

function CategoryPreview({ collection }) {
  //   console.log(collection);
  const params = useParams();
  return (
    <div className="category-preview">
      {collection
        .filter((collection) => collection.routeName === params.collectionId)
        .map((collection) => (
          <CollectionPreview key={collection.id} {...collection} />
        ))}
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  collection: selectShopCollections,
});
export default connect(mapStateToProps)(CategoryPreview);

import React from "react";
import ProductPreview from "../product-preview/product-preview.component";
// import "./collection-preview.css";
// import { Link } from "react-router-dom";
import {
  CollectionPreviewContainer,
  HeadingContainer,
  TitleContainer,
  ViewAllContainer,
  PreviewContainer,
} from "./collection-preview.styles";

function CollectionPreview({ title, items, noOfProducts, linkExists }) {
  return (
    <CollectionPreviewContainer>
      <HeadingContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        {linkExists && (
          <ViewAllContainer to={`${title.toLowerCase()}`}>
            View More
          </ViewAllContainer>
        )}
      </HeadingContainer>
      <PreviewContainer>
        {noOfProducts
          ? items
              .filter((item, index) => index < noOfProducts)
              .map((item) => <ProductPreview key={item.id} item={item} />)
          : items.map((item) => <ProductPreview key={item.id} item={item} />)}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
}
export default CollectionPreview;

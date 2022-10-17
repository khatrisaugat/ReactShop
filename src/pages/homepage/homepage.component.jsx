import React from "react";
import DirectoryMenu from "../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.styles";

function Homepage() {
  return (
    <HomePageContainer>
      <DirectoryMenu />
    </HomePageContainer>
  );
}

export default Homepage;

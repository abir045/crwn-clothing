import React from "react";

import Directory from "../../components/directory/directory";

import { HomePageContainer } from "./homepage.styles";

import ScrollComponent from "../../components/Featured-Products/featured";

const HomePage = () => (
  <HomePageContainer>
    <ScrollComponent />
    {/* <Directory  /> */}
  </HomePageContainer>
);

export default HomePage;

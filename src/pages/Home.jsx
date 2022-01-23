import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Slider from "../components/Slider";
import Items from "../components/Items";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const MainContainer = styled.div`
  background-color: whitesmoke;
`;

const Home = () => {
  return (
    <div>
      <MainContainer>
        {/* <UpperAnnouncement /> */}
        <Navbar />
        {/* <LowerAnnouncement /> */}
        <Slider />
        {/* <Brands /> */}
        <Items />
        <Newsletter />
        <Footer />
      </MainContainer>
    </div>
  );
};

export default Home;

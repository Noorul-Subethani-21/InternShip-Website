import React from "react";
import Navbar1 from "./Components/Navbar1/Navbar1";
import Navbar2 from "./Components/Navbar2/Navbar2";
import Slide from "./Components/Slide/Slide";
import Box from "./Components/Boxes/Box";
import Content from "./Components/Content/Content";
import IconContainer from "./Components/IconContainer/IconContainer";
import Cards from "./Components/Cards/Cards";
import Service from "./Components/Services/Services";
import Forms from "./Components/Forms/Forms";
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <Slide />
      <Box />
      <Content />
      <IconContainer />
      <Cards />
      <Service />
      <Forms />
      <Footer />
    </div>
  );
};

export default App;

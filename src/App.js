import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import Section from "./components/Section"
import models from "./images/model-s.jpg"
import modely from "./images/model-y.jpg"
import model3 from "./images/model-3.jpg"
import modelx from "./images/model-x.jpg"
import panel from "./images/solar-panel.jpg"
import roof from "./images/solar-roof.jpg"
import acc from "./images/accessories.jpg"
function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Home/> */}
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg={models}
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg={modely}
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg={model3}
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg={modelx}
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg={panel}
        leftBtnText="Order now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar for New Roofs"
        description="Order Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg={roof}
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
         <Section
        title="Accessories"
        description=""
        backgroundImg={acc}
        leftBtnText="Shop Now"
      />
    </div>
  );
}

export default App;

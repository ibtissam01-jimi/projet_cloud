import React, { Component } from "react";


import Header from './components/Header/header';
import Content from './components/Content/content';
import Footer from './components/Footer/footer';






class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div style={StyleCard.container}>
          <Content />
          <Content />
          <Content />
        </div>
        
        <Footer />
      </>
    );
  }
}
const StyleCard = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    gap: "20px",
  },
};
export default App;



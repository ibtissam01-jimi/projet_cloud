import React, { Component } from "react";

import Navigation from './components/Navigation/navigation';
import Header from './components/Header/header';
import Profile from './components/content/proﬁl';
import Footer from './components/Footer/footer';






class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Header />
        <Profile />
        <Footer />
      </>
    );
  }
}

export default App;



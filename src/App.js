import React, { Component } from 'react';
// import { Column, Row } from 'react-foundation';
import "./App.css"

import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "home"
    }
    this.renderView = this.renderView.bind(this);
  }

  renderView = (newView) => {
    this.setState({currentView: newView})
  }

  render() {
    const { currentView } = this.state;
    let view;

    if (currentView === "home") {
      view = <div><Home /><Contact /></div>;
    } else if (currentView === "about") {
      view = <About />;
    } else if (currentView === "portfolio") {
      view = <Portfolio />;
    }

    return (
      <div className="App">
        { view }
        <Nav renderView={this.renderView}/>
      </div>
    );
  }
}

export default App;

import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
 } from 'reactstrap';

 import { BrowserRouter as Router, Route, Link } from "react-router-dom";

 import About from '../pages/About';
 import LandingPage from '../pages/LandingPage';
 import CityPage from '../pages/CityPage';
 import MyWeatherPage from '../pages/MyWeatherPage';

  
export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar color="dark" light expand="md">
            <Link className="brand" to="/">Weather Buddy</Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/cities">Cities</Link>
                </NavItem>
                <NavItem>
                  <Link to="/myweather/">My Wather</Link>
                </NavItem>
                <NavItem>
                  <Link to="/about/">About</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>

          <Route path="/" exact component={LandingPage} />
          <Route path="/cities" exact component={CityPage} />
          <Route path="/myweather" component={MyWeatherPage} />
          <Route path="/about/" component={About} />
        </Router>

      </div>
    );
  }
}
import React, {Component} from 'react';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js';

class BaseLayout extends Component {
  render() {
    return (
        <div className="container-fluid">
        <Header/>
        <div className="row justify-content-center">
        {this.props.children}
      </div>
      <Footer/>
    </div>
        );
    }
}

export default BaseLayout;

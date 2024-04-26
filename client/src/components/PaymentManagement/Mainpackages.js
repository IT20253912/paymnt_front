import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Mainpackages extends Component {
  render() {
    return (
      <div>
        <div>Mainpackages</div>
        <div>
          <Link to="/weddingpackages"><button>Wedding</button></Link>
          <Link to="/partypackages"><button>Party</button></Link>
          <Link to="/graduationpackages"><button>Graduation</button></Link>
          <Link to="/otherpackages"><button>Other</button></Link>
        </div>
      </div>
    );
  }
}

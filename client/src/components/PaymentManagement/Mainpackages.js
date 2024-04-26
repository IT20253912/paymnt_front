import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Mainpackages extends Component {
  render() {
    // Dummy data for packages (you can replace this with your actual data)
    const packages = [
      { id: 1, name: "Wedding", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShroG9xMbPAE0GyVf7m_VdX10Ydhebr8_iBuzudsLUuQ&s", link: "/weddingpackages" },
      { id: 2, name: "Party", image: "https://example.com/party.jpg", link: "/partypackages" },
      { id: 3, name: "Graduation", image: "https://example.com/graduation.jpg", link: "/graduationpackages" },
      { id: 4, name: "Other", image: "https://example.com/other.jpg", link: "/otherpackages" }
    ];

    return (
      <div>
        <div>Mainpackages</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {packages.map(pkg => (
            <div key={pkg.id} style={{ width: '23%', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden' }}>
              <img src={pkg.image} alt={pkg.name} style={{ width: '100%', height: 'auto', borderRadius: '10px 10px 0 0' }} />
              <div style={{ padding: '10px' }}>
                <h2>{pkg.name}</h2>
                <Link to={pkg.link}><button style={{ padding: '5px 10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>View Packages</button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

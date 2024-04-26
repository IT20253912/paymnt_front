import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PackageList() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    // Fetch packages from backend when component mounts
    axios.get('http://localhost:4001/api/eventPackage/package')
      .then(response => {
        // Filter packages with packageName equal to "Wedding"
        const weddingPackages = response.data.filter(pkg => pkg.packageName === "party");
        setPackages(weddingPackages);
      })
      .catch(error => {
        console.error('Error fetching packages:', error);
      });
  }, []);

  return (
    <>
    <h1 >Party Packages</h1>
    <br/>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '20px' }}>
      {packages.map(pkg => (
        <div key={pkg._id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '10px', overflow: 'hidden' }}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBJQv8NaA377A1CKPU5qN-44CWXsSImALhaa6-27hUOw&s' alt={pkg.packageName} style={{ width: '100%', height: 'auto', marginBottom: '10px', borderRadius: '10px 10px 0 0' }} />
          <div style={{ backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '0 0 10px 10px' }}>
            <h2>{pkg.packageName}</h2>
            <p>No of Photographers: {pkg.No_of_photographers}</p>
            <p>No of Videographers: {pkg.No_of_videographers}</p>
            <p>No of photos: {pkg.No_of_photos}</p>
            <div style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '5px', display: 'inline-block',backgroundColor:'#b8f2d4' }}>
              <p style={{ fontWeight: 'bold', marginLeft:'5px',marginRight:'5px',marginBottom:'5px',marginTop:'5px' }}>Price: {pkg.Price}</p>
            </div>
            {/* Render other package details as needed */}
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default PackageList;

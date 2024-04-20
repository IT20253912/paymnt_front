import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PackageList() {
  const [packages, setPackages] = useState([]);
  const [updatedPackage, setUpdatedPackage] = useState({
    packageID: '',
    packageName: '',
    packageType: '',
    Description: '',
    No_of_photographers: 0,
    No_of_videographers: 0,
    No_of_photos: 0,
    Price: 0
  });

  useEffect(() => {
    // Fetch packages from backend when component mounts
    axios.get('http://localhost:4001/api/eventPackage/package')
      .then(response => {
        setPackages(response.data);
      })
      .catch(error => {
        console.error('Error fetching packages:', error);
      });
  }, []);

  const handleDelete = async (packageID) => {
    try {
      // Send delete request to backend
      await axios.delete(`http://localhost:4001/api/eventPackage/package/${packageID}`);
      
      // Remove the deleted package from the state
      setPackages(packages.filter(pkg => pkg.packageID !== packageID));
    } catch (error) {
      console.error('Error deleting package:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      // Send update request to backend
      await axios.put(`http://localhost:4001/api/eventPackage/package/${updatedPackage.packageID}`, updatedPackage);
      
      // Update the state to reflect the changes
      setPackages(packages.map(pkg => pkg.packageID === updatedPackage.packageID ? updatedPackage : pkg));
      
      // Reset the form
      setUpdatedPackage({
        packageID: '',
        packageName: '',
        packageType: '',
        Description: '',
        No_of_photographers: 0,
        No_of_videographers: 0,
        No_of_photos: 0,
        Price: 0
      });
    } catch (error) {
      console.error('Error updating package:', error);
    }
  };

  const handleChange = (e) => {
    setUpdatedPackage({ ...updatedPackage, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Package List</h1>
      <table>
        <thead>
          <tr>
            <th>Package ID</th>
            <th>Package Name</th>
            <th>Package Type</th>
            <th>Description</th>
            <th>No. of Photographers</th>
            <th>No. of Videographers</th>
            <th>No. of Photos</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {packages.map(pkg => (
            <tr key={pkg._id}>
              <td>{pkg.packageID}</td>
              <td>{pkg.packageName}</td>
              <td>{pkg.packageType}</td>
              <td>{pkg.Description}</td>
              <td>{pkg.No_of_photographers}</td>
              <td>{pkg.No_of_videographers}</td>
              <td>{pkg.No_of_photos}</td>
              <td>${pkg.Price}</td>
              <td>
                <button onClick={() => handleDelete(pkg.packageID)}>Delete</button>
                <button onClick={() => setUpdatedPackage(pkg)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Update Package</h2>
      <div>
        <label>Package ID:</label>
        <input type="text" name="packageID" value={updatedPackage.packageID} onChange={handleChange} disabled />
      </div>
      <div>
        <label>Package Name:</label>
        <input type="text" name="packageName" value={updatedPackage.packageName} onChange={handleChange} />
      </div>
      <div>
        <label>Package Type:</label>
        <input type="text" name="packageType" value={updatedPackage.packageType} onChange={handleChange} />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" name="Description" value={updatedPackage.Description} onChange={handleChange} />
      </div>
      <div>
        <label>No. of Photographers:</label>
        <input type="number" name="No_of_photographers" value={updatedPackage.No_of_photographers} onChange={handleChange} />
      </div>
      <div>
        <label>No. of Videographers:</label>
        <input type="number" name="No_of_videographers" value={updatedPackage.No_of_videographers} onChange={handleChange} />
      </div>
      <div>
        <label>No. of Photos:</label>
        <input type="number" name="No_of_photos" value={updatedPackage.No_of_photos} onChange={handleChange} />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" name="Price" value={updatedPackage.Price} onChange={handleChange} />
      </div>
      <button onClick={handleUpdate}>Update Package</button>
    </div>
  );
}

export default PackageList;

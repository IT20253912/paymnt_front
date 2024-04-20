// PaymentList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentList = () => {
  const [uniquePayments, setUniquePayments] = useState([]);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const response = await axios.get('http://localhost:4001/api/pay/payment');
      const uniquePaymentIDs = [...new Set(response.data.map(payment => payment.paymentID))];
      const uniquePaymentList = response.data.filter(payment => uniquePaymentIDs.includes(payment.paymentID));
      setUniquePayments(uniquePaymentList);
    } catch (error) {
      console.error('Error fetching payments:', error);
    }
  };

  const handleDelete = async (paymentID) => {
    try {
      await axios.delete(`http://localhost:4001/api/pay/payment/${paymentID}`);
      fetchPayments(); // Refresh payments after deletion
    } catch (error) {
      console.error('Error deleting payment:', error);
    }
  };

  return (
    <div>
      <h2>All Payments</h2>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Payment ID</th>
            <th>Package ID</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {uniquePayments.map((payment) => (
            <tr key={payment.paymentID}>
              <td>{payment.UserID}</td>
              <td>{payment.paymentID}</td>
              <td>{payment.packageID}</td>
              <td>{payment.Amount}</td>
              <td>
                <button onClick={() => handleDelete(payment.paymentID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentList;

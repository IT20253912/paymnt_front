// PaymentDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentDetails = ({ paymentID, userID }) => {
  const [payment, setPayment] = useState(null);

  useEffect(() => {
    const fetchPaymentDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4001/api/pay/payment/${paymentID}/${userID}`);
        setPayment(response.data);
      } catch (error) {
        console.error('Error fetching payment details:', error);
      }
    };

    fetchPaymentDetails();
  }, [paymentID, userID]);

  return (
    <div>
      <h2>Payment Details</h2>
      {payment ? (
        <div>
          <p><strong>Payment ID:</strong> {payment.paymentID}</p>
          <p><strong>User ID:</strong> {payment.UserID}</p>
          <p><strong>User ID:</strong> {payment.packageID}</p>
          <p><strong>User ID:</strong> {payment.Amount}</p>
          {/* Other payment details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PaymentDetails;

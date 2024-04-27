import React, { Component } from 'react';

export default class Refund extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentDetails: null,
      comment: ''
    };
  }

  componentDidMount() {
    // Fetch payment details from the endpoint
    fetch('http://localhost:4001/api/pay/payment/u004')
      .then(response => response.json())
      .then(data => {
        this.setState({ paymentDetails: data.Payment }); // Extracting Payment object from the response
      })
      .catch(error => console.error('Error fetching payment details:', error));
  }

  handleCommentChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleRefund = () => {
    // Implement refund logic here, using this.state.comment and this.state.paymentDetails
    // For simplicity, let's just log the refund comment and payment details to console
    console.log('Refund Comment:', this.state.comment);
    console.log('Payment Details:', this.state.paymentDetails);
    // You can then proceed with your refund logic (e.g., sending refund request to the server)
  };

  render() {
    const { paymentDetails, comment } = this.state;

    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
        {paymentDetails ? (
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Payment Details</h2>
            <p style={{ marginBottom: '10px' }}>Payment ID: {paymentDetails.paymentID}</p>
            <p style={{ marginBottom: '10px' }}>User ID: {paymentDetails.UserID}</p>
            <p style={{ marginBottom: '10px' }}>Package ID: {paymentDetails.packageID}</p>
            <p style={{ marginBottom: '10px' }}>Date: {paymentDetails.Date}</p>
            <p style={{ marginBottom: '10px' }}>Invoice Number: {paymentDetails.InvoiceNumber}</p>
            <p style={{ marginBottom: '10px' }}>Amount: {paymentDetails.Amount}</p>
            <p style={{ marginBottom: '10px' }}>Advance or Full: {paymentDetails.Advance_or_Full}</p>
            <p style={{ marginBottom: '10px' }}>Payment Method: {paymentDetails.PaymentMethod}</p>
            {/* Add more payment details as needed */}
            <div>
              <label htmlFor="comment" style={{ display: 'block', marginBottom: '5px' }}>Comment:</label>
              <input
                type="text"
                id="comment"
                value={comment}
                onChange={this.handleCommentChange}
                style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
              />
            </div>
            <button
              onClick={this.handleRefund}
              style={{ display: 'block', marginTop: '15px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Refund
            </button>
          </div>
        ) : (
          <p>Loading payment details...</p>
        )}
      </div>
    );
  }
}

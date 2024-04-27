import React, { Component } from 'react';

class Refundview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refunds: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    // Fetch all refund details from the endpoint
    fetch('http://localhost:4001/api/refund/refund')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch refund details');
        }
        return response.json();
      })
      .then(data => {
        this.setState({ refunds: data, loading: false });
      })
      .catch(error => {
        console.error('Error fetching refund details:', error);
        this.setState({ error: 'Failed to fetch refund details', loading: false });
      });
  }

  render() {
    const { refunds, loading, error } = this.state;

    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h2>All Refund Details</h2>
        {loading ? (
          <p>Loading refund details...</p>
        ) : error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : (
          <div>
            {refunds.map(refund => (
              <div key={refund._id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
                <p><strong>Payment ID:</strong> {refund.paymentID}</p>
                <p><strong>User ID:</strong> {refund.UserID}</p>
                <p><strong>Package ID:</strong> {refund.packageID}</p>
                <p><strong>Date:</strong> {refund.Date}</p>
                <p><strong>Invoice Number:</strong> {refund.InvoiceNumber}</p>
                <p><strong>Amount:</strong> {refund.Amount}</p>
                <p><strong>Advance or Full:</strong> {refund.Advance_or_Full}</p>
                <p><strong>Payment Method:</strong> {refund.PaymentMethod}</p>
                <p><strong>Comment:</strong> {refund.Comment}</p>
                {/* Add more refund details as needed */}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Refundview;

import React, { useState, useEffect } from "react";
import axios from "axios";

const AddPaymentForm = () => {
  const [formData, setFormData] = useState({
    UserID: "",
    paymentID: "", // We'll generate this
    packageID: "",
    Date: "",
    InvoiceNumber: "",
    Amount: "",
    Advance_or_Full: "Advance",
    PaymentMethod: "cash",
  });

  useEffect(() => {
    // Generate a unique payment ID when component mounts
    const generatePaymentID = () => {
      const generatedID = `PAY-${Math.floor(
        1000 + Math.random() * 9000
      )}-${Date.now()}`;
      setFormData((prevState) => ({
        ...prevState,
        paymentID: generatedID,
      }));
    };

    generatePaymentID();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4001/api/pay/payment/add",
        formData
      );
      console.log("Payment added successfully:", response.data);
      // Optionally, you can clear the form fields after successful submission
      setFormData({
        UserID: "",
        paymentID: "", // Regenerate payment ID for the next submission
        packageID: "",
        Date: "",
        InvoiceNumber: "",
        Amount: "",
        Advance_or_Full: "Advance",
        PaymentMethod: "cash",
      });
    } catch (error) {
      console.error("Error adding payment:", error);
    }
  };

  // Component for card payment details popup
  const CardPaymentDetailsPopup = ({ onClose }) => {
    const styles = {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      popup: {
        background: '#fff',
        borderRadius: '5px',
        padding: '20px',
        width: '400px',
        position: 'relative',
      },
      closeButton: {
        position: 'absolute',
        top: '5px',
        right: '10px',
        cursor: 'pointer',
        fontSize: '20px',
      },
      content: {
        textAlign: 'center',
      },
      heading: {
        marginBottom: '20px',
        fontSize: '20px',
      },
      inputGroup: {
        marginBottom: '15px',
      },
      label: {
        display: 'block',
        marginBottom: '5px',
        fontSize: '16px',
        fontWeight: 'bold',
      },
      input: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
        fontSize: '16px',
      },
    };

    return (
      <div style={styles.overlay}>
        <div style={styles.popup}>
          <span style={styles.closeButton} onClick={onClose}>×</span>
          <div style={styles.content}>
            <h3 style={styles.heading}>Card Payment Details</h3>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Card Number:</label>
              <input type="text" style={styles.input} />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Cardholder Name:</label>
              <input type="text" style={styles.input} />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Expiration Date:</label>
              <input type="text" style={styles.input} />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>CVV:</label>
              <input type="text" style={styles.input} />
            </div>
          </div>
        </div>
      </div>
    );
  };


  const PayPalPaymentDetailsPopup = ({ onClose }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle submission of PayPal details
    };
  
    return (
      <div style={styles.overlay}>
        <div style={styles.popup}>
          <span style={styles.closeButton} onClick={onClose}>×</span>
          <div style={styles.content}>
            <h3 style={styles.heading}>PayPal Payment Details</h3>
            <form onSubmit={handleSubmit}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>PayPal Email:</label>
                <input type="email" style={styles.input} />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    popup: {
      background: '#fff',
      borderRadius: '5px',
      padding: '20px',
      width: '400px',
      position: 'relative',
    },
    closeButton: {
      position: 'absolute',
      top: '5px',
      right: '10px',
      cursor: 'pointer',
      fontSize: '20px',
    },
    content: {
      textAlign: 'center',
    },
    heading: {
      marginBottom: '20px',
      fontSize: '20px',
    },
    inputGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontSize: '16px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      boxSizing: 'border-box',
      fontSize: '16px',
    },
  };

  // Function to render payment details based on selected method
  const renderPaymentDetails = () => {
    switch (formData.PaymentMethod) {
      case 'card':
        return (
          <CardPaymentDetailsPopup onClose={() => setFormData(prevState => ({...prevState, PaymentMethod: ''}))} />
        );
      case 'paypal':
        return (
          <PayPalPaymentDetailsPopup onClose={() => setFormData(prevState => ({...prevState, PaymentMethod: ''}))} />
        );
      case 'bankTransfer':
        return (
          <div>
            <h3>Bank Transfer Details</h3>
            {/* Add input fields for bank transfer details */}
            <h5>Account Number - </h5>
            <h5>Bank Name - </h5>
            <h5>Branch Name Name - </h5>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="outer-container">
      <div className="form-container">
        <div className="left-side-image">
          <img
            src="https://img.freepik.com/free-vector/concept-credit-card-payment-landing-page_52683-24923.jpg?t=st=1713593684~exp=1713597284~hmac=f595e1fb1d2891a487ada302c017ff0316d94c0f9ba23a954114a57d2267dcaf&w=740"
            alt="Left Side Image"
          />
        </div>
        <div className="form-wrapper">
          <h2>Add Payment</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>User ID:</label>
              <input
                type="text"
                name="UserID"
                value={formData.UserID}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Payment ID:</label>
              <input
                type="text"
                name="paymentID"
                value={formData.paymentID}
                disabled
              />
            </div>
            <div>
              <label>Package ID:</label>
              <input
                type="text"
                name="packageID"
                value={formData.packageID}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Date:</label>
              <input
                type="date"
                name="Date"
                value={formData.Date}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Invoice Number:</label>
              <input
                type="text"
                name="InvoiceNumber"
                value={formData.InvoiceNumber}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Amount:</label>
              <input
                type="number"
                name="Amount"
                value={formData.Amount}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Advance or Full:</label>
              <select
                name="Advance_or_Full"
                value={formData.Advance_or_Full}
                onChange={handleChange}
              >
                <option value="Advance">Advance</option>
                <option value="Full">Full</option>
              </select>
            </div>
            <div>
              <label>Payment Method:</label>
              <select
                name="PaymentMethod"
                value={formData.PaymentMethod}
                onChange={handleChange}
              >
                {/* <option value="card">Cash</option> */}
                <option value="card">Card</option>
                <option value="paypal">PayPal</option>
                <option value="bankTransfer">Bank Transfer</option>
              </select>
            </div>
            {renderPaymentDetails()}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPaymentForm;

import React, { useState } from 'react';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryChange = (event) => {
    setExpiry(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform payment processing or submit payment details
    // You can add your payment processing logic here
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Secure Payment</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Card Number:</label>
            <input
              type="text"
              value={cardNumber}
              onChange={handleCardNumberChange}
              style={styles.input}
            />
          </div>
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Expiration Date</label>
            <input
              type="text"
              value={expiry}
              onChange={handleExpiryChange}
              style={styles.input}
            />
          </div>
          <div style={styles.fieldGroup}>
            <label style={styles.label}>CVV</label>
            <input
              type="text"
              value={cvv}
              onChange={handleCvvChange}
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>
            Confirm Payment
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f6f9fc',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    width: '400px',
    padding: '30px',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#32325d',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  fieldGroup: {
    marginBottom: '20px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#6b7c93',
    marginBottom: '8px',
  },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #e5e9f2',
    fontSize: '14px',
  },
  button: {
    backgroundColor: '#6772e5',
    color: '#ffffff',
    padding: '14px',
    borderRadius: '8px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
  },
  buttonHover: {
    backgroundColor: '#5469d4',
  },
};

export default PaymentPage;

import React from 'react';

const CPUProduct = () => {
  const items = [
    { name: 'Rice', cost: 10, quantity: 101 },
    { name: 'Carrot', cost: 20, quantity: 105 },
    { name: 'Red Chilli', cost: 15, quantity: 80 },
    { name: 'Tomato', cost: 15, quantity: 33 },
    { name: 'Potato', cost: 20, quantity: 67 },
    { name: 'Paddy', cost: 25, quantity: 25 },
    { name: 'Wheat', cost: 30, quantity: 71 },
    { name: 'Sugarcane', cost: 22, quantity: 124 },
    { name: 'Onions', cost: 30, quantity: 90 },
    { name: 'Lentils', cost: 20, quantity: 142 },
  ];

  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const cellStyle = {
    padding: '8px',
    border: '1px solid #ccc',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Product Information</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={cellStyle}>Product Name</th>
            <th style={cellStyle}>Expected Cost</th>
            <th style={cellStyle}>Product ID</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td style={cellStyle}>{item.name}</td>
              <td style={cellStyle}>Rs.{item.cost}</td>
              <td style={cellStyle}>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CPUProduct;
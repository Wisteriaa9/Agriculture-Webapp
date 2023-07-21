import React from 'react';

const CPCCost = () => {
  const items = [
    { name: 'Paddy', cost: 40 },
    { name: 'Wheat', cost: 50 },
    { name: 'Tomatoes', cost: 160 },
    { name: 'Sugarcane', cost: 28 },
    { name: 'Onions', cost: 59 },
    { name: 'Lentils', cost: 50 },
    { name: 'Oats', cost: 69 },
    { name: 'Mustard', cost: 25 },
    { name: 'Potato', cost: 30 },
    { name: 'Jowar', cost: 32 },
  ];

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
  };

  return (
    <div>
      <h1 style={titleStyle}>Cost Price</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={cellStyle}>Item Name</th>
            <th style={cellStyle}>Cost</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td style={cellStyle}>{item.name}</td>
              <td style={cellStyle}>{item.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CPCCost;
import React from 'react';

const MFECost = () => {
  const items = [
    { name: 'Paddy', cost: 30 },
    { name: 'Wheat', cost: 40 },
    { name: 'Tomatoes', cost: 150 },
    { name: 'Sugarcane', cost: 18 },
    { name: 'Onions', cost: 54 },
    { name: 'Lentils', cost: 40 },
    { name: 'Oats', cost: 65 },
    { name: 'Mustard', cost: 30 },
    { name: 'Potato', cost: 25 },
    { name: 'Jowar', cost: 25 },
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

export default MFECost;
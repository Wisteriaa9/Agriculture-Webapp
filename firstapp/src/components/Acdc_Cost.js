import React from 'react';

const Analytics = () => {
  const items = [
    { name: 'Paddy', cost: 10 },
    { name: 'Wheat', cost: 20 },
    { name: 'Tomatoes', cost: 100 },
    { name: 'Sugarcane', cost: 12 },
    { name: 'Onions', cost: 18 },
    { name: 'Lentils', cost: 25 },
    { name: 'Oats', cost: 30 },
    { name: 'Mustard', cost: 22 },
    { name: 'Potato', cost: 17 },
    { name: 'Jowar', cost: 19 },
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

export default Analytics;
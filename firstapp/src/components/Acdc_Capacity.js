import React from 'react';

const Product = () => {
        const items = [
          { name: 'Paddy', capacity: 100 },
          { name: 'Wheat', capacity: 200},
          { name: 'Tomatoes', capacity: 100 },
          { name: 'Sugarcane', capacity: 120 },
          { name: 'Onions', capacity: 180 },
          { name: 'Lentils', capacity: 250 },
          { name: 'Oats', capacity: 300 },
          { name: 'Mustard', capacity: 220 },
          { name: 'Potato', capacity: 170 },
          { name: 'Jowar', capacity: 190 },
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
            <h1 style={titleStyle}>Capacity Of Each Item</h1>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={cellStyle}>Item Name</th>
                  <th style={cellStyle}>Capacity in kg</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td style={cellStyle}>{item.name}</td>
                    <td style={cellStyle}>{item.capacity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      };
export default Product;
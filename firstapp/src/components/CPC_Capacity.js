import React from 'react';

const CPCCapacity = () => {
        const items = [
          { name: 'Paddy', capacity: 90 },
          { name: 'Wheat', capacity: 50},
          { name: 'Tomatoes', capacity: 40 },
          { name: 'Sugarcane', capacity:170 },
          { name: 'Onions', capacity: 100 },
          { name: 'Lentils', capacity: 200 },
          { name: 'Oats', capacity: 300 },
          
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
                  <th style={cellStyle}>Quantity in kg</th>
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
export default CPCCapacity;
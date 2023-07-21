import React from 'react';

const ProductList = () => {
        const items = [
          { name: 'Paddy' },
          { name: 'Wheat'},
          { name: 'Tomatoes'},
          { name: 'Sugarcane' },
          { name: 'Onions' },
          { name: 'Lentils' },
          { name: 'Oats' },
          { name: 'Mustard'},
          { name: 'Potato' },
          { name: 'Jowar' },
        ];
      
        const titleStyle = {
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '20px',
        };
      
        const tableStyle = {
          width: '50%',
          borderCollapse: 'collapse',
        };
      
        const cellStyle = {
          padding: '8px',
          border: '1px solid #ccc',
        };
      
        return (
          <div>
            <h1 style={titleStyle}>Product List</h1>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={cellStyle}>Item Name</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td style={cellStyle}>{item.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      };

export default ProductList;
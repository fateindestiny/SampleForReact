import React from 'react';

const ItemView = ({data: {title, bgColor}}) => {
  return (
    <div
      style={{
        margin: '10px',
        width: '90vw',
        height: '100px',
        background: `${bgColor}`,
        paddingTop: '40px',
      }}>
      <p
        style={{
          textAlign: 'center',
        }}>
        Slide - {title}
      </p>
    </div>
  );
};
export default ItemView;

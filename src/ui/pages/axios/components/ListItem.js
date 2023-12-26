import React from 'react';

const ListItem = ({data: {title, message}}) => {
  return (
    <div
      style={{
        padding: '5px',
        borderBottom: '1px solid blue',
      }}>
      <p
        style={{
          fontSize: '20px',
          marginBottom: '5px',
        }}>
        {title}
      </p>
      {message}
    </div>
  );
};

export default ListItem;

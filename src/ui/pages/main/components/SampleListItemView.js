import React from 'react';

const SampleListItemView = ({data: {title, buttonTitle, onClick}}) => {
  return (
    <li>
      <p>{title}</p>
      <button onClick={onClick}>{buttonTitle}</button>
    </li>
  );
};

export default SampleListItemView;

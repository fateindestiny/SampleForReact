import React from 'react';
import {FormattedMessage} from 'react-intl';

const SampleListItemView = ({data: {titleId, buttonTitleId, onClick}}) => {
  return (
    <li>
      <p>
        <FormattedMessage id={titleId} />
      </p>
      <button onClick={onClick}>
        <FormattedMessage id={buttonTitleId} />
      </button>
    </li>
  );
};

export default SampleListItemView;

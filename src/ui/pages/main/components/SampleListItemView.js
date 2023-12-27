import React from 'react';
import {FormattedMessage} from 'react-intl';
import {RippleButton} from '../../../components/Button';

const SampleListItemView = ({data: {titleId, buttonTitleId, onClick}}) => {
  return (
    <li>
      <p style={{marginTop: '10px', marginBottom: '10px'}}>
        <FormattedMessage id={titleId} />
      </p>
      <RippleButton onClick={onClick}>
        <FormattedMessage id={buttonTitleId} />
      </RippleButton>
    </li>
  );
};

export default SampleListItemView;

import React from 'react';
import {FormattedMessage} from 'react-intl';
import {SampleButton} from '../../../components/Button';

const SampleListItemView = ({data: {titleId, buttonTitleId, onClick}}) => {
  return (
    <li>
      <p>
        <FormattedMessage id={titleId} />
      </p>
      <SampleButton
        style={{marginTop: '10px', marginBottom: '10px'}}
        onClick={onClick}>
        <FormattedMessage id={buttonTitleId} />
      </SampleButton>
    </li>
  );
};

export default SampleListItemView;

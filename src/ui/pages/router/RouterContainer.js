import React from 'react';
import {FormattedMessage} from 'react-intl';
import {RippleButton} from '../../components/Button';
import {useRouter} from '../../../hooks';

const RouterContainer = () => {
  const {navigate} = useRouter();
  return (
    <div className="wrap">
      <p className="title">
        <FormattedMessage id={'routerSample.subPageTitle'} />
      </p>
      <div style={{marginTop: '10px'}}>
        <RippleButton onClick={() => navigate(-1)}>Move back</RippleButton>
      </div>
    </div>
  );
};

export default RouterContainer;

import {FormattedMessage} from 'react-intl';
import {useCallback, useState} from 'react';
import {useInterval} from '../../../hooks';

const CustomHookContainer = () => {
  const [count, setCount] = useState(0);

  const intervalFunc = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  useInterval(intervalFunc, 1000);

  return (
    <div className="wrap">
      <p className="title">
        <FormattedMessage id={'customHookSample.subPageTitle'} />
      </p>

      <ul>
        <li
          style={{
            marginTop: '10px',
            borderBottom: '1px solid blue',
          }}>
          useInterval
        </li>
        <li style={{marginTop: '5px'}}>Count : {count}</li>
      </ul>
    </div>
  );
};

export default CustomHookContainer;

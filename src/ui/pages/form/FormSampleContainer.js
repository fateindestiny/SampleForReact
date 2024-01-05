import {FormattedMessage} from 'react-intl';
import FormView from './components/FormView';
import {observer} from 'mobx-react-lite';
import {useState} from 'react';
import JSONPretty from 'react-json-pretty';

const FormSampleContainer = () => {
  const [data, setData] = useState('');
  const onSubmitHandler = data => {
    console.log('onSubmitHandler:', JSON.stringify(data));
    setData(JSON.stringify(data));
  };
  return (
    <div className="wrap">
      <p className="title">
        <FormattedMessage id={'formSample.subPageTitle'} />
      </p>
      <FormView onSubmitHandler={onSubmitHandler} />
      <p
        style={{
          marginTop: '10px',
          marginBottom: '10px',
          borderBottom: '1px solid black',
        }}>
        <FormattedMessage id={'common.result'} />
      </p>
      <JSONPretty
        data={data}
        style={{
          width: '100%',
          whiteSpace: 'normal',
          wordWrap: 'break-all',
        }}
      />
    </div>
  );
};

export default observer(FormSampleContainer);

import {FormattedMessage} from 'react-intl';
import {useStore} from '../../../hooks';
import {useState} from 'react';
import ListItem from './components/ListItem';
import {observer} from 'mobx-react-lite';

const AxiosContainer = () => {
  const {
    sampleStore: {getSampleData01List},
  } = useStore();
  const [list, setList] = useState([]);
  const onClickGetSampleData = () => {
    getSampleData01List().then(result => {
      console.log('test:', result);
      setList(result.data);
    });
  };
  return (
    <div className="wrap">
      <p className="title">
        <FormattedMessage id={'axiosSample.subPageTitle'} />
      </p>
      <button onClick={onClickGetSampleData}>
        <FormattedMessage id={'axiosSample.buttonGetSampleDataTitle'} />
      </button>
      <p
        style={{
          marginTop: '10px',
          borderBottom: '1px solid dodgerblue',
        }}>
        <FormattedMessage id={'common.list'} />
      </p>
      {list.map((item, index) => (
        <ListItem key={`item-${index}`} data={item} />
      ))}
    </div>
  );
};

export default observer(AxiosContainer);

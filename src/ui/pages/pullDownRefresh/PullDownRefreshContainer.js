import {FormattedMessage} from 'react-intl';
import PullDownRefreshView from '../../components/PullDownRefreshView';
import {useCallback, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {useStore} from '../../../hooks';

const PullDownRefreshContainer = () => {
  const [list, setList] = useState([]);
  const {
    sampleStore: {getSampleData01List},
  } = useStore();
  const onRefresh = useCallback(() => {
    return getSampleData01List().then(result => {
      setList(result.data);
    });
  }, []);
  return (
    <div className="wrap">
      <p className="title">
        <FormattedMessage id={'pullDownRefreshSample.subPageTitle'} />
      </p>
      <PullDownRefreshView isPullable={true} onRefresh={onRefresh}>
        <div
          style={{
            width: '100%',
            height: '100%',
          }}>
          <div
            style={{
              width: '100%',
              height: '50px',
              textAlign: 'center',
              background: 'aliceblue',
            }}>
            Pull to refresh
          </div>
          <ul
            style={{
              marginTop: '10px',
            }}>
            {Array.isArray(list) && list.length > 0 ? (
              list.map((item, index) => (
                <li
                  style={{
                    width: '100wv',
                    height: '50px',
                    padding: '5px',
                    border: '1px solid blueviolet',
                    marginTop: '5px',
                    marginBottom: '5px',
                  }}
                  key={`item-${index}`}>
                  <p>{item.title}</p>
                  {item.message}
                </li>
              ))
            ) : (
              <div style={{height: '100%'}}>No list</div>
            )}
          </ul>
        </div>
      </PullDownRefreshView>
    </div>
  );
};

export default observer(PullDownRefreshContainer);

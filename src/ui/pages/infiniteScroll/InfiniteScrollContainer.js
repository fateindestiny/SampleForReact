import {FormattedMessage} from 'react-intl';
import InfiniteScrollView from '../../components/InfiniteScrollView';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {useStore} from '../../../hooks';
import {observer} from 'mobx-react-lite';

const InfiniteScrollContainer = () => {
  const {
    sampleStore: {getMoreList, sampleList},
  } = useStore();
  const [startIndex, setStartIndex] = useState(0);
  const totalLength = 100;

  const list = useMemo(() => {
    return sampleList;
  }, [sampleList]);

  useEffect(() => {
    getMoreList(0);
  }, []);

  const onLoadMore = useCallback(() => {
    console.log('onLoadMore');
    getMoreList(startIndex + 1);
    setStartIndex(startIndex + 1);
  }, [startIndex, list]);

  return (
    <div className="wrap">
      <p className="title">
        <FormattedMessage id={'infiniteScrollSample.subPageTitle'} />
      </p>
      <div
        style={{
          height: '100%',
          marginTop: '10px',
          paddingLeft: '5px',
          paddingRight: '5px',
        }}>
        <p>List</p>
        <ul>
          <InfiniteScrollView
            dataLength={list.length}
            moreHandler={onLoadMore}
            hasMore={list.length < totalLength}>
            {list.map((item, index) => (
              <li
                style={{
                  marginTop: '5px',
                  marginBottom: '5px',
                  padding: '5px',
                  height: '50px',
                  border: '1px solid blue',
                }}
                key={`item-${index}`}>
                Item {index} : {item.title}
              </li>
            ))}
          </InfiniteScrollView>
        </ul>
      </div>
    </div>
  );
};

export default observer(InfiniteScrollContainer);

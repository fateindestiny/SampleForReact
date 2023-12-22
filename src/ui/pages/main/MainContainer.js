import React from 'react';
import useRouter from '../../../hooks/useRouter';
import {useStore} from '../../../hooks';
import {observer} from 'mobx-react-lite';
import SampleListItemView from './components/SampleListItemView';

const MainContainer = () => {
  const {
    sampleStore: {showLoading},
  } = useStore();
  const {navigate} = useRouter();
  const sampleList = [
    {
      title: 'Router Sample',
      buttonTitle: 'Move Sub Page',
      onClick: () => {
        navigate('/router');
      },
    },
    {
      title: 'Loading Sample',
      buttonTitle: 'Show Loading',
      onClick: () => {
        console.log('test:showLoading');
        showLoading();
      },
    },
    {
      title: 'Navigation Sample',
      buttonTitle: 'Move Navigation Sample Page',
      onClick: () => {
        navigate('/navigation');
      },
    },
    {
      title: 'Axios Sample',
      buttonTitle: 'Move Axios Sample Page',
      onClick: () => {
        navigate('/axios');
      },
    },
  ];

  return (
    <div className="main">
      <p className="title">Sample Main Page</p>
      <ul className="list">
        {sampleList.map((item, index) => (
          <SampleListItemView key={`sample-item-${index}`} data={item} />
        ))}
      </ul>
    </div>
  );
};
export default observer(MainContainer);

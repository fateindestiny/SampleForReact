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
      titleId: 'routerSample.title',
      buttonTitleId: 'routerSample.buttonTitle',
      onClick: () => {
        navigate('/router');
      },
    },
    {
      titleId: 'loadingSample.title',
      buttonTitleId: 'loadingSample.buttonTitle',
      onClick: () => {
        showLoading();
      },
    },
    {
      titleId: 'navigationSample.title',
      buttonTitleId: 'navigationSample.buttonTitle',
      onClick: () => {
        navigate('/navigation');
      },
    },
    {
      titleId: 'axiosSample.title',
      buttonTitleId: 'axiosSample.buttonTitle',
      onClick: () => {
        navigate('/axios');
      },
    },
    {
      titleId: 'popupSample.title',
      buttonTitleId: 'popupSample.buttonTitle',
      onClick: () => {
        navigate('/popup');
      },
    },
    {
      titleId: 'rippleSample.title',
      buttonTitleId: 'rippleSample.buttonTitle',
      onClick: () => {},
    },
    {
      titleId: 'drawerSample.title',
      buttonTitleId: 'drawerSample.buttonTitle',
      onClick: () => {
        navigate('/drawer');
      },
    },
    {
      titleId: 'formSample.title',
      buttonTitleId: 'formSample.buttonTitle',
      onClick: () => {
        navigate('/form');
      },
    },
    {
      titleId: 'customHookSample.title',
      buttonTitleId: 'customHookSample.buttonTitle',
      onClick: () => {
        navigate('/customHook');
      },
    },
    {
      titleId: 'pullDownRefreshSample.title',
      buttonTitleId: 'pullDownRefreshSample.buttonTitle',
      onClick: () => {
        navigate('/pullDownRefresh');
      },
    },
    {
      titleId: 'infiniteScrollSample.title',
      buttonTitleId: 'infiniteScrollSample.buttonTitle',
      onClick: () => {
        navigate('/infiniteScroll');
      },
    },
    {
      titleId: 'swiperSample.title',
      buttonTitleId: 'swiperSample.buttonTitle',
      onClick: () => {
        navigate('/swiper');
      },
    },
    {
      titleId: 'eChartSample.title',
      buttonTitleId: 'eChartSample.buttonTitle',
      onClick: () => {
        navigate('/echart');
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

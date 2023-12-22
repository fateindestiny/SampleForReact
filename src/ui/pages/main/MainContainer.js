import React from 'react';
import useRouter from '../../../hooks/useRouter';
import {useStore} from '../../../hooks';
import {observer} from 'mobx-react-lite';

const MainContainer = () => {
  const {
    sampleStore: {showLoading},
  } = useStore();
  const {navigate} = useRouter();
  const onClickMoveSubPage = () => {
    navigate('/router');
  };

  const onClickLoadingSample = () => {
    console.log('test:showLoading');
    showLoading();
  };

  const onClickMoveNavigationSamplePage = () => {
    navigate('/navigation');
  };

  return (
    <div>
      Sample Main Page
      <ul>
        <li>
          <p>Router Sample</p>
          <button onClick={onClickMoveSubPage}>Move Sub page</button>
        </li>
        <li>
          <p>Loading Sample</p>
          <button onClick={onClickLoadingSample}>Show Loading</button>
        </li>
        <li>
          <p>Navigation Sample</p>
          <button onClick={onClickMoveNavigationSamplePage}>
            Move Navigation Sample Page
          </button>
        </li>
      </ul>
    </div>
  );
};
export default observer(MainContainer);

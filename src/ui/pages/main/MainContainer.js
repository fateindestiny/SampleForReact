import React from 'react';
import useRouter from '../../../hooks/useRouter';
import {useStore} from '../../../hooks';
import {observer} from 'mobx-react-lite';

const MainContainer = () => {
  const {
    sampleStore: {showLoading},
  } = useStore();
  const {navigate} = useRouter();
  const moveSubPage = () => {
    navigate('/router');
  };

  const onClickLoadingSample = () => {
    console.log('test:showLoading');
    showLoading();
  };

  return (
    <div>
      Sample Main Page
      <ul>
        <li>
          Router Sample
          <br />
          <button onClick={moveSubPage}>Move Sub page</button>
        </li>
        <li>
          Loading Sample
          <br />
          <button onClick={onClickLoadingSample}>Show Loading</button>
        </li>
      </ul>
    </div>
  );
};
export default observer(MainContainer);

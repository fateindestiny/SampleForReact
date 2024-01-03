import styled from 'styled-components';
import iconMenu from '../../assets/images/icon-menu.svg';
import {observer} from 'mobx-react-lite';
import {useStore} from '../../hooks';
import DrawerView from './DrawerView';
import {useCallback, useState} from 'react';
import toastUtils from '../../utils/toastUtils';

const RoundedButton = styled.button.attrs(props => ({
  ...props,
  type: 'button',
}))`
  position: fixed;
  right: 10px;
  bottom: 30px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid darkblue;
  color: transparent;
  display: block;
  background: #fff url(${iconMenu}) no-repeat 50% 50% / 30px 30px;
  z-index: 1001;
`;

const FloatingButton = () => {
  const {
    commonStore: {isShowFloatingButton},
  } = useStore();

  const onClickFloatingButton = useCallback(() => {
    console.log('onClickFloatingButton');
    toastUtils.default("Sample toast message.");
  }, []);
  return (
    <>
      {isShowFloatingButton && (
        <RoundedButton onClick={onClickFloatingButton} />
      )}
    </>
  );
};

export default observer(FloatingButton);

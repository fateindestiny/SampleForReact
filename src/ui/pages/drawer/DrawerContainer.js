import {FormattedMessage} from 'react-intl';
import DrawerView from '../../components/DrawerView';
import 'react-modern-drawer/dist/index.css';
import {RippleButton, SampleButton} from '../../components/Button';
import {useCallback, useState} from 'react';
import icon_close from '../../../assets/images/icon-close.svg';
import {observer} from 'mobx-react-lite';

const DrawerContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [direction, setDirection] = useState('left');

  const onClickOpenLeft = useCallback(() => {
    setDirection('left');
    setIsOpen(true);
  }, [isOpen, direction]);
  const onClickOpenRight = useCallback(() => {
    setDirection('right');
    setIsOpen(true);
  }, [isOpen, direction]);
  const onClickOpenTop = useCallback(() => {
    setDirection('top');
    setIsOpen(true);
  }, [isOpen, direction]);
  const onClickOpenBottom = useCallback(() => {
    setDirection('bottom');
    setIsOpen(true);
  }, [isOpen, direction]);
  return (
    <div className="wrap">
      <p className="title">
        <FormattedMessage id={'drawerSample.subPageTitle'} />
      </p>
      <ul>
        <li style={{marginTop: '10px'}}>
          <RippleButton onClick={onClickOpenLeft}>
            <FormattedMessage id={'drawerSample.openLeft'} />
          </RippleButton>
        </li>
        <li style={{marginTop: '10px'}}>
          <RippleButton onClick={onClickOpenRight}>
            <FormattedMessage id={'drawerSample.openRight'} />
          </RippleButton>
        </li>
        <li style={{marginTop: '10px'}}>
          <RippleButton onClick={onClickOpenTop}>
            <FormattedMessage id={'drawerSample.openTop'} />
          </RippleButton>
        </li>
        <li style={{marginTop: '10px'}}>
          <RippleButton onClick={onClickOpenBottom}>
            <FormattedMessage id={'drawerSample.openBottom'} />
          </RippleButton>
        </li>
      </ul>
      <DrawerView isOpenDrawer={isOpen} direction={direction}>
        <div
          style={{
            padding: '10px',
          }}>
          Drawer View
          <img
            style={{
              position: 'fixed',
              top: '10px',
              right: '10px',
            }}
            src={icon_close}
            alt={''}
            onClick={() => setIsOpen(false)}
          />
        </div>
      </DrawerView>
    </div>
  );
};

export default observer(DrawerContainer);

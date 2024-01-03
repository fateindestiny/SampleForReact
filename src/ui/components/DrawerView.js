import Drawer from 'react-modern-drawer';
import {observer} from 'mobx-react-lite';

const DrawerView = ({isOpenDrawer, onClose, direction = 'right', children}) => {
  return (
    <Drawer
      open={isOpenDrawer}
      onClose={onClose}
      style={{
        width: '100vw',
        zIndex: 1004,
      }}
      direction={direction}
      duration="200">
      {children}
    </Drawer>
  );
};
export default observer(DrawerView);

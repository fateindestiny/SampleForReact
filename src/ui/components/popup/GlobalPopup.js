import {observer} from 'mobx-react-lite';
import {useStore} from '../../../hooks';
import {Portal} from 'react-portal';
import ConfirmPopup from './ConfirmPopup';

const ModalComponents = {
  confirm: ConfirmPopup,
};
const GlobalPopupPortal = () => {
  const {
    modalStore: {isOpenGlobalPopup, globalPopupContent},
  } = useStore();

  const Modal = ModalComponents[globalPopupContent?.type] || ConfirmPopup;

  return (
    <>
      {isOpenGlobalPopup && (
        <Portal>
          <Modal {...globalPopupContent?.props} />
        </Portal>
      )}
    </>
  );
};

export default observer(GlobalPopupPortal);

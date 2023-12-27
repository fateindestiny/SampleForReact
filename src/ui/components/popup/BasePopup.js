import Modal from 'react-modal';

const defaultStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: 'calc(100% - 60%)',
    paddingTop: '30px',
    border: 0,
    borderRadius: 0,
  },
  overlay: {
    zIndex: 1001,
    background: 'rgba(0, 0, 0, 0.7)',
  },
};

Modal.setAppElement('#root');

const BasePopup = ({
  isOpen,
  onAfterOpen,
  closeModal,
  children,
  customStyles,
  ...restProps
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={closeModal}
      style={{
        content: {
          ...defaultStyles.content,
          ...(customStyles && customStyles.content),
        },
        overlay: {
          ...defaultStyles.overlay,
          ...(customStyles && customStyles.overlay),
        },
      }}
      {...restProps}>
      {children}
    </Modal>
  );
};

export default BasePopup;

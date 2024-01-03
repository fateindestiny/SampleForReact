import {Flip, toast} from 'react-toastify';

export default {
  timeout: 2000,
  default(message, autoClose, onOpen) {
    toast(message, {
      // icon: ({theme, type}) => <img src={'toastIcon'} />,
      position: 'bottom-center',
      hideProgressBar: true,
      newestOnTop: true,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
      closeButton: false,
      transition: Flip,
      autoClose: autoClose ?? this.timeout,
      onOpen,
    });
  },
};

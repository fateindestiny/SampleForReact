import {makeAutoObservable} from 'mobx';

export default class ModalStore {
  constructor(root) {
    this.root = root;
    makeAutoObservable(this);
  }

  isOpenGlobalPopup = false;

  globalPopupContent = {
    type: '',
    props: {
      title: '',
      children: '',
      btnList: [],
      isOpen: false,
    },
  };

  setIsOpenGlobalPopup = isOpen => {
    this.isOpenGlobalPopup = isOpen;
  };

  setGlobalPopupContent = content => {
    this.globalPopupContent = content;
  };
}

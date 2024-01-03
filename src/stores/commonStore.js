import {makeAutoObservable} from 'mobx';

export default class CommonStore {
  constructor(root) {
    this.root = root;
    makeAutoObservable(this);
  }

  isShowFloatingButton = false;

  isOpenDrawer = false;

  setIsShowFloatingButton = (value = false) => {
    console.log('setIsShowFloatingButton:', value);
    this.isShowFloatingButton = value;
  };

  setIsOpenDrawer = (value = false) => {
    this.isOpenDrawer = value;
  };
}

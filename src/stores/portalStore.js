import {makeAutoObservable, reaction} from 'mobx';

export const observerLoadingProgress = store => {
  reaction(
      () => store.isLoading,
      isLoading => {
        store.root.portalStore.setIsOpen(isLoading);
      }
  );
};

export default class PortalStore {
  constructor(root) {
    this.root = root;
    makeAutoObservable(this);
  }

  isOpen = false;

  setIsOpen = isOpen => {
    this.isOpen = isOpen;
  };
}

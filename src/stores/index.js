import React from 'react';
import PortalStore from './portalStore';
import SampleStore from './sampleStore';
import ModalStore from './modalStore';
import CommonStore from './commonStore';

class RootStore {
  constructor() {
    this.portalStore = new PortalStore(this);
    this.sampleStore = new SampleStore(this);
    this.modalStore = new ModalStore(this);
    this.commonStore = new CommonStore(this);
  }
}

const stores = new RootStore();

export const storeContext = React.createContext();

export const StoreProvider = ({children}) => {
  return (
    <storeContext.Provider value={stores}>{children}</storeContext.Provider>
  );
};

export default stores;

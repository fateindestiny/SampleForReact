import React from 'react';
import PortalStore from './portalStore';
import SampleStore from './sampleStore';

class RootStore {
  constructor() {
    this.portalStore = new PortalStore(this);
    this.sampleStore = new SampleStore(this);
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

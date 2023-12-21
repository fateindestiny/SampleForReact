import {makeAutoObservable} from 'mobx';
import {observerLoadingProgress} from './portalStore';

export default class SampleStore {
  constructor(root) {
    this.root = root;
    makeAutoObservable(this);
    // isLoading을 감지하여 Loading UI 표시
    observerLoadingProgress(this);
  }

  isLoading = false;

  showLoading = () => {
    this.isLoading = true;
  };

  dismissLoading = () => {
    this.isLoading = false;
  }
}

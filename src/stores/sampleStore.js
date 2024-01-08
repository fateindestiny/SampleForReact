import {makeAutoObservable, runInAction} from 'mobx';
import {observerLoadingProgress} from './portalStore';
import {getSample01ListAPI} from '../apis/sample01Api';

export default class SampleStore {
  constructor(root) {
    this.root = root;
    makeAutoObservable(this);
    // isLoading을 감지하여 Loading UI 표시
    observerLoadingProgress(this);
  }

  isLoading = false;

  sampleList = [];

  showLoading = () => {
    this.isLoading = true;
  };

  dismissLoading = () => {
    this.isLoading = false;
  };

  getSampleData01List = async () => {
    this.isLoading = true;
    let result = {code: 0, data: {}};
    try {
      const {data, status} = await getSample01ListAPI();
      runInAction(() => {
        result.code = status;
        if (status === 200) {
          result.data = data;
        }
      });
    } catch (e) {}
    this.isLoading = false;
    return result;
  };

  getMoreList = async startIndex => {
    this.isLoading = true;
    try {
      let i = 0;
      while (i < 10) {
        this.sampleList.push({
          title: `item no ${startIndex * 10 + i}`,
        });
        i++;
      }
    } catch (e) {}
    this.isLoading = false;
  };
}

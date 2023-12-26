import MockAdapter from 'axios-mock-adapter';
import _ from 'lodash';
import {Sample01Data} from './data/Sample01Data';

const mocks = [
  {
    url: '/sample/data01',
    data: Sample01Data,
  },
];

const getMockAdapter = (url, axiosInstance) => {
  let mockAdapter = null;
  const mock = mocks.find(element => {
    return _.startsWith(url, element.url);
  });
  if (mock) {
    mockAdapter = new MockAdapter(axiosInstance);
    mockAdapter.onGet(url).reply(200, mock.data);
    mockAdapter.onPut(url).reply(200, mock.data);
    mockAdapter.onPost(url).reply(200, mock.data);
  }
  return mockAdapter || axiosInstance;
};

export default getMockAdapter;

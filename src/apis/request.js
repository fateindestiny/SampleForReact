import {isEmpty, merge} from 'lodash';
import axios from 'axios';
import storageUtils from '../utils/storageUtils';
import {ACCESS_TOKEN} from '../constants';
import {history} from '../utils/commonUtils';
import getMockAdapter from '../__mock__/axiosMockAdapter';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const httpConfig = {
  baseURL: BASE_URL,
  timeout: 45000,
  responseType: 'json',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
  },
  withCredentials: true,
};
const createRequest = config => {
  return axios.create(merge({}, httpConfig, config));
};

let cancelSource = axios.CancelToken.source();

const request = ({url, method = 'get', params, config, axiosInstance}) => {
  const accessToken = storageUtils.get(ACCESS_TOKEN);
  const headers = {
    accessToken: accessToken,
  };

  axiosInstance =
    axiosInstance ||
    createRequest(!isEmpty(config) ? config : {headers: headers});

  axiosInstance.interceptors.response.use(
    response => {
      if (response?.data?.resultCode === '511') {
        // 511 같은 서버 에러 코드를 받으면 해당 블럭에서 처리 및 리턴
        return Promise.reject({
          errorCode: response.data?.resultCode,
          message: response.data?.resultMessage,
        });
      }
      return response;
    },
    err => {
      const error = err && err.response;
      if (error?.status === 401) {
        // 401 에러 처리
      } else if (error?.status === 404) {
        // 404 페이지 없음 처리
        history.push('/notFound');
      } else if (error?.status === 406) {
        // auth 처리
      }

      return Promise.reject(err);
    },
  );

  getMockAdapter(url, axiosInstance);

  switch (method) {
    case 'post':
      return axiosInstance.post(url, params, {
        ...config,
        cancelToken: cancelSource.token,
      });
    case 'patch':
      return axiosInstance.patch(url, params, {
        ...config,
        cancelToken: cancelSource.token,
      });
    case 'put':
      return axiosInstance.put(url, params, {
        ...config,
        cancelToken: cancelSource.token,
      });
    case 'delete':
      if (params) {
        if (!config) {
          config = {};
        }
        config.data = params;
      }

      return axiosInstance.delete(url, params, {
        ...config,
        cancelToken: cancelSource.token,
      });
    case 'file':
      return axiosInstance.get(url, params, {
        ...config,
        responseType: 'blob',
        cancelToken: cancelSource.token,
      });
    case 'cancel':
      cancelSource.cancel();
      cancelSource = axios.CancelToken.source();
      break;
    default:
      return axiosInstance.get(
        url,
        {params},
        {
          ...config,
          cancelToken: cancelSource.token,
        },
      );
  }
};

export default request;

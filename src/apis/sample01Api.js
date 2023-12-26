import request from './request';

const prefix = '/sample';
export const getSample01ListAPI = () => {
  return request({
    url: `${prefix}/data01`,
    method: 'get',
  });
};

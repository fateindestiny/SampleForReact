import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();

export const flattenMessages = (nestedMessages, prefix = '') => {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const msg = messages;
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'string') {
      msg[prefixedKey] = value;
    } else {
      Object.assign(msg, flattenMessages(value, prefixedKey));
    }
    return msg;
  }, {});
};

export const delay = millis => {
  return new Promise(resolve => {
    const timeoutId = setTimeout(() => resolve(timeoutId), millis);
  });
};

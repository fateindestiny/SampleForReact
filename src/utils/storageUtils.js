const storageUtils = {
  get: key => {
    if (!localStorage[key] || localStorage[key] === 'undefined') {
      return undefined;
    }
    return JSON.parse(localStorage[key]);
  },
  set: (key, value) => {
    localStorage[key] = JSON.stringify(value);
  },
  remove: key => {
    if (localStorage[key]) {
      localStorage.removeItem(key);
    }
  },
  removeAll: () => {
    localStorage.clear();
  },
};

export default storageUtils;

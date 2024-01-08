let isRegisteredCallback = false;
export const registerCallback = os => {
  if (!isRegisteredCallback) {
    isRegisteredCallback = true;
    switch (os) {
      case 'android':
        document.addEventListener('message', event =>
          interfaceCallback(event.data),
        );
        break;
      case 'ios':
        window.addEventListener('message', event =>
          interfaceCallback(event.data),
        );
        break;
    }
  }
};

export const interfaceCallback = data => {
  console.log('native interface callback : ', data);
};

export const sendToNative = data => {
  if (window.ReactNativeWebView) {
    window.ReactNativeWebView.postMessage(JSON.stringify(data));
  }
};

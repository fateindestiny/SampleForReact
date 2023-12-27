import React from 'react';
import {unstable_HistoryRouter as HistoryRouter} from 'react-router-dom';
import './index.css';
import './assets/css/common.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {flattenMessages, history} from './utils/commonUtils';
import LoadingPortals from './ui/components/Loading';
import {StoreProvider} from './stores';
import {createRoot} from 'react-dom/client';
import {IntlProvider} from 'react-intl';
import locale from './locale';
import GlobalPopupPortal from './ui/components/popup/GlobalPopup';

const container = document.getElementById('root');
const root = createRoot(container);

const defaultLanguage = 'en';

root.render(
  <HistoryRouter history={history}>
    <IntlProvider
      locale={defaultLanguage}
      messages={flattenMessages(locale[defaultLanguage])}>
      <StoreProvider>
        <GlobalPopupPortal />
        <LoadingPortals />
        <App />
      </StoreProvider>
    </IntlProvider>
  </HistoryRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

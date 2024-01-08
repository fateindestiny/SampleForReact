import loadable from '@loadable/component';
import Loading from '../components/Loading';

export const NotFoundContainer = loadable(
  () => import('./error/NotFoundContainer'),
  {fallback: <Loading />},
);
export const MainContainer = loadable(() => import('./main/MainContainer'), {
  fallback: <Loading />,
});

export const RouterContainer = loadable(
  () => import('./router/RouterContainer'),
  {fallback: <Loading />},
);

export const NavigateionContainer = loadable(
  () => import('./navigation/NavigationContainer'),
  {fallback: <Loading />},
);

export const NavigationPage1Container = loadable(
  () => import('./navigation/Page1Container'),
  {fallback: <Loading />},
);

export const NavigationPage2Container = loadable(
  () => import('./navigation/Page2Container'),
  {fallback: <Loading />},
);

export const NavigationPage3Container = loadable(
  () => import('./navigation/Page3Container'),
  {fallback: <Loading />},
);

export const AxiosContainer = loadable(() => import('./axios/AxiosContainer'), {
  fallback: <Loading />,
});

export const PopupContainer = loadable(
  () => import('./popup/PopupSampleContainer'),
  {fallback: <Loading />},
);

export const DrawerContainer = loadable(
  () => import('./drawer/DrawerContainer'),
  {fallback: <Loading />},
);

export const FormContainer = loadable(
  () => import('./form/FormSampleContainer'),
  {fallback: <Loading />},
);

export const CustomHookContainer = loadable(
  () => import('./customHook/CustomHookContainer'),
  {fallback: <Loading />},
);

export const PullDownRefreshContainer = loadable(
  () => import('./pullDownRefresh/PullDownRefreshContainer'),
  {fallback: <Loading />},
);

export const InfiniteScrollContainer = loadable(
  () => import('./infiniteScroll/InfiniteScrollContainer'),
  {fallback: <Loading />},
);

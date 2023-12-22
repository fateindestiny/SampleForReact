import loadable from '@loadable/component';
import Loading from '../components/Loading';

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
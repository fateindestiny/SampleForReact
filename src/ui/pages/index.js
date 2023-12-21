import loadable from '@loadable/component';
import Loading from '../components/Loading';

export const MainContainer = loadable(
    () => import('./main/MainContainer'),
    {fallback: <Loading/>},
);

export const RouterContainer = loadable(
    () => import('./router/RouterContainer'),
    {fallback: <Loading/>},
);
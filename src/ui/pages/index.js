import loadable from '@loadable/component';
import LoadingContainer from '../components/LoadingContainer';

export const MainContainer = loadable(
    () => import('./main/MainContainer'),
    {fallback: <LoadingContainer/>},
);

export const RouterContainer = loadable(
    () => import('./router/RouterContainer'),
    {fallback: <LoadingContainer/>},
);
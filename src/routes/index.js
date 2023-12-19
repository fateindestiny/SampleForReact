import * as pages from '../ui/pages';

const routes = [
  {
    path: '*',
    element: <pages.MainContainer/>,
  },
  {
    path: '/router',
    element: <pages.RouterContainer/>,
  },
];

export default routes;
import * as pages from '../ui/pages';

const routes = [
  {
    path: '*',
    element: <pages.MainContainer />,
  },
  {
    path: '/router',
    element: <pages.RouterContainer />,
  },
  {
    path: '/navigation',
    element: <pages.NavigateionContainer />,
    children: [
      {
        path: 'page1',
        index: true,
        element: <pages.NavigationPage1Container />,
      },
      {
        path: 'page2',
        element: <pages.NavigationPage2Container />,
      },
      {
        path: 'page3',
        element: <pages.NavigationPage3Container />,
      },
    ],
  },
  {
    path: '/axios',
    element: <pages.AxiosContainer />,
  },
  {
    path: '/popup',
    element: <pages.PopupContainer />,
  },
];

export default routes;

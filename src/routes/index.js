import * as pages from '../ui/pages';

const routes = [
  {
    path: '*',
    element: <pages.NotFoundContainer />,
  },
  {
    path: '/main',
    element: <pages.MainContainer />,
    isShowFloatingButton: true,
  },
  {
    path: '/router',
    element: <pages.RouterContainer />,
    isShowFloatingButton: true,
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
    isShowFloatingButton: true,
  },
  {
    path: '/popup',
    element: <pages.PopupContainer />,
  },
  {
    path: '/drawer',
    element: <pages.DrawerContainer />,
  },
  {
    path: '/form',
    element: <pages.FormContainer />,
  },
  {
    path: '/customHook',
    element: <pages.CustomHookContainer />,
  },
  {
    path: '/pullDownRefresh',
    element: <pages.PullDownRefreshContainer />,
  },
  {
    path: '/infiniteScroll',
    element: <pages.InfiniteScrollContainer />,
  },
];

export default routes;

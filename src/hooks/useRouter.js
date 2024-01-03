import {useMemo} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import routes from '../routes';
import {useStore} from './index';

export default () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    commonStore: {setIsShowFloatingButton},
  } = useStore();
  const sampleNavigate = (path, option) => {
    const currentPage = routes.find(route => route.path === path);
    console.log('test: currentPage=', currentPage);
    setIsShowFloatingButton(currentPage?.isShowFloatingButton || false);
    navigate(path, option);
  };
  return useMemo(() => {
    return {
      navigate: sampleNavigate,
      location,
    };
  }, [location]);
};

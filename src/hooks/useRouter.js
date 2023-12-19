import {useMemo} from 'react';
import {useLocation, useNavigate} from 'react-router';

export default () => {
  const {location} = useLocation();
  const navigate = useNavigate();
  const sampleNavigate = (path, option) => {
    navigate(path, option);
  };
  return useMemo(() => {
    return {
      navigate: sampleNavigate,
    };
  }, [location]);
}
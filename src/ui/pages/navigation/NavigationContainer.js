import SampleNavigation from './components/SampleNavigation';
import {Outlet} from 'react-router';
import {useEffect} from 'react';
import {useRouter} from '../../../hooks';

const NavigationContainer = () => {
  const {location, navigate} = useRouter();

  useEffect(() => {
    if (location.pathname === '/navigation') {
      navigate('/navigation/page1');
    }
  }, [location]);
  return (
    <div>
      <p>Page Navigation Sample.</p>
      <Outlet />
      <SampleNavigation />
    </div>
  );
};

export default NavigationContainer;

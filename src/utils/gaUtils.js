import {useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react';
import ReactGA from 'react-ga4';

const RouteChangeTracker = () => {
  const location = useLocation();
  const [isInitialized, setIsIntialized] = useState(false);

  useEffect(() => {
    if (!window.location.href.includes('localhost')) {
      ReactGA.initialize('GA-ID');
      setIsIntialized(true);
    }
  }, []);

  useEffect(() => {
    if (isInitialized) {
      try {
        ReactGA.send({
          hitType: 'pageview',
          path: location.pathname,
          location: location.pathname,
          title: location.pathname,
        });
      } catch (e) {}
    }
  }, [isInitialized, location]);
};

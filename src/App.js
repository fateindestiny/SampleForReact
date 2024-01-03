import {useRoutes} from 'react-router-dom';
import routes from 'routes';
import {useRouter} from './hooks';

const App = () => {
  const {location} = useRouter();
  const elements = useRoutes(routes, location);

  return elements;
};

export default App;

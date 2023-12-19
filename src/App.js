import './App.css';
import {useRoutes} from 'react-router';
import useRouter from './hooks/useRouter';
import routes from './routes';

const App = () => {
  const {location} = useRouter();
  const elements = useRoutes(routes, location);

  return elements;
};

export default App;

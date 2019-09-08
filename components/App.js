import { Provider } from 'reakit';
import Home from './home/Home';

export default function App() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}

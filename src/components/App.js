import Home from './home/Home';
import Providers from '../context/Providers';

export default function App() {
  return (
    <Providers>
      <Home />
    </Providers>
  );
}

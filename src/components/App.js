import Home from 'src/components/home/Home';
import Providers from 'src/context/Providers';

export default function App() {
  return (
    <Providers>
      <Home />
    </Providers>
  );
}

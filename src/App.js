import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import { Header } from './components/Header';
import { Country } from './pages/Country';
import { Home } from './pages/Home';
import './styles/global.scss'

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route index path="/" element={<Home />}/>
          <Route path="country/:cca3" element={<Country />} />
        </Routes>

      </main>
      </BrowserRouter>
    </>
  );
}

export default App;

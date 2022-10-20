import Landing from './pages/Landing';
import NavbarComponent from './components/NavbarComponent';
import FormPage from './pages/FormPage'
import {Routes, Route} from 'react-router-dom';
import GlobalPage from './pages/GlobalPage';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path="form" element={<FormPage/>} />
          <Route path="globalBoard" element={<GlobalPage/>} />
        </Routes>
    </div>
  );
}

export default App;

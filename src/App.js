import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Homep from './pages/Homep';
import Servicesp from './pages/Servicesp';
import Projectsp from './pages/Projectsp';
import Aboutusp from './pages/Aboutusp';
import Quotep from './pages/Quotep';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <div className="App">
        <NavbarWithLocation />
        <div className='content'>
          <Routes>
            <Route index path='/' element={<Homep />} />
            <Route path='Servicesp' element={<Servicesp />} />
            <Route path='/Projectsp' element={<Projectsp />} />
            <Route path='/Aboutusp' element={<Aboutusp />} />
            <Route path='/Quotep' element={<Quotep />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

const NavbarWithLocation = () => {
  const location = useLocation();
  return <Navbar location={location} />;
};

export default App;

import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

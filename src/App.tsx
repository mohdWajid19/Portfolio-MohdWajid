import Contact from './pages/Contact';
import PageNotFound from './pages/ErrorPage';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Projects from './pages/Projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/projects" element={ <Projects /> } />
          <Route path="/contact" element={  <Contact /> } />
          <Route path="*" element={ <PageNotFound /> } />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App

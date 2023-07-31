import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import ProductPage from './pages/ProductPage/ProductPage';
import ContactPage from './pages/ContactPage/ContactPage';
import FaqPage from './pages/FaqPage/FaqPage';
import ErrorPage from './pages/Errorpage/ErrorPage';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/'element={<HomePage/>} />
          <Route path='/produtos' element={<ProductPage />} />
          <Route path='/contato' element={<ContactPage />} />
          <Route path='/faq' element={<FaqPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;


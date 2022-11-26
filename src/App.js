
// => API  (http://www.omdbapi.com/?s=spider man&apikey=b912e3b5)

import './App.css';
import Navbar from './Components/navbar';
import {Route, Routes} from 'react-router-dom';
import WatchList from './Components/watchList';
import Watched from './Components/watched';
import Add from './Components/add';
import ContextCom from './Components/context/ContextCom';
import Home from './pages/Home';
import Footer from './sections/Footer';
import GallerySection from './pages/GallerySection';
import Blogs from './pages/Blogs';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ScrollTop from './sections/ScrollTop';

function App() {
  return (
    <div className="App">
      <ContextCom>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GallerySection />} />
          <Route path="/watchList" element={<WatchList />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ScrollTop />
        <Footer />
      </ContextCom>
    </div>
  );
}

export default App;

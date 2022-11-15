
// => API  (http://www.omdbapi.com/?s=spider man&apikey=b912e3b5)

import './App.css';
import Navbar from './Components/navbar';
import {Route, Routes} from 'react-router-dom';
import WatchList from './Components/watchList';
import Watched from './Components/watched';
import Add from './Components/add';
import ContextCom from 'myContext/ContextCom';

function App() {
  return (
    <div className="App">
      <ContextCom>
        <Navbar />
        <Routes>
          <Route path='/watchList' element={<WatchList />} />
          <Route path='/watched' element={<Watched />} />
          <Route path='/add' element={<Add />} />
        </Routes>
      </ContextCom>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router';
import Home from './components/home';
import Search from './components/search';

function App() {
  return (
    <div className='google-clone'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/:queryId' element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import Login from './components/Pages/Login';
import Search from './components/Pages/Search';
import Album from './components/Pages/Album';
import NotFound from './components/Pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/search" element={ <Search /> } />
      <Route path="/album/:id" element={ <Album /> } />
      <Route path="/*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;

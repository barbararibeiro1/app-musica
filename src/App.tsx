import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Pages/Login';
import Search from './components/Pages/Search';
import Album from './components/Pages/Album';
import Layout from './components/Layout';

function App() {
  return (
    <>
    <p>Trybetunes</p>
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route element={ <Layout /> }>
        <Route path="/search" element={ <Search /> } />
        <Route path="/album/:id" element={ <Album /> } />
      </Route>
    </Routes>
  </>
  );
}

export default App;
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import AuDetail from './pages/AuDetail/AuDetail';
import Not from './pages/Not/Not';
import Header from './components/Header/Header';
import Books from './pages/Books/Books';
import BookDetail from './pages/BookDetail/BookDetail';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate()
  const location = useLocation().pathname
  useEffect(()=>{
    if (window.localStorage.getItem('token') != 'abcd') {
      navigate('/')
    }  
  },[location])
  return (
    <div className="App">
      <Header/>
       <Routes>
       <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/home/:type' element={<Home/>}/>
        <Route path='/author/:id' element={<AuDetail/>} />
        <Route path='/books' element={<Books/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/book-detail/:id' element={<BookDetail/>} />
        <Route path='/*' element={<Not/>} />
      </Routes>
    </div>
  );
}

export default App;

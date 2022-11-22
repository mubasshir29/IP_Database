import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {Outlet,Routes,Route} from 'react-router-dom'
import NewEntry from './components/NewEntry/NewEntry';
import Home from './components/Home/Home';
import DetailedEntry from './components/DetailedEntry/DetailedEntry';
import EditEntry from './components/EditEntry/EditEntry';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/new' element={<NewEntry/>} />
        <Route path='/ip/:id' element={<DetailedEntry/>}/>
        <Route path='/edit/:id' element={<EditEntry/>}/>
      </Routes>
      <Outlet/>
    </div>
  );
}

export default App;

import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home/home';
import List from './pages/UserList/userlist';
import CreateUser from './pages/createUser/createuser';
import Editform from './pages/editUser/edituser'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/list'element={<List/>} />
    <Route path='/createuser'element={<CreateUser/>} />
    <Route path='/edit/:id' element={<Editform/>}></Route>


  </Routes>
    </div>
  );
}

export default App;

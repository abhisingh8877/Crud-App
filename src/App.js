
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import EmployListing from './EmployListing';
import Empcreate from './Empcreate';
import Empdetails from './Empdetails';
import EmpEdit from './EmpEdit';
function App() {
  return (
    <div className="App">
     <h1>React Js Crud operation</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployListing/>}></Route>
        <Route path='/employee/create' element={<Empcreate/>}></Route>
         <Route path='/employee/detail/:empid' element={<Empdetails/>}></Route>
        <Route path='/employee/edit/:empid' element={<EmpEdit/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

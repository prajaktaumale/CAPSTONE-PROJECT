import './App.css';
import 'bootstrap';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Link, Switch} from "react-router-dom";
import { useParams } from 'react-router-dom';
import Navbar from './component/navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/cartscreen';
import Registerscreen from './screens/registerscreen';
import Loginscreen from './screens/loginscreen';
import Orderscreen from './screens/Orderscreen';
import Adminscreen from './screens/Adminscreen';
import Pizzalist from './screens/Pizzaslist';
import Addpizza from './screens/Addpizza';
import Orderlist from './screens/Orderlist';
import Editpizza from './screens/Editpizza';
import Pizza from './component/pizza';
import Homepage from './screens/Homepage';
import Restaurantscrren from './screens/restaurantScreen';
import Restaurantlist from './screens/Restaurantlist';
import Addrestaurant from './screens/Addrestaurant';
import Adminregisterscreen from './screens/Aregisterscreen';
import Adminloginscreen from './screens/Aloginscreen';


function App() {
  const {pizzaid} = useParams();
  return (
    <div className="App">
      < Navbar />
      <BrowserRouter>
      <Routes>
        <Route path ='/' exact element={<Homepage />} />
        <Route path ='/restaurant' exact element={<Restaurantscrren />} />
        <Route path='/homescreen' exact element={<Homescreen />} />
        <Route path='/cart' exact element= {<Cartscreen />} />
        <Route path='/register' exact element= {<Registerscreen/>} />
        <Route path='/login' exact element= {<Loginscreen/>} />
        <Route path='/order' exact element= {<Orderscreen />} />
        <Route path='/adminregister' exact element ={<Adminregisterscreen />} />
        <Route path='/adminlogin' exact element={<Adminloginscreen />}/>
         {/* here i dont write the exact element as i am going to add some nested element in it */}
         <Route path='/admin' element= {<Adminscreen />}>
          <Route path='/admin/pizzalist' element ={<Pizzalist />} />
          <Route path='/admin/addpizza' element ={<Addpizza />} />
          <Route path='/admin/orderlist' element ={<Orderlist />} />
          <Route path='/admin/editpizza/:pizzaid' element={<Editpizza />} />
          <Route path='/admin/restaurantlist' element={<Restaurantlist />} />
          <Route path='/admin/addrestaurant' element={<Addrestaurant />} />
          </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;


import './App.css'
import Home from './pages/home'
import About  from "./pages/About";
import Nav from './components/nav'
import { BrowserRouter , Routes , Route} from "react-router";
import Cart from './pages/Cart';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Details from './pages/Details';

function App() {

return (
  <>
  <BrowserRouter> 
  <Nav/>
   <Routes>
    <Route path ='/' element={<Home/>} />
     <Route path ='/about' element={<About/>} />
     <Route path ='/cart' element={<Cart/>} />
     <Route path ='/login' element={<Login/>} />
      <Route path ='/products/:slug' element={<Details/>} />
      <Route path ='*' element={<NotFound/>} />
    </Routes>  
  </BrowserRouter>

  </>
)
 
}





export default App

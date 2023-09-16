import './styles/App.css';
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './component/Home'
import Information from './component/Information'
import Contact from './component/Contact'
import Welcome from './component/Welcome'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        
        <Routes>
            <Route path='/' element={<Welcome/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/information' element={<Information/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            
        </Routes>

      
    
      </BrowserRouter>
     
              
     
    </div>
  );
}

export default App;

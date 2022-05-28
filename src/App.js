
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/loginPage';
import signUp from './pages/signUpPage';


function App() {
  return (


      <BrowserRouter>
      
      <Routes>
      

          <Route index element={<Login />} />
            
            <Route path="signUp" element={<signUp/>} />
           

            {/* <Route index element={<LeagueStandings />} /> */}
          
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
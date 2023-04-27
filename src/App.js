import AddUser from './component/user/signup.js';

import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
      <div>
        <Routes>
        
          <Route path="/"element={<AddUser/>} />
        </Routes>
      </div>
     </BrowserRouter>
    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Appshell from './layouts/Appshell';
import Wraper from './layouts/Wraper';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Appshell><Wraper /></Appshell>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComp from '../src/components/loginComp/Index'
import RespositoryComp from './components/RespositoryComp/Index';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/repository" element={<RespositoryComp/>} />
        <Route path="/" element={<LoginComp/>} />
      </Routes>
    </Router>
  );
}

export default App;

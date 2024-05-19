import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import Cadastro from './Cadastro/Cadastro';
import EsqueciSenha from './EsqueciASenha/EsqueciSenha';
import Schedule from './Calendar/Calendar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/calendar' element={<Schedule />}/>
          <Route path='/cadastro' element={<Cadastro />}/>
          <Route path='/esqueceusenha' element={<EsqueciSenha />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

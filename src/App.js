import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { MainContextProvider } from './contexts/MainContext';

function App() {
  return (
    <MainContextProvider>
    <div className='flex'>
      <BrowserRouter>
        <Sidebar/>
        <AppRouter/>
      </BrowserRouter>
      
    </div>
    </MainContextProvider>
  );
}

export default App;

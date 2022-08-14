// import './App.css';

import { HomePage } from './pages';
import { ListBattle } from './components/ListBattle';
import { BattleView } from './components';
import { Route, Routes } from 'react-router-dom';
import { DetailPage } from './pages/detail/DetailPage';


function App() {

  return (
    <div className='container-fluid text-center vh-100 w-100'
      // style={ { border: '1px solid white' } }
    >
      <div className='vh-100 row align-items-stretch'
        // style={ { border: '1px solid white' } }
      >
        <div className='col-8 shadow'
          // style={ { border: '1px solid white' } }
        >
          <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="detail/:id" element={ <DetailPage /> } />
          </Routes>

        </div>
        <div className='col-4 bg-primary'
          // style={ { border: '1px solid blue' } }

        >
          <BattleView />
        </div>

      </div>
    </div>
  );
}

export default App;

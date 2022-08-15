// import './App.css';

import { BattleView } from './components';
import { AppRouter } from './router';


function App() {

  return (
    <div className='container-fluid text-center vh-100 w-100'
    >
      <div className='vh-100 row align-items-stretch'
      >
        <div className='col-8 shadow'
        >
          <AppRouter />
        </div>
        <div className='col-4 bg-primary'
        >
          <BattleView />
        </div>

      </div>
    </div>
  );
}

export default App;

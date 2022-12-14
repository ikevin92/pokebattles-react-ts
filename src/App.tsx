// import './App.css';

import { BattleView } from './components';
import { AppRouter } from './router';


function App() {

  return (
    <div className='container-fluid text-center vh-100 w-100'
    >
      <div className='vh-100 row align-items-stretch'
      >
        <div className='col-md-8 col-6 shadow vh-100'
          style={ {
            overflow: 'auto',
          }}
        >
          <AppRouter />
        </div>
        <div className='col-md-4 col-6 bg-black'
        >
          <BattleView />
        </div>

      </div>
    </div>
  );
}

export default App;

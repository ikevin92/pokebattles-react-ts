// import './App.css';

import { HomePage } from './pages';
import { ListBattle } from './components/ListBattle';
import { BattleView } from './components';


function App() {

  return (
    <div className='container-fluid text-center h-auto'>
      <div className='row justify-content-between'>
        <div className='container-sm col-8'
          style={ { border: '1px solid white' } }
        >
          <HomePage />
        </div>
        <div className='col-4 bg-primary'
          style={ { border: '1px solid blue' } }

        >
          <BattleView />
        </div>

      </div>
    </div>
  );
}

export default App;

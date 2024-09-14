
import './App.css';
import FirstPage from './componants/FirstPage'
import Header from './componants/SecoundPage/Header';
import { useState } from 'react';
function App() {
  const [startGame, setStartGame] = useState(false);
  return (
    <div className='mx-12'>
      {startGame == true ? <Header /> : <FirstPage setStartGame={setStartGame} />}
    </div>


  );
}

export default App;

import React from 'react';
import Container from './components/Container/Container';
import GameScreen from './components/gameScreen/GameScreen';


function App() {

  const resetGameData = () => {
    // Clear the game data from local storage
    localStorage.removeItem('gameData');
    localStorage.removeItem('currentScreen');

    // Optionally, if you want to force a refresh to reset the state in the components
    window.location.reload();
  }


  return (
    <Container>
      <input className='reset-game-btn' type="button" value="Reset" onClick={resetGameData} />
      <GameScreen />
    </Container>
  );
}

export default App;

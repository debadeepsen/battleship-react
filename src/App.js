import Board from './components/Board';
import logo from './logo.svg';

const App = () => {
  document.title = "Battleship";

  return (
    <div className="App">
      <div className="boards-display">
        <Board id="ai_board" caption="AI Board"></Board>
        <Board id="player_board" caption="Your Board"></Board>
      </div>
    </div>
  );
}

export default App;

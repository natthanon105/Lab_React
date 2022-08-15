import WordCard from './WordCard';
import './App.css';
import _ from 'lodash'


function App() {

  const word = ["hello","goal","dream","opportunity","happy","grow"];
  const randomElement = _.sample(word);

  const Header=()=>{
    return(
      <div className="head">
        <h1>Guess the word</h1>
      </div>
    )
  }
  return ( 
    <div className="game">
      <Header/>
        <WordCard value={randomElement}/>
    </div>
  );
}
export default App;
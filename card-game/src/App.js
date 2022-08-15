import WordCard from './WordCard';
import './App.css';
import _ from 'lodash'


function App() {

  const word = ["hello","goal","dream","opportunity","happy","grow"];
  const randomElement = _.sample(word);

  return ( 
    <div class>
      <WordCard value={randomElement}/>
    </div>
  );
}
export default App;
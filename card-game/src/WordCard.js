import React, { useState } from 'react';
import CharacterCard from './CharacterCard'
import _, { attempt } from 'lodash';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
    word,
    chars,
    attempt: 1,
    guess: '',
    completed: false
    }
}

export default function WordCard(props){
    const [state, setState] = useState(prepareStateFromWord(props.value))

    const restart=()=> {
        document.location.reload()
    }
    const activationHandler = (c) => {
        console.log(`${c} has been activated.`)

        let guess = state.guess + c
        setState({...state, guess})

        if(guess.length == state.word.length){
         if(guess == state.word){
          console.log('yeah!')
           setState({...state, guess: '', completed: true})
        }else{
          console.log('reset, next attempt')
          setState({...state, guess: '', attempt: state.attempt + 1})
        }
    }
}
    const mainClass = `mainGame ${state.completed ? 'inV' : ''}`
    const winClass = ` ${state.completed ? 'winGame' : 'inV'}`
return (
    <div className="contain">
           <div className="attm">
                <h3>Your attemp : {state.attempt}</h3>
            </div>
            <div className={winClass}>
                <h1>YOU WIN</h1>
            </div>
            <div className={mainClass}>
        {
            state.chars.map((c, i) =>
                <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt = {state.attempt}/>
            )
        }
         </div>
            <button className="btnRe" onClick={restart}>NEW GAME</button>
    </div>
);
}
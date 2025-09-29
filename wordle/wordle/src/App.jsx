import { useEffect, useRef, useState } from 'react'
import { generate } from 'random-words';
import './App.css'
import useKeyboardInput from './hooks/useKeyboardInput';

const WORD_LENGTH = 5;

export default function App() {

    const [solution, setSolution] = useState('')
    const [guesses, setGuesses] = useState(Array(6).fill(null))
    const [currentGuess, setCurrentGuess] = useState('')
    const [isGameOver, setIsGameOver] = useState(false)
    const [meaning, setMeaning] = useState([])
    const [showHint, setShowHint] = useState(false)
    const [win, setWin] = useState(false)

    useKeyboardInput({
        currentGuess,
        setCurrentGuess,
        guesses,
        setGuesses,
        isGameOver,
        setIsGameOver,
        solution
    })

    const didRun = useRef(false);

    useEffect(() => {
        if (didRun.current) return;
        didRun.current = true;
        const randomWord = generate({ minLength: WORD_LENGTH, maxLength: WORD_LENGTH })
        setSolution(randomWord)
        console.log(`Solution is ${randomWord}`)
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`)
            .then(res => res.json())
            .then(data => {
                const meanings = data[0];
                setMeaning(meanings['meanings'][0]['definitions'][0]['definition'])
            })
            .catch(() => setMeaning('No definition found'))
    }, [])

    return (
        <div className='parentBody'>
            <h1 className='wordleHeading'>WORDLE</h1>
            <button className='btn' onClick={() => setShowHint(prev => !prev)}>{showHint ? 'Hide' : 'Hint'}</button>
            <div id='showHintTrue'>
                {
                    showHint && (
                        <div>
                            {meaning}
                        </div>
                    )
                }
            </div>

            <div className='board'>
                {
                    guesses.map((guess, index) => {
                        const isCurrentGuess = index === guesses.findIndex(val => val == null)
                        return (
                            <Line
                                key={index}
                                guess={isCurrentGuess ? currentGuess : guess ?? ''}
                                isFinal={!isCurrentGuess && guess != null}
                                solution={solution}
                            />
                        )
                    })
                }
            </div>

            <button type="submit" className='btn' onClick={() => window.location.reload()}>New Wordle</button>
        </div>
    )
}

function Line({ guess, isFinal, solution }) {
    const tiles = [];
    for (let i = 0; i < WORD_LENGTH; i++) {
        //const char = guess[i]
        let className = 'tile';
        if (isFinal) {
            if (guess[i] === solution[i]) {
                className += ' correct'
            }
            else if (solution.includes(guess[i])) {
                className += ' close'
            }
            else {
                className += ' incorrect'
            }
        }
        tiles.push(<div key={i} className={className}>{guess[i]}</div>);
    }


    return (
        <div className='line'>
            {tiles}
        </div>
    )
}


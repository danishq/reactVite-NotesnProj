import { useEffect, useState } from 'react'
import { generate } from 'random-words';
import './App.css'

const WORD_LENGTH = 5;

export default function App() {

    const [solution, setSolution] = useState('')
    const [guesses, setGuesses] = useState(Array(6).fill(null))
    const [currentGuess, setCurrentGuess] = useState('')
    const [isGameOver, setIsGameOver] = useState(false)

    useEffect(() => {
        const handleType = (e) => {
            if (isGameOver) {
                return
            }
            if (e.key === 'Enter') {
                if (currentGuess.length != 5) {
                    return;
                }

                const newGuesses = [...guesses]
                newGuesses[guesses.findIndex(val => val == null)] = currentGuess;
                setGuesses(newGuesses);
                setCurrentGuess('');


                const isCorrect = solution === currentGuess;
                if (isCorrect) {
                    setIsGameOver(true)
                }
            }
            if (e.key === 'Backspace') {
                setCurrentGuess(currentGuess.slice(0, -1))
                return
            }
            if (currentGuess.length >= 5) {
                return;
            }
            const isLetter = e.key.match(/^[a-z]{1}$/) != null
            if (isLetter) {
                setCurrentGuess(currentGuess + e.key)
            }
        }
        window.addEventListener('keydown', handleType)
        return () => window.removeEventListener('keydown', handleType)
    }, [currentGuess, isGameOver, solution])

    useEffect(() => {
        //const fetchWord = async () => {
        //    const response = await fetch(API_URL)
        //    const words = await response.json()
        //    let randomWord = words[Math.floor(Math.random() * words.length)]
        //    randomWord = randomWord.toLowerCase();
        //    setSolution(randomWord)
        //    console.log(`Solution is ${randomWord}`)
        //}
        //fetchWord()
        const randomWord = generate({ minLength: 5, maxLength: 5 })
        setSolution(randomWord)
        console.log(`Solution is ${randomWord}`)

    }, [])

    return (
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
    )
}

function Line({ guess, isFinal, solution }) {
    const tiles = [];
    for (let i = 0; i < WORD_LENGTH; i++) {
        const char = guess[i]
        let className = 'tile';
        if (isFinal) {
            if (char === solution[i]) {
                className += ' correct'
            }
            else if (solution.includes(char)) {
                className += ' close'
            }
            else {
                className += ' incorrect'
            }
        }
        tiles.push(<div key={i} className={className}>{char}</div>);
    }


    return (
        <div className='line'>
            {tiles}
        </div>
    )
}

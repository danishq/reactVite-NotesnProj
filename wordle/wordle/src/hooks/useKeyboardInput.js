import { useEffect } from "react";

const WORD_LENGTH = 5;
export default function useKeyboardInput({
    isGameOver,
    currentGuess,
    setGuesses,
    setCurrentGuess,
    solution,
    setIsGameOver,
    guesses
}) {

    useEffect(() => {
        const handleType = (e) => {
            if (isGameOver) {
                return
            }
            if (e.key === 'Enter') {
                if (currentGuess.length != WORD_LENGTH) {
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
            if (currentGuess.length >= WORD_LENGTH) {
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

}



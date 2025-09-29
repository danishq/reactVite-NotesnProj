import { useState, useCallback, useRef, useEffect } from "react";

function App() {
    const [length, setLength] = useState(12);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");
    const [copied, setCopied] = useState(false);

    const passwordRef = useRef(null);

    const generatePassword = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (numberAllowed) str += "0123456789";
        if (charAllowed) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }

        setPassword(pass);
    }, [length, numberAllowed, charAllowed]);

    useEffect(() => {
        generatePassword();
    }, [length, numberAllowed, charAllowed, generatePassword]);

    const copyPassword = () => {
        navigator.clipboard.writeText(password);
        passwordRef.current.select(); // highlight text
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    // Password strength checker
    const getStrength = () => {
        if (length > 20 && numberAllowed && charAllowed) return "Strong 💪";
        if (length > 12) return "Medium 👍";
        return "Weak 👎";
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md transform hover:scale-105 transition duration-300">
                <h1 className="text-3xl font-bold text-center mb-6 text-purple-700 drop-shadow-lg">
                    Password Manager
                </h1>

                <div className="flex items-center border-2 border-purple-400 rounded-lg overflow-hidden shadow-md">
                    <input
                        type="text"
                        value={password}
                        ref={passwordRef}
                        readOnly
                        className="flex-1 p-3 outline-none text-lg text-gray-700"
                    />
                    <button
                        onClick={copyPassword}
                        className="px-4 py-2 bg-purple-600 text-white hover:bg-purple-800 transition font-semibold rounded-3xl mx-0.5"
                    >
                        {copied ? "Copied!" : "Copy"}
                    </button>
                </div>

                <div className="mt-6 flex flex-col gap-4">
                    <div>
                        <input
                            type="range"
                            min={8}
                            max={32}
                            value={length}
                            className="w-full accent-purple-600"
                            onChange={(e) => setLength(e.target.value)}
                        />
                        <label className="block text-gray-700 mt-1 font-medium">
                            Length: <span className="text-purple-600">{length}</span>
                        </label>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={numberAllowed}
                            id="numberInput"
                            onChange={() => setNumberAllowed((prev) => !prev)}
                            className="accent-purple-600"
                        />
                        <label htmlFor="numberInput" className="text-gray-700">
                            Include Numbers
                        </label>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={charAllowed}
                            id="charInput"
                            onChange={() => setCharAllowed((prev) => !prev)}
                            className="accent-purple-600"
                        />
                        <label htmlFor="charInput" className="text-gray-700">
                            Include Special Characters
                        </label>
                    </div>

                    <div className="mt-4 text-center">
                        <p
                            className={`font-semibold text-lg ${getStrength() === "Strong 💪"
                                ? "text-green-600"
                                : getStrength() === "Medium 👍"
                                    ? "text-yellow-500"
                                    : "text-red-600"
                                }`}
                        >
                            Strength: {getStrength()}
                        </p>
                    </div>

                    <button
                        onClick={generatePassword}
                        className="w-full py-3 mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition"
                    >
                        Generate New Password
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;

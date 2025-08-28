import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setChar] = useState(false);
  const [password, setpassword] = useState("");

  // ref hook
  const passwordRef = useRef(null);

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "001234567890123456789012345678912345678901234567890123456789";
    }
    if (charAllowed) str += "!@#$%*&&-—_+=[]{}";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      setpassword(pass);
    }
  }, [numberAllowed, charAllowed, length]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passGenerator();
  }, [numberAllowed, charAllowed, passGenerator, setpassword]);

  return (
    <div className="h-screen flex flex-col justify-center text-center items-center bg-gray-600">
      {/*title*/}
      <h1>Password Manager</h1>

      {/*password intput*/}
      <input
        type="text"
        className="border-2"
        placeholder="Password"
        value={password}
        readOnly
        ref={passwordRef}
      />
      <button className="mx-2" onClick={copyPasswordToClipboard}>
        copy
      </button>

      {/*slider*/}
      <div>
        <input
          type="range"
          min={8}
          max={32}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label>Length : {length}</label>
      </div>

      {/* number checkbox */}
      <div>
        <input
          type="checkbox"
          checked={numberAllowed}
          id="numberInput"
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
        />
        <label htmlFor="numberInput"> Number</label>
      </div>

      {/* char checkbox */}
      <div>
        <input
          type="checkbox"
          checked={charAllowed}
          id="charAllowed"
          onChange={() => {
            setChar((prev) => !prev);
          }}
        />
        <label htmlFor="charAllowed"> Character</label>
      </div>
    </div>
  );
}

export default App;

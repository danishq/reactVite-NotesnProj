import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen bg-green-950 duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-50 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-shadow-indigo-200 shadow-lg hover:cursor-pointer"
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-shadow-indigo-200 shadow-lg hover:cursor-pointer"
            onClick={() => setColor("gray")}
            style={{ backgroundColor: "gray" }}
          >
            gray
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-shadow-indigo-200 shadow-lg hover:cursor-pointer"
            onClick={() => setColor("purple")}
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

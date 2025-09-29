import "./App.css";

function App() {
    console.log(import.meta.env.VITE_APPWRITE_URL);
    return (
        <div className="bg-gray-950 flex justify-center items-center h-screen">
            <h1 className="text-5xl text-emerald-500">Hello How are you?</h1>
        </div>
    );
}

export default App;

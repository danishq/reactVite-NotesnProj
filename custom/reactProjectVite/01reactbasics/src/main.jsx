import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
function MyApp() {
  return (
    <>
      <h1>This is my Heading</h1>
      <a href="https://google.com">This is google Link</a>
    </>
  );
}
const Echo = <a href="https://vite.dev">visit vite</a>;
const aReactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click to visit GOOGLE!!!"
);
createRoot(document.getElementById("root")).render(
  <>
    <App />
    <MyApp />
    {aReactElement}
  </>
);

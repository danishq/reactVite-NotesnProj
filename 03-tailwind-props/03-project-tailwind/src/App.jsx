import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  return (
    <>
      <Card
        username="Danish"
        post="Team Lead"
        face="https://d29fhpw069ctt2.cloudfront.net/icon/image/84587/preview.svg"
      />
      <Card
        username="Prasoon"
        post="Product Manager"
        face="https://d29fhpw069ctt2.cloudfront.net/icon/image/74129/preview.svg"
      />
      <Card
        username="Khushal"
        post="Founding Engineer"
        face="https://d29fhpw069ctt2.cloudfront.net/icon/image/49067/preview.svg"
        myArr={newArr}
      />
    </>
  );
}

export default App;

import React, { useState } from "react";
import FormInput from "./components/Form/FormInput";
import "./styles/font.css";
import ResultCard from "./components/MapSection/ResultData/ResultCard";
import MapView from "./components/MapSection/MapView/MapView";

function App() {
  const [result, setResult] = useState({});

  return (
    <div className="App">
      <FormInput updateResult={setResult} />

      <div style={{ position: "relative" }}>
        <ResultCard result={result} />
        <MapView lat={result?.location?.lat} lng={result?.location?.lng} />
      </div>
    </div>
  );
}

export default App;

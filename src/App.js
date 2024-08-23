import { useState } from "react";
import "./App.css";
import FibonacciTable from "./components/FibonacciTable";
import FibonacciForm from "./components/FibonacciForm";

function App() {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <div
        style={{
          width: "80%",
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FibonacciForm setData={setData} />
        <FibonacciTable data={data} />
      </div>
    </div>
  );
}

export default App;

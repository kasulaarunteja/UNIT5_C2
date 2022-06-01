import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
  const [data, setData] = useState(true);

  return (
    <div className="App">
      <button
        className="toggleForm"
        onClick={() => {
          setData(!data);
        }}
      >
        {data ? "toggleForm" : "ADDHouse"}

        {/* Show text Add House or Show Rentals based on state */}
      </button>


      {data ? <Rentals /> : <AddHouse />}
      {/* Show component based on state */}
      <br />
    </div>
  );
}

export default App;
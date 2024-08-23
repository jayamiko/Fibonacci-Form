import React, { useState } from "react";
import fibonacci from "../utils/fibonacci";

function FibonacciForm({ setData }) {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const totalCells = rows * columns;
    const fibSequence = fibonacci(totalCells);
    const tableData = [];

    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        row.push(fibSequence[i * columns + j] || "");
      }
      tableData.push(row);
    }

    setData(tableData);
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "500px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <div style={{ width: "100%", display: "flex" }}>
          <label style={{ width: "100px", textAlign: "start" }}>Rows:</label>
          <input
            type="number"
            value={rows}
            onChange={(e) => setRows(parseInt(e.target.value))}
            min="1"
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ width: "100%", display: "flex" }}>
          <label style={{ width: "100px", textAlign: "start" }}>Columns:</label>
          <input
            type="number"
            value={columns}
            onChange={(e) => setColumns(parseInt(e.target.value))}
            min="1"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <button
        type="submit"
        style={{ marginTop: "10px", alignSelf: "end", padding: "4px" }}
      >
        SUBMIT
      </button>
    </form>
  );
}

export default FibonacciForm;

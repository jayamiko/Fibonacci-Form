import React from "react";

const FibonacciTable = ({ data }) => {
  return (
    <table
      border="1"
      style={{
        width: "500px",
        marginTop: "20px",
        borderCollapse: "collapse",
      }}
    >
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => {
              console.log(cell);
              return (
                <td
                  key={colIndex}
                  style={{ padding: "10px", textAlign: "center" }}
                >
                  {cell === "" ? "0" : cell}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FibonacciTable;

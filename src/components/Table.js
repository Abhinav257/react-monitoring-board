import React from "react";
import { dataModel } from "./data";

const Table = ({ status, triggerReason, riskLevel, searchedInput }) => {
  const removeSpaces = (str) => {
    let ans = "";
    for (const c in str) {
      if (str[c] !== " ") {
        ans += str[c];
      }
    }
    return ans;
  };
  const filterRisk = (str) => {
    let ans = "";

    for (const c in str) {
      if (c > 1) {
        ans += str[c];
      }
    }
    return ans;
  };
  const selectedData = dataModel[status].filter(
    (entry) =>
      (!triggerReason || entry["Trigger reason"][0] === triggerReason) &&
      (!riskLevel || filterRisk(entry["Risk level"][0]) === riskLevel) &&
      (!searchedInput ||
        entry["User"][0].substring(0, searchedInput.length).toLowerCase() ===
          searchedInput.toLowerCase())
  );
  if (selectedData.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <table className="content-table">
      <thead>
        <tr>
          {Object.keys(selectedData[0]).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {selectedData.map((entry, index) => (
          <tr key={index} style={{ height: "50px" }}>
            {Object.entries(entry).map(([key, value]) => (
              <td key={key}>
                {Array.isArray(value)
                  ? value.map((item, arrayIndex) => (
                      <div
                        key={arrayIndex}
                        className={`${removeSpaces(key)}-${arrayIndex} ${item}`}
                      >
                        {item}
                      </div>
                    ))
                  : null}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

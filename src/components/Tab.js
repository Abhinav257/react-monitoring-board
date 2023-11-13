import React, { useState } from "react";
import Searchbar from "./Searchbar";
import Table from "./Table";
import TriggerReason from "./TriggerReason";
import RiskLevel from "./RiskLevel";
import CloseButton from "./CloseButton.js";
const Tab = () => {
  const [activeTab, setActiveTab] = useState("Pending");
  const [selectedTriggerReason, setSelectedTriggerReason] = useState("");
  const [selectedRiskLevel, setSelectedRiskLevel] = useState("");
  const [searchedInput, setSearchedInput] = useState("");
  const tabs = ["Pending", "Completed"];
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  console.log(searchedInput);

  return (
    <div>
      <div
        style={{
          display: "flex",
          borderBottom: "2px solid #ccc",
          justifyContent: "space-between"
        }}
      >
        <div
          style={{
            display: "flex"
          }}
        >
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => handleTabClick(tab)}
              style={{
                padding: "10px",
                cursor: "pointer",
                borderBottom: tab === activeTab ? "2px solid blue" : "none"
              }}
            >
              {tab}
            </div>
          ))}
        </div>
        <CloseButton />
      </div>
      <div style={{ display: "flex" }}>
        <Searchbar
          onChange={(value) => {
            setSearchedInput(value);
          }}
        />
        <TriggerReason onChange={(value) => setSelectedTriggerReason(value)} />
        <RiskLevel onChange={(value) => setSelectedRiskLevel(value)} />
      </div>

      <Table
        status={activeTab}
        triggerReason={selectedTriggerReason}
        riskLevel={selectedRiskLevel}
        searchedInput={searchedInput}
      />
    </div>
  );
};

export default Tab;

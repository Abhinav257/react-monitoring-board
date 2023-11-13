import React, { useState } from "react";
import styled from "styled-components";
const DropdownContainer = styled.div`
  position: relative;
  display: block;
  float: left;
  font-size: 14px;
  height: 42px;
  line-height: 40px;
   width:90px;
  margin-top: 16px;
  margin-left: 30px;

  padding-left: 18px;
  padding-right: 30px;
  border-radius: 7px;
background: var(--background-raised, #F5F5F5);
  cursor: pointer;
  &:focus {
    background-color: #f5f5f5 ;
  }
  &:hover {
    background-color:#f5f5f5 ;
  }
  &:active {
    background-color: #f5f5f5 ; !important;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05) inset;
  }
  &:after {
    height: 0;
    width: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #777;
    transform: origin(50% 20%);
    transition: all 0.125s ease-in-out;
    content: '';
    display: block;
    margin-top: -2px;
    pointer-events: none;
    position: absolute;
    right: 10px;
    top: 50%;
  }
  &.open {
    &:after {
      transform: rotate(-180deg);
    }
    .list {
      transform: scale(1);
      opacity: 1;
      pointer-events: auto;
    }
    .option {
      cursor: pointer;
    }
  }
`;

const CurrentSelection = styled.span`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const OptionList = styled.ul`
  box-sizing: border-box;
  transition: all 0.15s cubic-bezier(0.25, 0, 0.25, 1.75), opacity 0.1s linear;
  transform: scale(0.75);
  transform-origin: 50% 0;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.09);
  background-color: #fff;
  border-radius: 6px;
  margin-top: 4px;
  padding: 3px 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 999;
  &:hover .option:not(:hover) {
    background-color: transparent !important;
  }
`;

const OptionItem = styled.li`
  cursor: default;
  font-weight: 400;
  line-height: 40px;
  outline: none;
  padding-left: 18px;
  padding-right: 29px;
  text-align: left;
  transition: all 0.2s;
  &:hover,
  &:focus {
    background-color: #f6f6f6 !important;
  }
  &.selected {
    font-weight: 600;
  }
  &.selected:focus {
    background: #f6f6f6;
  }
`;
const Placeholder = styled.span`
  border-radius: 7px;
  background: var(--background-raised, #f5f5f5);
`;

const riskLevel = ({ onChange }) => {
  const riskLevels = ["Low", "Medium", "High"];
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (reason) => {
    // console.log(reason);
    if (reason) {
      setSelectedOption(reason);
      onChange(reason);
      setIsOpen(false);
    }
  };

  return (
    <DropdownContainer
      className={`dropdown ${isOpen ? "open" : ""}`}
      tabIndex="0"
      onClick={toggleDropdown}
    >
      {selectedOption ? (
        <CurrentSelection className="current">
          {selectedOption}
        </CurrentSelection>
      ) : (
        <Placeholder className="current">Risk Level</Placeholder>
      )}
      <OptionList className="list">
        {riskLevels.map((reason, index) => (
          <OptionItem
            key={index}
            className={`option ${selectedOption === reason ? "selected" : ""}`}
            data-value={reason}
            data-display-text={reason}
            onClick={() => handleOptionClick(reason)}
          >
            {reason}
          </OptionItem>
        ))}
      </OptionList>
    </DropdownContainer>
  );
};

export default riskLevel;

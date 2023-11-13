import React from "react";

const styles = {
  container: {
    width: "30px",
    backgroundColor: "white",
    position: "relative",
    cursor: "pointer"
  },
  line: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    height: "2px",
    backgroundColor: "#050505",
    borderRadius: "2px"
  },
  lineHorizontal: {
    transform: "rotate(45deg)"
  },
  lineVertical: {
    transform: "rotate(-45deg)"
  }
};

function CloseButton({ setFormOpen }) {
  const handleClick = () => {
    setFormOpen(false);
  };
  return (
    <div style={styles.container} onClick={handleClick}>
      <div style={{ ...styles.line, ...styles.lineHorizontal }}></div>
      <div style={{ ...styles.line, ...styles.lineVertical }}></div>
    </div>
  );
}

export default CloseButton;

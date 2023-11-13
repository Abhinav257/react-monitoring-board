import React, { useState } from "react";
import AccountForm from "./AccountForm";

const CloseButton = () => {
  const [isFormOpen, setFormOpen] = useState(false);
  const styles = {
    button: {
      fontFamily: "Lettera Text LL",
      transition: "0.15s all ease-in-out"
    },
    all: {
      marginRight: "4px",
      float: "right"
    },
    curve: {
      background: "#D13B3B",
      color: "#fff",
      borderRadius: "6px",
      border: "none",
      fontSize: "16px",
      padding: "10px 30px",
      textDecoration: "none",
      cursor: "pointer"
    }
  };
  console.log(isFormOpen);

  return (
    <div style={styles.all}>
      <div className="one">
        <a href="#">
          <button style={styles.curve} onClick={() => setFormOpen(true)}>
            Close account
          </button>
        </a>
      </div>
      {isFormOpen && <AccountForm setFormOpen={setFormOpen} />}
    </div>
  );
};

export default CloseButton;

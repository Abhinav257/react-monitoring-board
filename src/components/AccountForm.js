import React, { useState } from "react";
import CrossButton from "./CrossButton";
function CloseAccountForm({ setFormOpen }) {
  const inputStyle = {
    width: "27em",
    height: "2em",
    paddingLeft: "16px",
    paddingRight: "16px",
    paddingTop: "8px",
    paddingBottom: "8px",
    background: "white",
    borderTopLeftRadius: "9px",
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",
    borderBottomLeftRadius: "9px",
    border: "1px #E4E4E4 solid",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "10px",
    marginTop: "3%",
    marginRight: "10%"
  };

  const styles = {
    button: {
      fontFamily: "Muli, sans-serif",
      marginRight: "10px",
      transition: "0.15s all ease-in-out",
      cursor: "pointer",
      width: "100%"
    },
    all: {
      float: "right",
      marginLeft: "60px",
      justifyContent: "center",
      display: "inline-flex"
    },
    curve: {
      color: "#ADADAD",
      borderRadius: "6px",
      border: "none",
      fontSize: "16px",
      padding: "15px 30px",
      textDecoration: "none"
    }
  };

  const [email, setEmail] = useState("");
  const [wantToFileUAR, setWantToFileUAR] = useState("");
  const [reason, setReason] = useState("");
  const [note, setNote] = useState("");
  const [chargeClosureFee, setChargeClosureFee] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormOpen(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: "rgba(255, 255, 255, 0.9)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "400px",
          padding: "20px",
          paddingTop: "0px",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "10px"
          }}
        >
          <h2> Close Account </h2>
          <CrossButton setFormOpen={setFormOpen} />
        </div>
        <label htmlFor="email" style={{ display: "block" }}>
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <div
          style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
        >
          <label
            htmlFor="wantToFileUAR"
            style={{ marginRight: "40px", marginTop: "10px" }}
          >
            Want to file UAR
          </label>
          <div style={{ marginTop: "10px" }}>
            <input
              type="radio"
              id="yes"
              name="wantToFileUAR"
              value="Yes"
              checked={wantToFileUAR === "Yes"}
              onChange={() => setWantToFileUAR("Yes")}
            />
            <label
              htmlFor="yes"
              style={{ cursor: "pointer", marginRight: "40px" }}
            >
              Yes
            </label>
          </div>
          <div style={{ marginTop: "10px" }}>
            <input
              type="radio"
              id="no"
              name="wantToFileUAR"
              value="No"
              checked={wantToFileUAR === "No"}
              onChange={() => setWantToFileUAR("No")}
            />
            <label htmlFor="no" style={{ cursor: "pointer" }}>
              No
            </label>
          </div>
        </div>

        <label htmlFor="reason" style={{ display: "block", marginTop: "25px" }}>
          Reason
        </label>
        <textarea
          name="reason"
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          style={inputStyle}
        />

        <label htmlFor="note" style={{ display: "block", marginTop: "20px" }}>
          Note
        </label>
        <textarea
          name="note"
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          style={inputStyle}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "18px"
          }}
        >
          <input
            type="radio"
            id="chargeClosureYes"
            name="chargeClosureFee"
            value="Yes"
            checked={chargeClosureFee === "Yes"}
            onChange={() => setChargeClosureFee("Yes")}
          />
          <label
            htmlFor="chargeClosureYes"
            style={{
              cursor: "pointer"
            }}
          >
            Charge Closure Fee
          </label>
          <div style={styles.all}>
            <div className="one">
              <a href="#">
                <button
                  type="submit"
                  style={{ ...styles.curve, ...styles.button }}
                >
                  Close account
                </button>
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CloseAccountForm;

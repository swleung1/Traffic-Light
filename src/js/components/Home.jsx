import React, { useState } from "react";

const Home = () => {
  const [color, setColor] = useState("red");
  const [hasPurple, setHasPurple] = useState(false);

  const cycleColor = () => {
    const colors = hasPurple
      ? ["red", "yellow", "green", "purple"]
      : ["red", "yellow", "green"];
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  const addPurple = () => {
    setHasPurple(true);
  };

  const lightStyle = (lightColor) => ({
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    margin: "10px auto",
    cursor: "pointer",
    transition: "all 0.3s ease",
    backgroundColor: color === lightColor ? lightColor : "#333",
    border: "3px solid #222",
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#1a1a1a",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#444",
          padding: "20px",
          borderRadius: "20px",
          border: "4px solid #222",
        }}
      >
        {/* Red Light */}
        <div style={lightStyle("red")} onClick={() => setColor("red")} />

        {/* Yellow Light */}
        <div style={lightStyle("yellow")} onClick={() => setColor("yellow")} />

        {/* Green Light */}
        <div style={lightStyle("green")} onClick={() => setColor("green")} />

        {/* Purple Light (conditional) */}
        {hasPurple && (
          <div
            style={lightStyle("purple")}
            onClick={() => setColor("purple")}
          />
        )}
      </div>

      <div style={{ marginTop: "30px" }}>
        <button
          onClick={cycleColor}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginRight: "10px",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Cycle Colors
        </button>

        <button
          onClick={addPurple}
          disabled={hasPurple}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            backgroundColor: hasPurple ? "#6c757d" : "#6f42c1",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: hasPurple ? "not-allowed" : "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => {
            if (!hasPurple) e.target.style.backgroundColor = "#5a32a3";
          }}
          onMouseOut={(e) => {
            if (!hasPurple) e.target.style.backgroundColor = "#6f42c1";
          }}
        >
          {hasPurple ? "Purple Added!" : "Add Purple"}
        </button>
      </div>

      <div
        style={{
          marginTop: "20px",
          color: "white",
          fontSize: "18px",
          textAlign: "center",
        }}
      >
        Current Color:{" "}
        <span
          style={{
            color: color,
            fontWeight: "bold",
          }}
        >
          {color.toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export default Home;

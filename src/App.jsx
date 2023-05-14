import Svg from "./svg";
import "./styles.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          background:
            "linear-gradient(0deg, rgba(69,82,98,1) 0%, rgba(174,186,200,1) 71%, rgba(255,255,255,1) 100%)",
        }}
      >
        <Svg />
      </div>
    </>
  );
}

export default App;

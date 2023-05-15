import Svg from "./svg";
import "./styles.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function App() {
  const [volume, setVolume] = useState(1);
  const [activo, setActivo] = useState(true);
  const [ani, setAni] = useState(0);
  const audio = useRef(new Audio("/ultra.mp3"));

  useEffect(() => {
    audio.current.volume = volume; // actualizar el bolumen
  }, [volume]);

  useEffect(() => {
    audio.current.addEventListener("ended", handleAudioEnded); // agregar el evento de repetir al cargar el componente
    return () => {
      audio.current.removeEventListener("ended", handleAudioEnded); // quitar el evento de repetir al desmontar el componente
    };
  }, []);

  useEffect(() => {
    let uso = setInterval(() => {
      setAni((valor) => (valor = Math.floor(Math.random() * 101)));
    }, 500);
    return () => {
      clearInterval(uso);
    };
  }, []);

  const handleAudioEnded = () => {
    audio.current.currentTime = 0; // Reinicia la reproducción al principio
    audio.current.play(); // Vuelve a reproducir el audio
  };

  const play = () => {
    if (activo) {
      setActivo(false);
      audio.current.play(); // darle play al audio
    }
  };

  return (
    <>
      <div onClick={() => play()}>
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

        <input
          className="range"
          value={volume}
          min="0"
          max="1"
          step="0.1"
          style={{
            position: "fixed",
            bottom: "60px",
            right: "-50px",
            transform: "rotate(-90deg)",
            outline: "none",
            backgroundSize: `${Math.round(volume * 100)}% 100%`,
            // height: "200px",
            // width: "20px",
          }}
          type="range"
          onChange={(e) => {
            const newVolume = parseFloat(e.target.value);
            setVolume(newVolume);
          }}
        ></input>
        <div
          style={{
            height: `${ani}px`,
            width: "15px",
            backgroundColor: "#d2d2d2",
            position: "fixed",
            bottom: "12px",
            right: "35px",
            transition: "0.5s",
          }}
        ></div>
      </div>
    </>
  );
}

export default App;

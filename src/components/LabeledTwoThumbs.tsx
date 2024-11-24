/*

* Vinted frontend

* Range Slider component

Configured with ChatGpt and doc : https://github.com/tajo/react-range/blob/main/examples/LabeledTwoThumbs.tsx

*/

import React from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 5;
const MIN = 10;
const MAX = 500;

const LabeledTwoThumbs = ({ rtl, userPrice, setUserPrice }) => {
  const handleChange = (newValues) => {
    setUserPrice(newValues); // Met à jour les valeurs dans le parent
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: "10px",
      }}
    >
      <Range
        values={userPrice} // Les valeurs actuelles des thumbs
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={handleChange} // Appelé à chaque changement de valeurs
        renderTrack={({ props, children }) => (
          // La piste du slider (track)
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "30px",
              display: "flex",
              width: "300px",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values: userPrice, // Les valeurs des thumbs
                  colors: ["#ccc", "#2cb1ba", "#ccc"], // Couleurs des segments
                  min: MIN, // Minimum du slider
                  max: MAX, // Maximum du slider
                  rtl: rtl, // Direction (gauche à droite ou droite à gauche)
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props }) => (
          // Les thumbs (poignées) du slider
          <div
            {...props}
            style={{
              ...props.style,
              height: "15px",
              width: "15px",
              borderRadius: "50px",
              backgroundColor: "#2cb1ba",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "45px",
                top: "-25px",
                color: "#fff",
                fontSize: "12px",
                padding: "4px",
                borderRadius: "4px",
                backgroundColor: "#2cb1ba",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {userPrice[index]} € {/* Affiche les valeurs */}
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default LabeledTwoThumbs;

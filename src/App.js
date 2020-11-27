import React, { useState } from "react";
import AnimationReactSpring from "./AnimationReactSpring";
import AnimationGSAP from "./AnimationGSAP";
import AnimationFramerMotion from "./AnimationFramerMotion";

const ANIMATIONS = [
  {
    element: <AnimationReactSpring />,
    label: "react-spring",
  },
  {
    element: <AnimationGSAP />,
    label: "GSAP",
  },
  {
    element: <AnimationFramerMotion />,
    label: "framer-motion",
  },
];

function App() {
  const [animation, setAnimation] = useState(ANIMATIONS[0]);

  return (
    <div style={{ padding: "16px" }}>
      <div style={{ display: "flex" }}>
        Pick animation library:
        {ANIMATIONS.map((animation) => (
          <button
            key={`button-${animation.label}`}
            onClick={() => {
              setAnimation(animation);
            }}
          >
            {animation.label}
          </button>
        ))}
      </div>
      <div>
        <strong>{animation.label}</strong>
      </div>
      {animation.element}
    </div>
  );
}

export default App;

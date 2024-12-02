import React, { useEffect, useState } from "react";
import "./FloatingNames.css";

const FloatingNames = ({ names }) => {
  const [floatingNames, setFloatingNames] = useState([]);

  useEffect(() => {
    console.log("Names received in FloatingNames:", names);
    const interval = setInterval(() => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const id = Math.random().toString(36).substr(2, 9);
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      setFloatingNames((prev) => [
        ...prev,
        { id, name: randomName, top, left },
      ]);
      setTimeout(() => {
        setFloatingNames((prev) => prev.filter((item) => item.id !== id));
      }, 2000);
    }, 250);

    return () => clearInterval(interval);
  }, [names]);

  return (
    <div className="floating_names">
      {floatingNames.map((item) => (
        <div
          key={item.id}
          className="floating_name"
          style={{ top: `${item.top}%`, left: `${item.left}%` }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default FloatingNames;

import React from "react";
import Background from "/src/components/Background";
import Foreground from "/src/components/Foreground";

const App = () => {
  return (
    <>
      <div className="relative">
        <Background />
        <Foreground />
      </div>
    </>
  );
};

export default App;

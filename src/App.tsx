import React, { useState } from "react";
import Store from "./components/Modal";
import ChartUI from "./components/Chart";
const App: React.FC = () => {
  return (
    <>
      <Store />

      <ChartUI />
    </>
  );
};

export default App;

import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>별 걸 다 해보려 합니다.</h1>
      <button onClick={() => navigate("kanye")}>Go Kanye</button>
    </div>
  );
};

export default Main;

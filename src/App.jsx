import React, { useState } from "react";
import Profile from "./components/profile";
import Card from "./components/card";
import data from "./data.json";
import "./app.scss";
// console.log(data);

function App() {
  const [timeFrame, setTimeFrame] = useState("weekly");

  const card = data.map((item) => {
    return <Card key={item.title} {...item} timeFrame={timeFrame} />;
  });

  // console.log(card);

  return (
    <div className="App">
      <div className="section">
        <div className="section__profile">
          <Profile setTimeFrame={setTimeFrame} timeFrame={timeFrame} />
        </div>
        <div className="section__card">
          {/*  */}
          {card}
        </div>
      </div>
    </div>
  );
}

export default App;

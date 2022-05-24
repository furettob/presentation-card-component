import "./styles.css";
import Card from "./components/Card";
import CardV2 from "./components/CardV2";

import data from "./utils/data.json";

export default function App() {
  return (
    <div className="App">
      <h1 className="pc-mainTitle">Let's get to know each other (v5)</h1>
      <h2 className="pc-mainSubtitle">We can build a card to present ourselves</h2>
      <div className="pc-card-container">
        {data.map((elem, index) => {
          return <CardV2 key={`${elem.id}_${index}`} elem={elem} />
        })}
      </div>
    </div>
  );
}

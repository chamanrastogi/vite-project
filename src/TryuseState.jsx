import { useState } from "react";
import Menu from "./component/Menu";

const TryuseState = () => {
  const [x, setX] = useState(0);

  const incVar = () => {
    setX(x + 1);
  };
  const decVar = () => {
    if (x > 0) {
      setX(x - 1);
    }
  };
  return (
    <div>
      <Menu />
      <div className="card">
        <div className="card-header">Result: {x}</div>
        <div className="card-body">
          <button className="btn btn-info me-2 py-2" onClick={incVar}>
            +
          </button>
          <button className="btn btn-danger py-2" onClick={decVar}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default TryuseState;

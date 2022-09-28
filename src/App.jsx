import Canvas from "./Canvas";
import Animate from "./components/Animate";

const App = () => {
  return (
    <>
      <h1 className="main-title">React Applications</h1>
      <div className="container">
        <Canvas />
        <Animate />
      </div>
    </>
  );
};

export default App;

import { useState } from "react";
import Button from "./components/Buttons";

function App() {
  const [Color, setColor] = useState("grey");

  return (
    <div className="w-screen h-screen duration-1000" style={{ backgroundColor: Color }}>
      <h1 className="text-center text-2xl font-bold text-white p-6">Background Color Changer</h1>

      {/* Button container */}
      <div className="fixed flex flex-wrap justify-center gap-4 bottom-12 w-full">
        <Button text="Blue" onClick={() => setColor("blue")} />
        <Button text="Red" onClick={() => setColor("red")} />
        <Button text="Green" onClick={() => setColor("green")} />
        <Button text="Yellow" onClick={() => setColor("yellow")} />
      </div>
    </div>
  );
}

export default App;

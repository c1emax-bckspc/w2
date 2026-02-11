import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TWHicheel from "./Component/TWHicheel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <TWHicheel />
      </div>
    </>
  );
}

export default App;

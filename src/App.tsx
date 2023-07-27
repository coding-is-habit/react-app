import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>버튼</Button>
    </div>
  );
}

export default App;

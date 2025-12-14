import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    // Redirect to player.html on component mount
    window.location.href = '/player.html';
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Redirecting to StreamHub Player...</p>
      </header>
    </div>
  );
}

export default App;

import "./styles.css";
import { useState, useEffect, useRef } from "react";

const totalMs = 10 * 1000;
const interval = 1 * 1000;
const totalCycles = totalMs / interval;
const progressMade = 10;
export default function App() {
  const [progress, setProgress] = useState(0);
  const timer = useRef();
  const cyclesCompleted = useRef(0);

  useEffect(() => {
    timer.current = setInterval(() => {
      cyclesCompleted.current += 1;
      setProgress((prev) => prev + progressMade);
      if (cyclesCompleted.current == totalCycles) {
        clearInterval(timer.current);
      }
    }, interval);
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return (
    <div className="App">
      <div className="progress-container">
        <div
          className="progressFill"
          style={{ transform: `translateX(${progress - 100}%)` }}
        >
          <span>Progress {progress}%</span>
        </div>
      </div>
    </div>
  );
}

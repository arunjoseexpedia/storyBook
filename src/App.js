import "./styles.css";
import StoryBook from "./StoryBook";
import AddStory from "./AddStory";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [view, setView] = useState("view");

  const addStory = () => {
    setView("add");
  };

  return (
    <div>
      {view === "view" ? <StoryBook addStory={addStory} /> : <AddStory />}
    </div>
  );
}

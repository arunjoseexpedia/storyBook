import "./styles.css";
import StoryBook from "./StoryBook";
import AddStory from "./AddStory";
import { useState, useEffect } from "react";
import { getStoryDetails } from "./GetStoryDetails";

export default function App() {
  const [view, setView] = useState("view");
  const [data, setData] = useState([]);

  useEffect(() => {
    let arry = getStoryDetails();
    setData([...arry]);
  }, []);

  const addStory = () => {
    setView("add");
  };
  const viewStory = () => {
    setView("view");
  };

  const updateStory = (title, para) => {
    let obj = {};
    obj["title"] = title;
    obj["para"] = para;
    console.log(obj);
  };

  return (
    <div>
      {view === "view" ? (
        <StoryBook addStory={addStory} data={data} />
      ) : (
        <AddStory viewStory={viewStory} updateStory={updateStory} />
      )}
    </div>
  );
}

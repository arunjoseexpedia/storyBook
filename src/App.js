import "./styles.css";
import StoryBook from "./StoryBook";
import AddStory from "./AddStory";
import { useState, useEffect } from "react";
import { getStoryDetails } from "./GetStoryDetails";
import Footer from "./Footer";

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
    obj["id"] = data.slice(-1)[0].id + 1;
    obj["title"] = title;
    obj["text"] = para;
    setData((oldArray) => [...oldArray, obj]);
  };

  return (
    <div>
      {view === "view" ? (
        <StoryBook addStory={addStory} data={data} />
      ) : (
        <AddStory viewStory={viewStory} updateStory={updateStory} />
      )}
      <Footer />
    </div>
  );
}

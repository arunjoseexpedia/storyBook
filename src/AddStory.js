import { useState } from "react";
import Button from "@mui/material/Button";

export default function AddStory(props) {
  const [title, setTitle] = useState("");
  const [paragraph, setPara] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.id === "title") {
      setTitle(event.target.value);
    }
    if (event.target.id === "para") {
      let arry = event.target.value.split(" ");
      for (let i = 0; i < arry.length; i++) {
        if (arry[i] !== "") {
          setWordCount((count) => count + 1);
        }
      }

      setPara(event.target.value);
    }
  };
  const viewStory = (event) => {
    event.preventDefault();
    props.viewStory();
  };
  const updateStory = (event) => {
    event.preventDefault();
    props.updateStory(title, paragraph);
  };
  return (
    <div className="container-fluid">
      <form align="center" onSubmit={updateStory}>
        <div>
          <label>
            Page Title
            <br />
            <input
              className="pagetitle"
              onChange={handleChange}
              id="title"
              type="text"
              placeholder="Page Title"
              required
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            <textarea onChange={handleChange} id="para" required>
              {" "}
            </textarea>
          </label>
          {wordCount > 0 ? wordCount : ""}
        </div>
        <div>
          <Button className="backViolet" type="submit">
            SAVE PAGE
          </Button>
          &nbsp;
          <Button
            variant="contained"
            type="button"
            onClick={(event) => viewStory(event)}
          >
            BACK TO BOOK
          </Button>
        </div>
      </form>
    </div>
  );
}

import { useEffect, useState } from "react";
import Button from "@mui/material/Button";

export default function StoryBook(props) {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [active, setActive] = useState(1);

  useEffect(() => {
    let arry = props.data;

    setData([...arry]);
    if (arry && arry.length > 0) {
      setText(arry[0].text);
    }
  }, [props.data]);

  const addStory = () => {
    props.addStory();
  };

  const handleChange = (event, id) => {
    event.preventDefault();

    setText(data[event.target.id - 1].text);

    setActive(Number(event.target.id));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4 backgroundColor padd-right padd-left">
          {data &&
            data.length > 0 &&
            data.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`height-80 border + ${
                    active === index + 1 ? "activedata" : ""
                  }`}
                  id={item.id}
                  onClick={(e) => handleChange(e, index)}
                >
                  {item.title.toUpperCase()}
                </div>
              );
            })}
        </div>
        <div className="col-8">
          <br />

          {text}

          <Button
            className="button-corner"
            variant="outlined"
            onClick={() => addStory()}
          >
            <b>Add New Page + </b>
          </Button>
        </div>
      </div>
    </div>
  );
}

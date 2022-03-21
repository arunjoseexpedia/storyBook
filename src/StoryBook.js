import { useEffect, useState } from "react";
import { getStoryDetails } from "./GetStoryDetails";
export default function StoryBook() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [active, setActive] = useState(1);

  useEffect(() => {
    let arry = getStoryDetails();
    setData([...arry]);
    setText(arry[0].text);
  }, []);

  const handleChange = (event, id) => {
    event.preventDefault();

    setText(data[event.target.id - 1].text);

    setActive(Number(event.target.id));
  };

  return (
    <div className="container-fluid">
      <div className="row border">
        <div className="col-4">
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
        <div className="col-8">{text}</div>
      </div>
    </div>
  );
}

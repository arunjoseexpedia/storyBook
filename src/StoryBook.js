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

  const handleChange = (event) => {
    event.preventDefault();

    setText(data[event.target.id - 1].text);
    setActive(event.target.id);
    console.log("active", active);
  };
  const rootClassNames = () => {
    let names = ["border", "height-80"];
    return names.join(" ");
  };
  return (
    <div className="container-fluid">
      <div className="row border">
        <div className="col-4">
          {data &&
            data.length > 0 &&
            data.map((item, index) => {
              console.log("index", index + 1);

              return (
                <div
                  key={index}
                  className="border height-80"
                  id={item.id}
                  onClick={handleChange}
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

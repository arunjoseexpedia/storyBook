export default function AddStory(props) {
  const viewStory = (event) => {
    event.preventDefault();
    props.viewStory();
  };
  const updateStory = (event) => {
    event.preventDefault();
    console.log("updateStory");
  };
  return (
    <div className="container-fluid">
      <form align="center">
        <div>
          <label>
            Page Title
            <br />
            <input className="pagetitle" type="text" required />
          </label>
        </div>
        <div>
          <label>
            <textarea required> </textarea>
          </label>
        </div>
        <div>
          <button type="submit" onClick={(event) => updateStory(event)}>
            Save
          </button>
          <button type="button" onClick={(event) => viewStory(event)}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
}

export default function AddStory(props) {
  const viewStory = (event) => {
    event.preventDefault();
    props.viewStory();
  };
  const updateStory = (event) => {
    event.preventDefault();
    props.updateStory();
  };
  return (
    <div className="container-fluid">
      <form align="center" onSubmit={updateStory}>
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
          <button type="submit">Save</button>
          <button type="button" onClick={(event) => viewStory(event)}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
}

export default function AddStory() {
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
            <textarea> </textarea>
          </label>
        </div>
        <div>
          <button type="submit">Save</button>
          <button type="submit">Back</button>
        </div>
      </form>
    </div>
  );
}

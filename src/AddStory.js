export default function AddStory() {
  return (
    <div className="container-fluid">
      <form>
        <label>
          Page Title
          <input type="text" required />
        </label>
        <label>
          Essay:
          <textarea> </textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

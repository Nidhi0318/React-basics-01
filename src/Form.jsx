import "./Form.css";
function Form() {
  return (
    <div>
      <h2>Registration Form</h2>
      <form>
        <div>
          <label>Name:</label><br />
          <input type="text" placeholder="Enter your name" />
        </div>
        <div>
          <label>Email:</label><br />
          <input type="email" placeholder="Enter your email" />
        </div>
        <div>
          <label>Password:</label><br />
          <input type="password" placeholder="Enter your password" />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Form;
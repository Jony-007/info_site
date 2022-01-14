import logo from "../logo.svg";

function FunFact() {
  return (
    <div>
      <img src={logo} className="app-logo" alt="React Logo" width="80px" />
      <header>
        <h1>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>powers thousands of enterprise including mobile apps</li>
        </ul>
      </header>
    </div>
  );
}

export default FunFact;

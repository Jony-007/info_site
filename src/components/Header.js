import logo from "../logo.svg";

function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <div>
          <img src={logo} className="app-logo" alt="react logo" />
          <h3 className="brand-title">ReactFacts</h3>
        </div>

        <h4>React Course - Project 1</h4>
      </nav>
    </header>
  );
}

export default Header;

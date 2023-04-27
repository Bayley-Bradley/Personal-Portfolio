import "./headerComponent.module.css";

export default function HeaderComponent() {
  return (
    <div className="container">
      <nav className="navigation">
        <img src="" alt="Bradley Bayley" />
        <ul className="listContainer">
          <li className="listItem">
            <a href="" target="_self" className="navigationLink">
              Home
            </a>
          </li>
          <li className="listItem">
            <a href="" target="_self" className="navigationLink">
              About Me
            </a>
          </li>
          <li className="listItem">
            <a href="" target="_self" className="navigationLink">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

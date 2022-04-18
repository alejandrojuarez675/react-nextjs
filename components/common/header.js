import Link from "next/link";

export default () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container container-fluid">
      <Link href="/">
        <a className="navbar-brand">myApp</a>
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link active">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about-us">
              <a className="nav-link active">About us</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

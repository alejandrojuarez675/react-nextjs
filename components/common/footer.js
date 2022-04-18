import Link from "next/link";

export default () => (
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <Link href="/">
          <a className="nav-link active">Home</a>
        </Link>
      </div>
      <div className="col-md-4">
        <Link href="/about-us">
          <a className="nav-link active">About us</a>
        </Link>
      </div>
    </div>
    <p>
      <small>coding by https://github.com/alejandrojuarez675</small>
    </p>
  </div>
);

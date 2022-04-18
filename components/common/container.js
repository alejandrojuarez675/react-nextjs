import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

export default (props) => (
  <div>
    <Head>
      <title>myApp</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
    </Head>
    <Header></Header>
    <div className="container">{props.children}</div>
    <Footer></Footer>
  </div>
);

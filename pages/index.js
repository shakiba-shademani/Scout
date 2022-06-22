import Head from "next/head";
import Nav from "../components/Nav";
import Body from "../components/body";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-shabnam">
      <Head>
        <title>Service Center Scout</title>
      </Head>
      <Nav />
      <Body />
      <Footer />
    </div>
  );
}

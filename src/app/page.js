import Image from "next/image";
import Nav from "./Nav";
import Hero from "./Hero";
import Main from "./Main";
import Footer from "./Footer";
export default function Home() {
  return (
    <main className="">
      <Nav />
      <Hero />
      <Main />
      <Footer />
    </main>
  );
}

import { Blog } from "./component/Blog";
import { Choose } from "./component/Choose";
import { Footer } from "./component/Footer";
import { Header } from "./component/Header";
import { Help } from "./component/Help";
import { Hero } from "./component/Hero";
import { Popular } from "./component/Popular";
import { Product } from "./component/Product";
import { Testimonial } from "./component/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Product />
      <Choose />
      <Help />
      <Popular />
      <Testimonial />
      {/* <Blog /> */}
      <Footer />
    </>
  );
}

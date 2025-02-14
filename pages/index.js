import Layout from "@/components/layout/Layout";
import About1 from "@/components/sections/About1";
import Banner1 from "@/components/sections/Banner1";
import Blog1 from "@/components/sections/Blog1";
import Categories1 from "@/components/sections/Categories1";
import Fact1 from "@/components/sections/Fact1";
import Testimonial1 from "@/components/sections/Testimonial1";

export default function Home1() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Banner1 />
        {/* Princiapls Message */}
        <About1 />
        {/* Vision & Mission */}
        <Testimonial1 />
        {/* Counter */}
        <Fact1 />
        {/* News & Achievements */}
        <Blog1 />
        {/* Our Latest services */}
        <Categories1 />
      </Layout>
    </>
  );
}

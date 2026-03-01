
import Navbar from "@/src/components/shared/Navbar";
import AboutUs from "@/src/components/home/about-us";
import Banner from "@/src/components/home/banner";
import BuiltEvents from "@/src/components/home/builtEvents";
import Faq from "@/src/components/home/faq";
import HowWorks from "@/src/components/home/how-works";
import PricingPlan from "@/src/components/home/pricing-plan";
import Footer from "@/src/components/shared/Footer";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="absolute w-full lg:pt-8">
          <Navbar />
        </div>

        <div className="">
          <Banner />
          <BuiltEvents />
          <HowWorks />
          <PricingPlan />
          <AboutUs />
          <Faq />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

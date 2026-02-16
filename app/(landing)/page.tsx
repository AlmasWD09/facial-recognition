import AboutUs from "@/components/home/about-us";
import Banner from "@/components/home/banner";
import BuiltEvents from "@/components/home/builtEvents";
import Faq from "@/components/home/faq";
import HowWorks from "@/components/home/how-works";
import PricingPlan from "@/components/home/pricing-plan";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

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

import { Metadata } from "next"
import { Button } from "components/Button/Button"
import Header from "components/Header/Header"
import HeaderMobile from "components/HeaderMobile/HeaderMobile"
import { LP_GRID_ITEMS } from "lp-items"
import Footer from "components/Footer/Footer"
import PhotoSection from "components/PhotoSection/PhotoSection"
import PhotoSection2 from "components/PhotoSection2/PhotoSection2"
import Chef from "components/Chef/Chef"
import WriteSection from "components/WriteSection/WriteSection"
import WriteSection2 from "components/WriteSection2/WriteSection2"
import Whoweare from "components/Whoweare/Whoweare"
import DesignMasters from "components/DesignMasters/DesignMasters"
import Bar from "components/Bar/Bar"
import Divider from "components/Divider/Divider"
import MobileOfferButton from "components/MobileOfferButton/MobileOfferButton"
import ScrollToTopButton from "components/ScrollToTopButton/ScrollToTopButton"
import PropertyAdvantagesAccordion from "components/PropertyAdvantagesAccordion/PropertyAdvantagesAccordion"

export default function Web() {
  return (
    <>
     <div className="bg-black text-white">
     

      <HeaderMobile />
      <Header />
      <Bar/>
      <Whoweare />
      <DesignMasters/>
      <Divider />
      <WriteSection2 />
      <PhotoSection />
      <WriteSection />
      <PhotoSection2 />
    
      <Chef />
      <PropertyAdvantagesAccordion/>
      <Footer />
    </div>
    <ScrollToTopButton/>
    <MobileOfferButton/>
    </>
    
  )
}

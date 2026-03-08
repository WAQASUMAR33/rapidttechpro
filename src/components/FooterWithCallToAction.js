import CallToAction from "./CallToAction";
import Footer from "./Footer";

export default function FooterWithCallToAction(){
    return(
        <>
        <div id="page1">
            <CallToAction/>
        </div>
        <div id="page2" className="">
            <Footer/>
        </div>
        {/* <div className="relative">
            <div className="z-10">
        <CallToAction/>
        </div>
        <div className="absolute top-100 z-0 w-full">
        <Footer/>
        </div>
        </div> */}
        </>
    )
}
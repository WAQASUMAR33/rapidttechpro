export const metadata = {
  title: "Our Work | RapidTechPro",
  description: "Browse RapidTechPro's portfolio of successful projects spanning web, mobile, and enterprise technology solutions.",
  alternates: {
    canonical: "https://rapidtechpro.com/work",
  },
};

import CallToAction from "@/components/CallToAction";
import UserLayout from "../UserLayout";
import WorkMainPage from "./MainPage";

export default function WorkPage(){
    return(
        <>
        <UserLayout>
            <WorkMainPage/>
            <CallToAction />
        </UserLayout>
        </>
    )
}
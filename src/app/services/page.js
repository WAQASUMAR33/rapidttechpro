export const metadata = {
  title: "Services | RapidTechPro",
  description: "Explore RapidTechPro's full range of technology services — web development, mobile apps, UI/UX, e-commerce, and more.",
  alternates: {
    canonical: "https://rapidtechpro.com/services",
  },
};

import UserLayout from "../UserLayout"
import MainServicePage from "./Mainpage"
export default function ServicePage(){
    return(
        <UserLayout>
        <MainServicePage/>
        </UserLayout>
    )
}
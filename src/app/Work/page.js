import UserLayout from "@/app/UserLayout";
import WorkMainPage from "./MainPage";
import CallToAction from "@/components/CallToAction";

export const metadata = {
    title: "Case Studies & Portfolio | RapidTechPro Success Stories",
    description: "Explore our latest projects and success stories. See how RapidTechPro helps businesses innovate and grow with custom technology solutions.",
    keywords: "portfolio, case studies, software projects, success stories, client work, web design portfolio",
};

export default function WorkPage() {
    return (
        <UserLayout>
            <WorkMainPage />
            <CallToAction />
        </UserLayout>
    );
}
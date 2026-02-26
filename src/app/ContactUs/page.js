import UserLayout from "../UserLayout";
import ContactUsClient from "./ContactUsClient";

export const metadata = {
    title: "Contact Us | RapidTechPro",
    description: "Get in touch with RapidTechPro for your software development needs. We offer free consultancy and expert guidance for your next project.",
    keywords: "contact us, software consultancy, project inquiry, RapidTechPro contact, tech support",
};

export default function ContactUs() {
    return (
        <UserLayout>
            <ContactUsClient />
        </UserLayout>
    );
}
'use client'
import CallToAction from "@/components/CallToAction";
import ContactUsForm from "./components/Form";
import GlobalOffice from "./components/GlobalOfficeLocation";

export default function ContactUsClient() {
    return (
        <div className="bg-white pt-[100px]">
            <ContactUsForm />
            <GlobalOffice />
            <CallToAction />
        </div>
    );
}

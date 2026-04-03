'use client'
import CallToAction from "@/components/CallToAction";
import UserLayout from "../UserLayout";
import ContactUsForm from "./components/Form";
import GlobalOffice from "./components/GlobalOfficeLocation";

export default function ContactUs(){
    return(
        <>
        <UserLayout>
           
            <ContactUsForm/>
            <GlobalOffice/>
            <CallToAction/>
       
        </UserLayout>
        </>
    )
}
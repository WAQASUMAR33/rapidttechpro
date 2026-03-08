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
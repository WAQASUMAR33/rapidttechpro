'use client'
import UserLayout from "../UserLayout";
import NewBlogCategorySlider from "./components/BlogCategories";

export default function Blog(){
    return(
        <>
        <UserLayout>
        <div className="bg-black w-full h-full py-20">
        <NewBlogCategorySlider/>
        
        </div>
        </UserLayout>
        </>
    )
}
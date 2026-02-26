import UserLayout from "../UserLayout"
import MainServicePage from "./Mainpage"

export const metadata = {
    title: "Professional Software Services | RapidTechPro",
    description: "Explore our wide range of professional software services, including mobile app development, ecommerce solutions, and custom web applications.",
    keywords: "it services, custom software, digital transformation, mobile apps, web development, pos solutions",
};

export default function ServicePage() {
    return (
        <UserLayout>
            <MainServicePage />
        </UserLayout>
    )
}
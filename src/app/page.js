import HomeClient from "@/components/HomeClient";

export const metadata = {
  title: "RapidTechPro | Innovative Custom Software Solutions",
  description: "Transform your business with RapidTechPro's custom software development. We build scalable web applications, mobile apps, and UI/UX designs tailored to your needs.",
  keywords: "custom software, web applications, mobile app development, UI/UX design, RapidTechPro home, business automation",
  alternates: {
    canonical: "https://rapidtechpro.com",
  },
};

export default function Home() {
  return <HomeClient />;
}

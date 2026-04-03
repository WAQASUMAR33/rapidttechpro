import "./globals.css";
import StoreProvider from "@/components/StoreProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterReveal from "@/components/FooterReveal";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  metadataBase: new URL("https://rapidtechpro.com"),
  title: "RapidTechPro",
  description: "Advanced solutions for your business needs.",
  icons: {
    icon: "/company/logo.png",
  },
  alternates: {
    canonical: "https://rapidtechpro.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="font-manrope antialiased text-gray-900 min-h-screen overflow-x-hidden"
        suppressHydrationWarning
      >
        <StoreProvider>
          <FooterReveal footer={<Footer />}>
            <Header />
            {children}
          </FooterReveal>
        </StoreProvider>

      </body>
    </html>
  );
}

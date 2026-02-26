// pages/privacy-policy.js
import React from 'react';
import UserLayout from '../UserLayout';

export const metadata = {
  title: "Privacy Policy | RapidTechPro",
  description: "Our Privacy Policy outlines how RapidTechPro collects, uses, and protects your personal information. Your privacy is our priority.",
  keywords: "privacy policy, data protection, personal information, user privacy, RapidTechPro privacy",
};

const PrivacyPolicy = () => {
  return (
    <UserLayout>
      <div className=" min-h-screen py-12">
        <div className="container mx-auto  lg:px-8 max-w-7xl py-10">
          <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">
            Privacy Policy for RapidTechPro
          </h1>
          <div className="space-y-6 text-gray-700 leading-relaxed text-2xl">
            <p>
              Welcome to RapidTechPro! Your privacy is critically important to us. This privacy policy explains how we collect, use, disclose, and protect your personal information when you visit or make a purchase from www.rapidtecpro.com.
            </p>

            <h2 className="text-2xl font-semibold mt-8">1. Introduction</h2>
            <ol>
              <li>
                “RapidTechPro” is a software development company specializing in delivering high-quality web, app, and software solutions for various clients.
              </li>
              <li>

                This Privacy Policy explains how we collect, use, and protect user information when accessing or using our services."
              </li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8">2. Information We Collect</h2>
            <p>
              <strong>Personal Information:</strong> Includes name, email, phone number, and other relevant contact information, often collected through contact forms or project onboarding.
            </p>
            <p>
              <strong>Usage Data:</strong> Details about how users interact with our services, including IP address, device type, browser, and other diagnostic data.
            </p>
            <p>
              <strong>Cookies & Tracking Technologies:</strong> We use cookies or similar tracking technologies, and users have options to manage them.
            </p>

            <h2 className="text-2xl font-semibold mt-8">3. How We Use Information</h2>
            <p>
              <strong>Service Delivery:</strong> To develop, customize, and improve services.
            </p>
            <p>
              <strong>Communication:</strong> To send updates, promotional offers, and respond to inquiries.
            </p>
            <p>
              <strong>Improvement & Analysis:</strong> For internal analytics and research to better understand user needs and improve offerings.
            </p>

            <h2 className="text-2xl font-semibold mt-8">4. Data Sharing & Disclosure</h2>
            <p>
              Data may be shared under certain circumstances, such as with service providers and partners, solely for business purposes.
            </p>

            <h2 className="text-2xl font-semibold mt-8">5. Data Security</h2>
            <p>
              We implement industry-standard security practices, including encryption and secure servers, to protect your data. However, no system is completely foolproof.
            </p>

            <h2 className="text-2xl font-semibold mt-8">6. User Rights</h2>
            <p>
              <strong>Access and Correction:</strong> Users can request access to, update, or delete their data.
            </p>
            <p>
              <strong>Opt-Out:</strong> Options are available for opting out of promotional communications or managing cookie preferences.
            </p>

            <h2 className="text-2xl font-semibold mt-8">7. Changes to This Policy</h2>
            <p>
              We will notify users of changes by updating the date at the top or sending a notification for significant updates.
            </p>

            <h2 className="text-2xl font-semibold mt-8">8. Contact Us</h2>
            <p>
              For more information about our privacy practices or to make a complaint, please contact us:
            </p>
            <p className="text-gray-900 font-medium">
              RapidTechPro<br />
              Pakistan<br />
              +92 340 3051059<br />
              info@rapidtechpro.com
            </p>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default PrivacyPolicy;

// pages/terms-and-conditions.js
import React from 'react';
import UserLayout from '../UserLayout';

export const metadata = {
  title: "Terms and Conditions | RapidTechPro",
  description: "Read the Terms and Conditions for using RapidTechPro's services and website. Understand your rights and responsibilities as a user.",
  keywords: "terms and conditions, legal agreement, user responsibilities, service terms, RapidTechPro legal",
};

const TermsAndConditions = () => {
  return (
    <UserLayout>
      <div className="min-h-screen py-12">
        <div className="container mx-auto lg:px-8 max-w-7xl py-10">
          <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">
            Terms and Conditions for RapidTechPro
          </h1>
          <div className="space-y-6 text-gray-700 leading-relaxed text-2xl">
            <p>
              Welcome to RapidTechPro! By using our website and services, you agree to abide by the following terms and conditions. Please read them carefully.
            </p>

            <h2 className="text-2xl font-semibold mt-8">1. Introduction</h2>
            <ol>
              <li>
                These Terms and Conditions govern your use of the RapidTechPro website and services. By accessing or using our services, you agree to comply with these terms.
              </li>
              <li>
                RapidTechPro reserves the right to modify or update these terms at any time, so please review them regularly.
              </li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8">2. User Responsibilities</h2>
            <p>
              You agree to use the RapidTecPro website and services only for lawful purposes and in accordance with these terms. You are responsible for ensuring that your use of the website does not violate any local, state, or international laws.
            </p>

            <h2 className="text-2xl font-semibold mt-8">3. Account Registration</h2>
            <p>
              In order to use certain features of our website or services, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>

            <h2 className="text-2xl font-semibold mt-8">4. Intellectual Property</h2>
            <p>
              All content on the RapidTecPro website, including text, graphics, logos, images, and software, is the property of RapidTecPro and is protected by intellectual property laws. You may not use, reproduce, or distribute any content from our website without our explicit permission.
            </p>

            <h2 className="text-2xl font-semibold mt-8">5. Service Availability</h2>
            <p>
              While we strive to provide continuous and uninterrupted access to our services, we cannot guarantee that the website or services will always be available without errors or disruptions.
            </p>

            <h2 className="text-2xl font-semibold mt-8">6. Payment Terms</h2>
            <p>
              If you purchase any services or products from RapidTecPro, you agree to pay the applicable fees as described on our website or as otherwise agreed upon. All payments are subject to our billing terms.
            </p>

            <h2 className="text-2xl font-semibold mt-8">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, RapidTecPro shall not be liable for any indirect, incidental, special, or consequential damages arising out of your use of our services or website.
            </p>

            <h2 className="text-2xl font-semibold mt-8">8. Termination</h2>
            <p>
              RapidTecPro reserves the right to suspend or terminate your access to our services at any time without notice if you violate these terms or engage in unlawful conduct.
            </p>

            <h2 className="text-2xl font-semibold mt-8">9. Changes to Terms</h2>
            <p>
              RapidTecPro reserves the right to update or modify these terms at any time. Any changes will be effective immediately upon posting the revised terms on this page.
            </p>

            <h2 className="text-2xl font-semibold mt-8">10. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law principles.
            </p>

            <h2 className="text-2xl font-semibold mt-8">11. Contact Us</h2>
            <p>
              If you have any questions or concerns about these Terms and Conditions, please contact us:
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

export default TermsAndConditions;

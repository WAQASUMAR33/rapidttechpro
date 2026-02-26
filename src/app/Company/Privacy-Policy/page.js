'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import UserLayout from '@/app/UserLayout';

gsap.registerPlugin(ScrollTrigger);

export default function PrivacyPolicy() {
  const privacySections = useRef([]);

  useEffect(() => {
    privacySections.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50, scaleX: 0.8 },
        {
          opacity: 1,
          y: 0,
          scaleX: 1,
          ease: 'power2.out',
          duration: 0.5,
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            end: 'top 90%',
            scrub: 1,
            toggleActions: 'play reverse play reverse',
          },
          delay: index * 0.2, // Staggered delay for animation
        }
      );
    });
  }, []);

  return (
    <div className="h-full w-full flex flex-col">
      <UserLayout>
        <div className="bg-white min-h-screen flex flex-col items-center py-16 mt-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Privacy Policy of RapidTechPro</h1>
          <p className="text-center text-gray-600 mb-16 max-w-6xl">
            At RapidTechPro, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, store, protect, and share your personal information when you interact with our website, services, and products. By accessing or using our website (www.rapidtechpro.com) or engaging with our software development services, you consent to the practices described in this policy.
          </p>

          <div className="max-w-4xl space-y-16 flex flex-col justify-center items-center">
            <section
              ref={(el) => (privacySections.current[0] = el)}
              className="bg-white border border-gray-800 rounded-lg p-8 transform transition-transform duration-300 origin-center"
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600">
                <strong>Personal Information:</strong> When you visit our website or engage with our services, we may collect personal details to deliver the best possible experience. This includes your name, email address, company name, phone number, billing address, and any other information you voluntarily provide when contacting us.
              </p>
              <p className="text-gray-600">
                <strong>Project Information:</strong> To offer you the most tailored software development services, we collect project-specific details such as your requirements, objectives, timelines, and other relevant information when you initiate a project with us.
              </p>
              <p className="text-gray-600">
                <strong>Device Information:</strong> When you visit our website, we automatically collect information about your device, such as the browser type, IP address, time zone, device model, and certain cookies installed on your device. We also gather information on how you interact with our website, including the pages you visit. This is referred to as "Device Information."
              </p>
              <p className="text-gray-600">
                <strong>Account Information:</strong> If you create an account with RapidTechPro for ongoing support, updates, or collaboration, we collect your username, email address, and password to facilitate these interactions.
              </p>
            </section>

            <section
              ref={(el) => (privacySections.current[1] = el)}
              className="bg-white border border-gray-800 rounded-lg p-8 transform transition-transform duration-300 origin-center"
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600">
                We use the information we collect for the following purposes:
                <ul className="list-disc pl-8 mt-4 text-gray-600">
                  <li><strong>To Provide Services:</strong> We utilize your project information to deliver tailored software development solutions. This includes designing, coding, testing, deploying, and providing ongoing support for your custom software.</li>
                  <li><strong>To Communicate with You:</strong> We may use your contact information to update you on project progress, provide customer support, send technical documentation, invoices, and other related communications.</li>
                  <li><strong>To Improve Our Services:</strong> Device information helps us analyze user activity, improve website functionality, enhance user experience, and refine our marketing strategies.</li>
                  <li><strong>To Screen for Security Risks:</strong> We may use your information to identify and mitigate potential security threats or fraudulent activities.</li>
                </ul>
              </p>
            </section>

            <section
              ref={(el) => (privacySections.current[2] = el)}
              className="bg-white border border-gray-800 rounded-lg p-8 transform transition-transform duration-300 origin-center"
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. Sharing Your Information</h2>
              <p className="text-gray-600">
                We may share your personal information with trusted third parties under specific circumstances, as outlined below:
                <ul className="list-disc pl-8 mt-4 text-gray-600">
                  <li><strong>Third-Party Service Providers:</strong> To provide our services effectively, we may share data with trusted partners such as cloud hosting providers, payment processors, email services, and project management platforms. We ensure that these third parties comply with confidentiality and data protection standards.</li>
                  <li><strong>Analytics Tools:</strong> We use tools like Google Analytics to track website usage and improve our offerings. These third-party analytics tools may collect usage data, but they do not have access to your personal information unless you provide it.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or when necessary to protect our rights, comply with legal obligations, or prevent illegal activity.</li>
                </ul>
              </p>
            </section>

            <section
              ref={(el) => (privacySections.current[3] = el)}
              className="bg-white border border-gray-800 rounded-lg p-8 transform transition-transform duration-300 origin-center"
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. Your Rights and Control Over Your Information</h2>
              <p className="text-gray-600">
                <ul className="list-disc pl-8 mt-4 text-gray-600">
                  <li><strong>Access and Updates:</strong> If you are located in the European Union or other jurisdictions with data protection laws, you have the right to access the personal data we hold about you. You can also request updates, corrections, or deletions. Please contact us directly to exercise these rights.</li>
                  <li><strong>Data Transfers:</strong> Please note that your personal data may be transferred and stored on servers located outside your country, including in countries like Canada and the United States.</li>
                  <li><strong>Opt-Out:</strong> You have the right to opt out of receiving marketing communications. If you no longer wish to receive newsletters, promotional emails, or notifications, you can unsubscribe by following the instructions in the emails or by contacting us directly.</li>
                </ul>
              </p>
            </section>

            <section
              ref={(el) => (privacySections.current[4] = el)}
              className="bg-white border border-gray-800 rounded-lg p-8 transform transition-transform duration-300 origin-center"
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. Data Retention</h2>
              <p className="text-gray-600">
                We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy, including for legal or accounting purposes. You may request the deletion of your data by reaching out to us, and we will comply unless we are obligated to retain it by law.
              </p>
            </section>

            <section
              ref={(el) => (privacySections.current[5] = el)}
              className="bg-white border border-gray-800 rounded-lg p-8 transform transition-transform duration-300 origin-center"
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">6. Data Security</h2>
              <p className="text-gray-600">
                We implement reasonable security measures to protect your personal information against unauthorized access, alteration, or destruction. While we strive to ensure the security of your data, please note that no online transmission or storage method can guarantee 100% security.
              </p>
            </section>

            <section
              ref={(el) => (privacySections.current[6] = el)}
              className="bg-white border border-gray-800 rounded-lg p-8 transform transition-transform duration-300 origin-center"
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">7. Changes to This Privacy Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy periodically to reflect changes in our practices, services, or legal obligations. Any changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <section
              ref={(el) => (privacySections.current[7] = el)}
              className="bg-white border border-gray-800 rounded-lg p-8 transform transition-transform duration-300 origin-center"
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">8. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy or wish to exercise your rights regarding your personal data, please contact us at:
              </p>
              <p className="text-gray-600 mt-4">
                <strong>RapidTechPro</strong>
                <br />
                Akbar Plaza, Punjab Center, Phalia Road, Mandi Bahauddin, Punjab, Pakistan
                <br />
                <strong>Email:</strong> info@rapidtechpro.com
                <br />
                <strong>Phone:</strong> +92 340 3051059
              </p>
            </section>
          </div>
        </div>
      </UserLayout>
    </div>
  );
}

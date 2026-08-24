export const metadata = {
  title: "Privacy Policy | RapidTechPro",
  description: "Learn how RapidTechPro collects, protects, and handles your personal information, project assets, and data.",
  alternates: {
    canonical: "/company/privacy-policy",
  },
};

import React from 'react';
import UserLayout from '@/app/UserLayout';
import Link from 'next/link';
import { FaShieldAlt, FaLock, FaUserCheck, FaServer, FaGlobe, FaEnvelope } from 'react-icons/fa';

export default function PrivacyPolicyPage() {
  const lastUpdated = "August 2026";

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction & Overview",
      icon: FaShieldAlt,
      content: (
        <>
          <p className="mb-4">
            Welcome to <strong>RapidTechPro</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are a global software engineering, mobile application, AI, and digital transformation agency operating from Dubai, United Arab Emirates and Pakistan.
          </p>
          <p>
            We are dedicated to safeguarding the privacy, confidentiality, and security of our clients, prospective partners, and website visitors. This Privacy Policy details how we collect, process, store, and protect your personal information and project data when you use our website (<Link href="/" className="text-[#0FB5B7] hover:underline font-semibold">www.rapidtechpro.com</Link>) or engage our development and consulting services.
          </p>
        </>
      ),
    },
    {
      id: "information-collected",
      title: "2. Information We Collect",
      icon: FaUserCheck,
      content: (
        <>
          <p className="mb-4">We collect information strictly necessary to provide, manage, and scale your technology solutions:</p>
          <ul className="space-y-3 list-disc pl-6 text-gray-600">
            <li>
              <strong className="text-gray-900">Personal & Contact Information:</strong> Your full name, corporate email address, phone/WhatsApp number, company name, job title, and billing details provided when submitting contact forms or during onboarding.
            </li>
            <li>
              <strong className="text-gray-900">Project Specifications & Data:</strong> Project briefs, technical requirements, wireframes, user personas, third-party API credentials, and development assets shared for solution delivery.
            </li>
            <li>
              <strong className="text-gray-900">Technical & Device Telemetry:</strong> IP addresses, browser types, operating systems, geographic location, referring URLs, and website navigation patterns collected via standard analytics.
            </li>
            <li>
              <strong className="text-gray-900">Communication Records:</strong> Transcripts of emails, meetings, and support requests to ensure high-quality project execution.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "use-of-information",
      title: "3. How We Use Your Information",
      icon: FaServer,
      content: (
        <>
          <p className="mb-4">We process information based on legitimate business interests and contract execution:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-1">Service Execution</h4>
              <p className="text-sm text-gray-600">Designing, programming, testing, deploying, and maintaining custom software, web, and mobile solutions.</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-1">Client Collaboration</h4>
              <p className="text-sm text-gray-600">Providing milestone updates, sprint reviews, invoices, and ongoing technical support.</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-1">Security & Integrity</h4>
              <p className="text-sm text-gray-600">Monitoring systems against malicious threats, unauthorized access, and fraud prevention.</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-1">Legal & Compliance</h4>
              <p className="text-sm text-gray-600">Fulfilling corporate tax, accounting, and international legal compliance obligations.</p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "nda-confidentiality",
      title: "4. Confidentiality, NDA & Code Ownership",
      icon: FaLock,
      content: (
        <>
          <p className="mb-4">
            Confidentiality is fundamental to our engineering partnerships. We routinely execute Non-Disclosure Agreements (NDAs) prior to project discovery.
          </p>
          <ul className="space-y-3 list-disc pl-6 text-gray-600">
            <li>
              <strong className="text-gray-900">Proprietary Source Code:</strong> All code, intellectual property, logic, and databases built specifically for your project remain strictly confidential.
            </li>
            <li>
              <strong className="text-gray-900">Access Controls:</strong> Only engineers, project managers, and QA specialists assigned directly to your project have access to your codebase and credentials.
            </li>
            <li>
              <strong className="text-gray-900">No Selling of Data:</strong> We never sell, rent, or monetize client data or code under any circumstance.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "data-sharing",
      title: "5. Third-Party Services & Subprocessors",
      icon: FaGlobe,
      content: (
        <>
          <p className="mb-4">
            We only share data with verified enterprise infrastructure partners necessary for development, deployment, and analytics:
          </p>
          <ul className="space-y-2 list-disc pl-6 text-gray-600">
            <li><strong>Cloud & Hosting Infrastructure:</strong> Amazon Web Services (AWS), Google Cloud Platform (GCP), Vercel, and Cloudflare.</li>
            <li><strong>Development & Collaboration:</strong> GitHub, GitLab, Jira, and Slack.</li>
            <li><strong>Analytics & CRM:</strong> Google Analytics and privacy-compliant CRM platforms.</li>
          </ul>
        </>
      ),
    },
    {
      id: "security",
      title: "6. Data Security & Storage",
      icon: FaShieldAlt,
      content: (
        <>
          <p className="mb-4">
            We implement stringent technical and organizational security measures to protect your information:
          </p>
          <ul className="space-y-2 list-disc pl-6 text-gray-600">
            <li>End-to-end TLS/SSL encryption for all data in transit.</li>
            <li>AES-256 encryption for data at rest and database records.</li>
            <li>Multi-factor authentication (MFA) and least-privilege role-based access for all internal team accounts.</li>
            <li>Periodic security audits and vulnerability patch management.</li>
          </ul>
        </>
      ),
    },
    {
      id: "client-rights",
      title: "7. Your Rights & Data Control (GDPR / CCPA)",
      icon: FaUserCheck,
      content: (
        <>
          <p className="mb-4">
            Depending on your location (including the European Union and California), you have significant rights regarding your data:
          </p>
          <ul className="space-y-2 list-disc pl-6 text-gray-600">
            <li><strong>Right to Access:</strong> Request a copy of the personal information we hold about you.</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete information.</li>
            <li><strong>Right to Erasure:</strong> Request permanent deletion of your data (&quot;Right to be Forgotten&quot;).</li>
            <li><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format.</li>
            <li><strong>Opt-Out:</strong> Unsubscribe from marketing or promotional communications at any time.</li>
          </ul>
        </>
      ),
    },
    {
      id: "contact",
      title: "8. Contact Us",
      icon: FaEnvelope,
      content: (
        <>
          <p className="mb-4">
            For questions, concerns, or data requests regarding this Privacy Policy, please reach out to our privacy compliance team:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-200 mt-4">
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Dubai Office (UAE)</h4>
              <p className="text-sm text-gray-600">
                Building 11, Level 7, Bay Square,<br />
                Business Bay, Dubai - 23304, UAE
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Direct Contact</h4>
              <p className="text-sm text-gray-600">
                Email: <a href="mailto:info@rapidtechpro.com" className="text-[#0FB5B7] font-semibold hover:underline">info@rapidtechpro.com</a><br />
                Phone: <a href="tel:+923403051059" className="text-[#0FB5B7] font-semibold hover:underline">+92 340 3051059</a>
              </p>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <UserLayout>
      <div className="bg-white min-h-screen pt-28 pb-20">
        {/* Header Hero */}
        <div className="max-w-5xl mx-auto px-6 text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#0FB5B7] bg-[#0FB5B7]/10 mb-4 border border-[#0FB5B7]/20">
            Legal & Compliance
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            How RapidTechPro protects, manages, and respects your data and intellectual property.
          </p>
          <p className="text-xs text-gray-400 font-semibold mt-3">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          {sections.map((sec) => {
            const Icon = sec.icon;
            return (
              <div
                key={sec.id}
                id={sec.id}
                className="p-8 md:p-10 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#0FB5B7]/10 flex items-center justify-center text-[#0FB5B7]">
                    <Icon className="text-lg" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                    {sec.title}
                  </h2>
                </div>
                <div className="text-gray-600 leading-relaxed text-base">
                  {sec.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </UserLayout>
  );
}

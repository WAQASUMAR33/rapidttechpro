export const metadata = {
  title: "Terms of Service | RapidTechPro",
  description: "Read the Terms of Service governing the use of RapidTechPro's website, development engagements, and technological services.",
  alternates: {
    canonical: "/company/terms-of-service",
  },
};

import React from 'react';
import UserLayout from '@/app/UserLayout';
import Link from 'next/link';
import { FaFileContract, FaLaptopCode, FaHandshake, FaMoneyBillWave, FaShieldAlt, FaBalanceScale, FaBan, FaEnvelope } from 'react-icons/fa';

export default function TermsOfServicePage() {
  const lastUpdated = "August 2026";

  const terms = [
    {
      id: "agreement",
      title: "1. Agreement to Terms",
      icon: FaFileContract,
      content: (
        <>
          <p className="mb-4">
            These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you or the entity you represent (&quot;Client,&quot; &quot;you&quot;) and <strong>RapidTechPro</strong> (&quot;Company,&quot; &quot;we,&quot; &quot;us&quot;).
          </p>
          <p>
            By accessing our website (<Link href="/" className="text-[#0FB5B7] hover:underline font-semibold">www.rapidtechpro.com</Link>), requesting a consultation, or entering into a Statement of Work (SOW) or development agreement, you acknowledge that you have read, understood, and agreed to be bound by these Terms.
          </p>
        </>
      ),
    },
    {
      id: "scope-of-services",
      title: "2. Services & Engineering Engagements",
      icon: FaLaptopCode,
      content: (
        <>
          <p className="mb-4">
            RapidTechPro provides enterprise and startup technology solutions, including but not limited to:
          </p>
          <ul className="space-y-2 list-disc pl-6 text-gray-600 mb-4">
            <li>Custom Web Application & SaaS Development</li>
            <li>iOS and Android Native / Cross-Platform Mobile Applications</li>
            <li>Artificial Intelligence (AI), Machine Learning & Workflow Automation</li>
            <li>UI/UX Design, Wireframing & Prototyping</li>
            <li>E-Commerce Platforms & Custom POS Solutions</li>
            <li>Cloud Architecture, DevOps & Ongoing System Maintenance</li>
          </ul>
          <p className="text-sm text-gray-500 italic">
            Specific deliverables, timelines, milestones, and fees are defined individually in mutual Statements of Work (SOW) or project proposals.
          </p>
        </>
      ),
    },
    {
      id: "intellectual-property",
      title: "3. Intellectual Property & Code Ownership",
      icon: FaShieldAlt,
      content: (
        <>
          <ul className="space-y-3 list-disc pl-6 text-gray-600">
            <li>
              <strong className="text-gray-900">Client Deliverables Ownership:</strong> Upon full receipt of agreed milestone payments, the Client obtains full ownership of all custom code, UI designs, and deliverables created specifically for the project.
            </li>
            <li>
              <strong className="text-gray-900">Pre-Existing Tools & Libraries:</strong> RapidTechPro retains ownership of its pre-existing proprietary frameworks, open-source libraries, and reusable starter kits, granting the Client a perpetual, royalty-free license to use them as integrated in the final deliverable.
            </li>
            <li>
              <strong className="text-gray-900">Portfolio Rights:</strong> Unless explicitly restricted by an NDA, RapidTechPro reserves the right to display non-sensitive project descriptions, mockups, and client logos in its portfolio and case studies.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "client-responsibilities",
      title: "4. Client Obligations & Collaboration",
      icon: FaHandshake,
      content: (
        <>
          <p className="mb-4">To ensure seamless and timely execution, the Client agrees to:</p>
          <ul className="space-y-2 list-disc pl-6 text-gray-600">
            <li>Provide clear, timely feedback, asset approvals, and necessary credentials during development sprints.</li>
            <li>Ensure all materials, assets, copy, and trademarks provided to RapidTechPro are legally licensed and free from third-party infringement.</li>
            <li>Designate a primary project point of contact for sprint sign-offs and change requests.</li>
          </ul>
        </>
      ),
    },
    {
      id: "payment-terms",
      title: "5. Payment Terms & Invoicing",
      icon: FaMoneyBillWave,
      content: (
        <>
          <ul className="space-y-3 list-disc pl-6 text-gray-600">
            <li>
              <strong className="text-gray-900">Milestone-Based Billing:</strong> Projects are billed according to agreed milestone phases (e.g., discovery/design, frontend/backend sprint, final deployment).
            </li>
            <li>
              <strong className="text-gray-900">Payment Schedules:</strong> Invoices are payable within the timeframe specified in the project agreement (typically Net-7 or Net-15 days).
            </li>
            <li>
              <strong className="text-gray-900">Scope Variations:</strong> Features or requirements requested outside the agreed Statement of Work will be quoted separately as a Change Order.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "warranties",
      title: "6. Quality Assurance & Bug-Fix Warranty",
      icon: FaBalanceScale,
      content: (
        <>
          <p className="mb-4">
            RapidTechPro stands behind the quality of its engineering. Following project deployment, we provide a <strong>30-day complimentary bug-fix warranty period</strong> covering any reproducible defects or deviations from the agreed specifications.
          </p>
          <p className="text-sm text-gray-500">
            Post-warranty support, feature additions, and infrastructure monitoring are available under ongoing Maintenance and Service Level Agreements (SLAs).
          </p>
        </>
      ),
    },
    {
      id: "liability",
      title: "7. Limitation of Liability",
      icon: FaBan,
      content: (
        <>
          <p className="mb-4 text-gray-600">
            To the maximum extent permitted by applicable law, RapidTechPro shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business interruption. In no event shall our total aggregate liability exceed the total fees paid by the Client for the specific service under dispute.
          </p>
        </>
      ),
    },
    {
      id: "governing-law",
      title: "8. Governing Law & Dispute Resolution",
      icon: FaBalanceScale,
      content: (
        <>
          <p className="mb-4 text-gray-600">
            These Terms and any project engagements shall be governed by and construed in accordance with the laws of Dubai, United Arab Emirates and Pakistan, without regard to conflict of law principles. Any dispute arising under these Terms shall be resolved through good-faith mutual negotiations before seeking formal legal arbitration.
          </p>
        </>
      ),
    },
    {
      id: "contact",
      title: "9. Inquiries & Legal Notices",
      icon: FaEnvelope,
      content: (
        <>
          <p className="mb-4 text-gray-600">
            For questions or legal notices regarding these Terms of Service, please contact our legal team:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-200 mt-4">
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Corporate Headquarters</h4>
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
            Terms & Conditions
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            The standard terms and principles governing our engineering engagements and technology solutions.
          </p>
          <p className="text-xs text-gray-400 font-semibold mt-3">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          {terms.map((sec) => {
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

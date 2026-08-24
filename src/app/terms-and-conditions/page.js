export const metadata = {
  title: "Terms of Service | RapidTechPro",
  description: "Read the Terms of Service governing the use of RapidTechPro's website, development engagements, and technological services.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

import TermsOfServicePage from '../company/terms-of-service/page';

export default function TermsAndConditionsRootPage() {
  return <TermsOfServicePage />;
}

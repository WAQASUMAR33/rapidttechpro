import Link from "next/link";

export const metadata = {
  title: "Page Not Found | RapidTechPro",
  description: "The page you are looking for does not exist.",

};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-black">
      <h1 className="text-7xl font-bold text-[#0FB5B7] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-white mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-400 mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#0FB5B7] text-white rounded-lg font-medium hover:bg-[#0FB5B7]/80 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}

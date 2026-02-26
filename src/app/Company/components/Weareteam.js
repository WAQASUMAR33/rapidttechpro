import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

export default function FeatureSection() {
  return (
    <div className="w-full flex items-center py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {/* Left Image Section */}
        <div className="flex items-center justify-center">
          <Image
            src="https://www.teambonding.com/wp-content/uploads/2019/02/communication.jpg" // Replace with actual image URL
            alt="Incredible team communication and collaboration at RapidTechPro"
            width={600}
            height={400}
            className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500 w-full h-auto"
          />
        </div>

        {/* Right Text Section */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-800 leading-tight">
            We are an <span className="text-blue-500">incredible team</span>
          </h2>
          <p className="text-lg text-gray-600">
            We create templates that are perfect for any business. Our task is to
            help you create a website as soon as possible.
          </p>

          {/* Feature List */}
          <div className="space-y-6">
            <div className="flex items-start">
              <FaCheckCircle className="text-green-500 text-2xl mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">7 Home Pages</h3>
                <p className="text-gray-500">
                  Choose what suits you best. Options you’ll love.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FaCheckCircle className="text-green-500 text-2xl mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">100% Mobile Ready</h3>
                <p className="text-gray-500">
                  Easy viewing and fast loading on all modern gadgets.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FaCheckCircle className="text-green-500 text-2xl mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Premium Resources</h3>
                <p className="text-gray-500">
                  Only the best quality and thoughtful functionality. Everything to
                  make you feel comfortable.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FaCheckCircle className="text-green-500 text-2xl mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Free Support</h3>
                <p className="text-gray-500">
                  Always ready to assist you with any questions or issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

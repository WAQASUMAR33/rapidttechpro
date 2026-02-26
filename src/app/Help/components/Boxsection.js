import { FaShippingFast, FaUndoAlt, FaBan, FaQuestionCircle } from "react-icons/fa";

export default function BoxSection() {
    return (
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-6 py-8">
            <a
                href="/Orders"
                className="w-full h-full rounded-xl flex flex-col group justify-center items-center border p-6 hover:shadow-lg transition"
            >
                <FaShippingFast className="text-6xl text-blue-600 mb-4" />
                <span className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
                    Track Your Order
                </span>
            </a>
            <a
                href="/Orders"
                className="w-full h-full rounded-xl flex flex-col group justify-center items-center border p-6 hover:shadow-lg transition"
            >
                <FaUndoAlt className="text-6xl text-green-600 mb-4" />
                <span className="text-lg font-semibold text-gray-800 group-hover:text-green-600">
                    Return Order
                </span>
            </a>
            <a
                href="/Orders"
                className="w-full h-full rounded-xl flex flex-col group justify-center items-center border p-6 hover:shadow-lg transition"
            >
                <FaBan className="text-6xl text-red-600 mb-4" />
                <span className="text-lg font-semibold text-gray-800 group-hover:text-red-600">
                    Cancel Order
                </span>
            </a>
            <a
                href="/Orders"
                className="w-full h-full rounded-xl flex flex-col group justify-center items-center border p-6 hover:shadow-lg transition"
            >
                <FaQuestionCircle className="text-6xl text-purple-600 mb-4" />
                <span className="text-lg font-semibold text-gray-800 group-hover:text-purple-600">
                    FAQs
                </span>
            </a>
        </div>
    );
}

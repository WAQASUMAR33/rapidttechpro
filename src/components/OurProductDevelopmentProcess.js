'use client';
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef,useState,useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

const OurProductDevelopmentProcess = () => {
    return (
        <div className="bg-black">
            <div className="md:h-60 md:pl-20 md:pt-20 font-semibold text-3xl py-10 px-2 md:text-6xl">
                <h1 className="text-white">Our Product</h1>
                <h1 className="text-bluish">Development Process</h1>
                <p className="flex text-white text-sm md:text-xl font-medium items-center gap-2 mt-4">
                    View More <FaArrowRight />
                </p>
            </div>
            <HorizontalScrollCarousel />
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });

    // State to store window width
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Update isMobile based on the window width
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize(); // Check once on mount
        window.addEventListener("resize", handleResize);
        
        // Cleanup on unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Apply different transform ranges based on isMobile
    const x = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "0%"] : ["0%", "-83%"]);

    return (
        <section ref={targetRef} className="relative md:h-[300vh] bg-black w-full">
            <div className="sticky top-0 flex h-screen items-center md:overflow-hidden overflow-auto">
                <motion.div
                    style={{ x }}
                    className="flex h-screen items-center md:gap-10 md:flex-nowrap flex-wrap"
                >
                    {cards.map((card) =>
                        card.id === "custom" ? (
                            <CustomSlide card={card} key={card.id} />
                        ) : (
                            <Card card={card} key={card.id} />
                        )
                    )}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <motion.div
            className="relative w-full md:w-screen md:h-screen flex items-center bg-black group overflow-hidden"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
        >
            <div className="grid grid-cols-1 md:gap-0 gap-3 md:grid-cols-2 w-full ">
                <div className="flex flex-col text-left md:p-16 ">
                    <p className="text-xl md:text-2xl text-white mb-4">{card.date}</p>
                    <h1 className="text-4xl md:text-7xl text-bluish font-bold">{card.title}</h1>
                    <p className="mt-4 text-sm md:text-2xl text-white md:max-w-2xl">{card.description}</p>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                    <motion.div
                        className="border-2 border-white md:w-[420px] md:h-[570px] w-[200px] h-[200px] rounded-full overflow-hidden md:p-2"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img
                            src={card.url}
                            alt={card.title}
                            className="md:w-[400px] md:h-[550px] w-full h-full object-cover md:object-cover rounded-full"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

const CustomSlide = ({ card }) => (
    <motion.div
        className="relative w-screen h-screen flex items-center bg-black group overflow-hidden"
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
    >
        <div className="grid grid-cols-1 w-full">
        <div className="flex flex-col text-left md:p-16 ">
                    <p className="text-xl md:text-2xl text-white mb-4">{card.date}</p>
                    <h1 className="text-4xl md:text-7xl text-bluish font-bold">{card.title}</h1>
                    <p className="mt-4 text-sm md:text-2xl text-white md:max-w-2xl">{card.description}</p>
                </div>
            <div className="w-full h-full flex flex-col md:flex-row justify-start p-6 items-center md:p-16">
                <motion.div
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="flex bg-black w-full">
                        <div className="flex md:flex-row flex-col items-center ">
                            {supports.map((support, index) => (
                                <div key={index} className="flex flex-col md:flex-row items-center">
                                    {/* Circle */}
                                    <div className="flex flex-col items-center justify-center md:w-48 md:h-48 w-20 h-20 bg-black border-2 border-gray-400 rounded-full text-white text-center">
                                        <p className="text-sm md:text-lg font-semibold">{support.duration}</p>
                                        <p className="text-xs md:text-sm">{support.type}</p>
                                    </div>

                                    {/* Line between circles, except after the last item */}
                                    {index < supports.length - 1 && (
                                        <div className="w-36 hidden md:flex border-t-2 border-gray-400"></div>
                                    )}
                                     {index < supports.length - 1 && (
                                        <div className="h-10 md:hidden border-r-2 border-gray-400"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </motion.div>
);

export default OurProductDevelopmentProcess;

const supports = [
    { duration: "15 Days", type: "Support" },
    { duration: "30 Days", type: "Support" },
    { duration: "03 Months", type: "Support" },
    { duration: "06 Months", type: "Support" },
];
const cards = [
    {
        url: "/carousel/idea.png",
        title: "Idea",
        description: "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.",
        date: "1/2/2024",
        id: 1,
    },
    {
        url: "/carousel/uiux.jpeg",
        title: "Designer",
        description: "Crafting a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction.",
        date: "1/2/2024",
        id: 2,
    },
    {
        url: "/carousel/softwaredeveloper.jpg",
        title: "Developer",
        description: "Developing end-to-end solutions with a focus on feasibility assessment, architecture design, and agile process to ensure rapid, high-quality delivery.",
        date: "1/2/2024",
        id: 3,
    },
    {
        url: "/carousel/softwaretesting.png",
        title: "Tester",
        description: "Ensuring your product meets the highest standards of quality and reliability through extensive QA and software testing across all user touch points.",
        date: "1/2/2024",
        id: 4,
    },
    {
        url: "/carousel/launcher.png",
        title: "Launcher",
        description: "Executing a successful product launch by developing tailored deployment plans, executing a smooth rollout, and offering dedicated post-launch assistance.",
        date: "1/2/2024",
        id: 5,
    },
    {
        url: "/carousel/support.jpg",
        title: "Support",
        description: "Providing ongoing support and enhancements to ensure continued product success.",
        date: "1/2/2024",
        id: 'custom',
    },
];

'use client';
import { motion } from "framer-motion";
import TestimonialsSection from "@/components/TestimonialsSection";
import Gurantees from "./components/Guarantee";
import ServiceHerosection from "./components/herosection";
import ServicesWeProvide from "./components/ServicesWeProvide";
import ServiceSection from "./components/Seviceshorizontalsection";
import CallToAction from "@/components/CallToAction";
import CaseStudy from "./components/CaseStudy";

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

export default function MainServicePage() {
    return (
        <>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={sectionVariants}>
                <ServiceHerosection />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={sectionVariants}>
                <ServicesWeProvide />
            </motion.div>

            {/* <ServiceSection/> */}

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={sectionVariants}>
                <CaseStudy />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={sectionVariants}>
                <Gurantees />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={sectionVariants}>
                <TestimonialsSection />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={sectionVariants}>
                <CallToAction />
            </motion.div>
        </>
    )
}
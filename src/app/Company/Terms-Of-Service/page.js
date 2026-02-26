'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import UserLayout from '@/app/UserLayout';

gsap.registerPlugin(ScrollTrigger);

export default function TermsOfService() {
  const termsSections = useRef([]);

  useEffect(() => {
    termsSections.current.forEach((section, index) => {
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
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Terms of Service of RapidTechPro</h1>
          <p className="text-center text-gray-600 mb-16 max-w-6xl">
            Welcome to RapidTechPro! These Terms of Service outline the terms and conditions governing your use of our website and services. By using our website and services, you agree to comply with and be bound by these terms. Please read them carefully.
          </p>

          <div className="max-w-4xl space-y-16 flex flex-col justify-center items-center">
            <section
              ref={(el) => (termsSections.current[0] = el)}
              className="bg-white border border-gray-800 rounded-lg p-8 transform transition-transform duration-300 origin-center"
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. RapidTechPro Services</h2>
              <p className="text-gray-600">
                At RapidTechPro, we are passionate about empowering businesses with cutting-edge software solutions. From creating visually stunning websites to developing high-performance mobile applications, we offer a range of services that drive business growth and customer engagement. Our mission is to turn your vision into reality through innovative technology tailored to your unique business needs. Below are some of the services we provide:
              </p>
            </section>

            <section
              ref={(el) => (termsSections.current[1] = el)}
              className="bg-white border border-gray-800 rounded-lg p-8 transform transition-transform duration-300 origin-center"
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. Web Development</h2>
              <p className="text-gray-600">
                In today’s digital landscape, your website is the cornerstone of your online presence. Our web development team builds responsive, secure, and scalable websites that not only captivate visitors but also foster long-term relationships with your audience. Whether you're looking to increase your brand visibility or boost customer retention, we craft websites designed to drive business results. From eCommerce platforms to corporate websites, we deliver tailored solutions that fit your business objectives and growth plans.
              </p>
            </section>

            <section
              ref={(el) => (termsSections.current[2] = el)}
              className="bg-white border border-gray-800 rounded-lg p-8 transform transition-transform duration-300 origin-center"
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. Artificial Intelligence Solutions</h2>
              <p className="text-gray-600">
                Unlock the power of Artificial Intelligence with our bespoke AI solutions designed to streamline operations, improve decision-making, and elevate your customer experience. At RapidTechPro, we leverage the latest advancements in machine learning, data analysis, and predictive analytics to provide businesses with tools that boost efficiency, scalability, and overall performance. Let us help you harness the potential of AI to stay ahead of the competition and make data-driven decisions with confidence.
              </p>
            </section>

            <section
              ref={(el) => (termsSections.current[3] = el)}
              className="bg-white border border-gray-800 rounded-lg p-8 transform transition-transform duration-300 origin-center"
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. Mobile Application Development</h2>
              <p className="text-gray-600">
                With millions of users turning to smartphones, having a dedicated mobile application is a powerful way to grow your business. Our mobile app development team specializes in creating intuitive, user-friendly mobile applications for both iOS and Android platforms. Whether you need an app to enhance brand engagement, streamline business operations, or reach new customers, we are here to help you capitalize on the digital age with tailored, high-quality apps that deliver real results.
              </p>
            </section>

            <section
              ref={(el) => (termsSections.current[4] = el)}
              className="bg-white border border-gray-800 rounded-lg p-8 transform transition-transform duration-300 origin-center"
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. Graphic Design Services</h2>
              <p className="text-gray-600">
                Your brand’s visual identity plays a critical role in how customers perceive your business. At RapidTechPro, our graphic design team excels in creating stunning visuals that captivate and engage. From logos to brochures to custom branding packages, we ensure that your brand stands out in a competitive market. Our designs are not only visually appealing but also serve the purpose of driving functionality and results.
              </p>
            </section>

            <section
              ref={(el) => (termsSections.current[5] = el)}
              className="bg-white border border-gray-800 rounded-lg p-8 transform transition-transform duration-300 origin-center"
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">6. Digital Marketing</h2>
              <p className="text-gray-600">
                In today’s online world, digital marketing is key to your business’s growth. Our digital marketing experts help businesses reach their target audience through effective SEO, social media campaigns, paid ads, and email marketing strategies. We merge creativity with data-driven insights to create marketing campaigns that convert leads into loyal customers. Whether you're building your online presence or looking to boost sales, our team can help you achieve measurable results.
              </p>
            </section>

            <section
              ref={(el) => (termsSections.current[6] = el)}
              className="bg-white border border-gray-800 rounded-lg p-8 transform transition-transform duration-300 origin-center"
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">7. CRM Software Development</h2>
              <p className="text-gray-600">
                Customer relationship management (CRM) is essential to any business looking to improve client interactions and drive growth. RapidTechPro specializes in building CRM software that helps you streamline client management, enhance communication, and boost sales. Our custom CRM solutions enable you to track leads, automate processes, and maintain strong relationships with your customers, ultimately leading to increased retention and profitability.
              </p>
            </section>

            <section
              ref={(el) => (termsSections.current[7] = el)}
              className="bg-white border border-gray-800 rounded-lg p-8 transform transition-transform duration-300 origin-center"
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">8. DevOps Solutions</h2>
              <p className="text-gray-600">
                Our DevOps services streamline your software development lifecycle, ensuring faster delivery and higher quality. We help businesses bridge the gap between development and operations, implementing automated testing, continuous integration, and efficient deployment pipelines. With RapidTechPro, you can optimize resources, reduce errors, and scale your business effectively. We integrate DevOps best practices to make your development processes more efficient, scalable, and cost-effective.
              </p>
            </section>

            <section
              ref={(el) => (termsSections.current[8] = el)}
              className="bg-white border border-gray-800 rounded-lg p-8 transform transition-transform duration-300 origin-center"
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">9. iOS Application Development</h2>
              <p className="text-gray-600">
                As mobile usage continues to rise, we help businesses tap into the vast iOS user base with custom iOS application development. From iPhone to iPad, we build apps that are intuitive, high-performing, and designed to meet the specific needs of your business. Whether you’re launching your first app or enhancing an existing one, our team ensures your app delivers a seamless user experience that drives engagement and meets business objectives.
              </p>
            </section>

            <section
              ref={(el) => (termsSections.current[9] = el)}
              className="bg-white border border-gray-800 rounded-lg p-8 transform transition-transform duration-300 origin-center"
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">10. Android Application Development</h2>
              <p className="text-gray-600">
                Android is one of the most widely used operating systems in the world, and RapidTechPro offers expert Android app development services to help your business reach this vast user base. Our team builds dynamic, feature-rich apps that are compatible across a range of Android devices. Whether you're looking to boost customer engagement, enhance your digital services, or create a new revenue stream, we have the expertise to bring your idea to life on the Android platform.
              </p>
            </section>

            <section
              ref={(el) => (termsSections.current[10] = el)}
              className="bg-white border border-gray-800 rounded-lg p-8 transform transition-transform duration-300 origin-center"
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">11. Book Free Consultancy</h2>
              <p className="text-gray-600">
                Ready to take your business to the next level with custom software solutions? RapidTechPro is here to help! Contact us today to get a free quote and learn how we can develop tailored software solutions that drive your business forward.
              </p>
            </section>

            <section
              ref={(el) => (termsSections.current[11] = el)}
              className="bg-white border border-gray-800 rounded-lg p-8 transform transition-transform duration-300 origin-center"
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Clients</h2>
              <p className="text-gray-600">
                We have had the privilege of working with a diverse range of clients, from startups to established enterprises, helping them achieve success through innovative technology solutions. Our portfolio speaks for itself, and we are committed to delivering results that exceed expectations.
              </p>
            </section>
          </div>
        </div>
      </UserLayout>
    </div>
  );
}

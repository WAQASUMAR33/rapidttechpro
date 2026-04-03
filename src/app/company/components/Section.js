// components/HeroSection.js

const Section = () => {
    return (
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/bg-2.png')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
  
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-left md:text-center text-white px-4">
          <h1 className="text-2xl md:text-5xl md:font-bold mb-4 text-left">
            The best way out for your business.
          </h1>
          <h1 className="text-2xl md:text-5xl md:font-bold mb-4 text-left">
            Let’s work together!
          </h1>
          <p className=" md:text-xl md:max-w-2xl mb-8 text-center">
            Nowadays, businesses cannot do without an online presence. You have to offer them quality and engaging content.
          </p>
          <button className="bg-white text-black py-3 px-6 md:px-8 rounded-full md:text-lg font-[500] hover:bg-gray-300 transition">
            View our services &rarr;
          </button>
        </div>
      </section>
    );
  };
  
  export default Section;
  
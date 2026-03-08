export default function ServiceHeroSection() {
    return (
      <div className="relative h-screen w-full bg-black text-white flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/video/wireframe.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
  
        {/* Content Overlay */}
        <div className="relative z-20 md:max-w-4xl px-6 text-left">
          <h1 className="text-5xl md:text-[4.5rem] font-bold tracking-tight leading-tight md:leading-[1.2]">
            <span className="text-bluish">Business</span> through Accelerated Digital Services.
          </h1>
          <p className="text-base md:text-2xl font-light mt-4 md:mt-6 leading-relaxed md:leading-relaxed">
            Achieve business goals and meet user satisfaction by developing seamless and intuitive products.
          </p>
        </div>
      </div>
    );
  }
  
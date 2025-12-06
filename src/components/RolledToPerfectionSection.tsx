export default function RolledToPerfectionSection() {
  return (
    <section className="relative w-full bg-[#0c0a10]">
      {/* Image Container */}
      <div className="relative w-full aspect-[4096/2032] overflow-hidden">
        {/* Background Image */}
        <img
          src="/9e3e752442a325fa5b2b1e602e6ffab9-removebg-preview.png"
          alt="Pizza"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Text Overlay - Upper Left Quadrant */}
        <div className="absolute top-0 left-0 w-full h-full flex items-start justify-start p-8 md:p-12 lg:p-16">
          <div className="max-w-[600px] md:max-w-[700px]">
            <h1 className="text-[#FFEED9] text-[48px] md:text-[64px] lg:text-[80px] leading-[110%] tracking-[-0.03em] capitalize font-forum mb-4 md:mb-6">
              ROLLED TO PERFECTION
            </h1>
            <p className="text-[#FFEED9] text-[18px] md:text-[22px] leading-[28px] md:leading-[34px] font-normal">
              From the delicate slicing of fresh fish to the careful rolling of each piece, precision is at the heart of our craft.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


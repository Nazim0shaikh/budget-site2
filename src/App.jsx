import React, { useEffect, useState } from 'react';

const UnsplashImage = ({ id, alt, className = "" }) => {
  // Using loremflickr to request specifically "jewelry" and "luxury" images.
  // The lock parameter ensures the same image loads consistently so they don't flicker.
  const numId = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const reliableSrc = `https://loremflickr.com/800/1000/jewelry,luxury?lock=${numId}`;

  return (
    <div className={`overflow-hidden bg-gray-200 ${className}`}>
      <img
        src={reliableSrc}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-cream font-sans selection:bg-black selection:text-white pb-20 overflow-x-hidden">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-6 px-4 md:px-16 w-full absolute top-0 z-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <div className="font-serif text-2xl md:text-3xl font-bold tracking-tight">Jewelry&deg;</div>
        
        <ul className="hidden md:flex gap-10 text-sm uppercase tracking-widest">
          <li><a href="#" className="hover:text-gray-500 transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-gray-500 transition-colors">About</a></li>
          <li><a href="#" className="hover:text-gray-500 transition-colors">Collection</a></li>
          <li><a href="#" className="hover:text-gray-500 transition-colors">Blog</a></li>
        </ul>

        <button className="bg-black text-white px-4 md:px-8 py-2 md:py-3 text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors">
          Shop Now
        </button>
      </nav>

      <main className="pt-24 md:pt-32">
        {/* 1. HERO SECTION */}
        <section className="px-4 md:px-16 relative min-h-[85vh] md:min-h-[90vh] flex flex-col md:flex-row items-center mb-20 md:mb-40 mt-6 md:mt-10">
          {/* Left Text */}
          <div className="w-full md:w-[45%] flex flex-col justify-center animate-fade-in relative z-20 mt-10 md:mt-0" style={{ animationDelay: '0.3s' }}>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-sans mb-4 md:mb-8 ml-2">Collection Signature</span>
            <h1 className="font-serif text-[clamp(3.5rem,15vw,130px)] md:text-[clamp(4.5rem,10vw,130px)] leading-[0.85] tracking-tighter">
              <span className="block text-gray-300 ml-4 md:ml-12">Necklace</span>
              <span className="block text-gray-400">Earrings</span>
              <span className="block text-black ml-2 md:ml-8 relative z-10">Bangles</span>
              <span className="block text-gray-500 ml-8 md:ml-20">Rings</span>
            </h1>
          </div>

          {/* Right Image Grid (Highly Asymmetrical) */}
          <div className="w-full md:w-[55%] relative h-[450px] md:h-[700px] mt-10 md:mt-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="absolute top-[5%] md:top-[10%] right-[10%] md:right-[15%] w-[45%] aspect-[3/4] z-10 border-[8px] md:border-[12px] border-cream shadow-2xl">
              <UnsplashImage id="1599643471711-5ce66fe49187" alt="Gold earrings" className="w-full h-full" />
            </div>
            <div className="absolute top-[40%] md:top-[45%] left-[0%] md:left-[5%] w-[45%] md:w-[40%] aspect-square z-20 border-[6px] md:border-[8px] border-cream shadow-xl">
              <UnsplashImage id="1535632066927-ab7c9ab60908" alt="Model showing jewelry" className="w-full h-full" />
            </div>
            <div className="absolute bottom-[5%] right-[5%] w-[40%] md:w-[35%] aspect-[4/5] z-0">
              <UnsplashImage id="1602751584527-07118bf3a924" alt="Bracelet" className="w-full h-full" />
            </div>
          </div>
        </section>

        {/* 2. CUSTOM JEWELRY SECTION */}
        <section className="px-4 md:px-16 flex flex-col md:flex-row gap-10 md:gap-20 mb-32 md:mb-48 items-start relative">
          <div className="w-full md:w-[40%] animate-fade-in relative pt-16 md:pt-32" style={{ animationDelay: '0.2s' }}>
             <span className="text-[10px] uppercase tracking-[0.3em] absolute top-4 md:top-20 left-0 font-medium">What We Do</span>
             <UnsplashImage id="1606293926075-69a41bd95a20" alt="Stacked rings close up" className="w-[90%] md:w-[85%] aspect-[3/4] ml-auto shadow-lg" />
          </div>
          <div className="w-full md:w-[60%] flex flex-col animate-fade-in relative" style={{ animationDelay: '0.4s' }}>
            <h2 className="font-serif text-[10vw] md:text-[4vw] min-[768px]:text-[40px] leading-[1.05] tracking-tight mb-8 md:mb-12 max-w-[100%] md:max-w-[90%] md:-ml-10 relative z-10 bg-cream/90 backdrop-blur-sm p-4">
              We Develop Create<br/>Custom Jewels.
            </h2>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-end px-4 md:px-0">
              <div className="w-full md:w-[55%]">
                <UnsplashImage id="1584302179602-e4c3d3fd629d" alt="Model smiling with jewelry" className="w-full aspect-[4/5] object-cover" />
              </div>
              <p className="w-full md:w-[40%] font-sans text-gray-700 text-sm md:text-base leading-loose pb-4 border-l-2 border-black/20 pl-4 md:pl-6 mt-4 md:mt-0">
                These adornments are worn around the neck and come in various lengths and styles. They can feature pendants, gemstones, or intricate metalwork.
              </p>
            </div>
          </div>
        </section>

        {/* 3. COLLECTION HIGHLIGHT SECTION */}
        <section className="px-4 md:px-16 flex flex-col md:grid md:grid-cols-12 gap-10 md:gap-12 mb-32 md:mb-40">
          <div className="w-full md:col-span-6 flex gap-4 md:gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
             <UnsplashImage id="1599643478524-fbca65d95663" alt="Earrings close up" className="w-1/2 aspect-[4/5] object-cover" />
             <div className="w-1/2 flex flex-col justify-end">
                <UnsplashImage id="1601121141461-9d6647bca1ed" alt="Model profile" className="aspect-[4/5] object-cover" />
             </div>
          </div>
          <div className="w-full md:col-span-5 md:col-start-8 flex flex-col justify-center animate-fade-in mt-8 md:mt-0" style={{ animationDelay: '0.4s' }}>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4 block text-gray-500">Origin of Beauty</span>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] mb-6 md:mb-8">Collection Inspired By Sunrays</h2>
            <p className="font-sans text-gray-600 text-sm md:text-lg mb-8 md:mb-10 leading-relaxed max-w-md">
              These adornments are worn around the neck and come in various lengths.
            </p>
            <div>
              <button className="bg-black text-white px-6 md:px-8 py-3 md:py-4 text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* 4. CURVED DIVIDER SECTION */}
        <section className="w-full relative py-20 md:py-40 mb-20 md:mb-32 overflow-hidden flex justify-center items-center">
          {/* Decorative SVG curves */}
          <svg className="absolute w-full h-[400px] md:h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none" viewBox="0 0 1000 400" preserveAspectRatio="none">
            <ellipse cx="500" cy="200" rx="600" ry="250" fill="none" stroke="black" strokeWidth="1"/>
            <ellipse cx="500" cy="200" rx="700" ry="300" fill="none" stroke="black" strokeWidth="1"/>
            <ellipse cx="500" cy="200" rx="800" ry="350" fill="none" stroke="black" strokeWidth="1"/>
          </svg>
          
          <div className="bg-black w-full max-w-[95%] md:max-w-[90%] rounded-[100%] h-[200px] md:h-[500px] relative flex justify-center items-center">
            {/* Background overlapping text inside */}
            <div className="font-serif text-[18vw] md:text-[15vw] text-white opacity-20 tracking-tighter pointer-events-none absolute w-full text-center truncate">FASHION</div>
            <div className="font-serif text-[18vw] md:text-[15vw] text-white opacity-10 tracking-tighter pointer-events-none absolute top-full -translate-y-1/2 w-full text-center truncate">EDITION</div>
            
            {/* 5 Floating images (some hidden on mobile to avoid overcrowding) */}
            <div className="absolute w-[22%] md:w-[12%] aspect-[3/4] left-[5%] md:left-[10%] top-[40%] -translate-y-1/2">
              <UnsplashImage id="1515562141207-7a88fb7ce338" alt="Necklace" className="h-full" />
            </div>
            <div className="hidden md:block absolute w-[15%] aspect-[3/4] left-[25%] -top-[10%] shadow-xl">
              <UnsplashImage id="1611591437281-460bfbe1220a" alt="Ring" className="h-full" />
            </div>
            <div className="absolute w-[35%] md:w-[18%] aspect-[4/5] left-[50%] -translate-x-1/2 top-[5%] md:top-[10%] z-10 shadow-2xl">
              <UnsplashImage id="1599643471711-5ce66fe49187" alt="Engagement ring" className="h-full" />
            </div>
            <div className="absolute w-[22%] md:w-[15%] aspect-[3/4] right-[5%] md:right-[25%] top-[10%] shadow-xl">
              <UnsplashImage id="1602751584527-07118bf3a924" alt="Bracelet" className="h-full" />
            </div>
            <div className="hidden md:block absolute w-[12%] aspect-[3/4] right-[10%] top-[30%]">
              <UnsplashImage id="1599643478524-fbca65d95663" alt="Earrings" className="h-full" />
            </div>
          </div>
        </section>

        {/* 5. DISCOVER SECTION */}
        <section className="px-4 md:px-16 mb-20 md:mb-40 relative">
           {/* Huge Headings with massive typography overlay */}
           <div className="mb-16 md:mb-24 flex flex-col items-center">
              <h2 className="font-serif text-[22vw] md:text-[18vw] leading-[0.75] uppercase tracking-tighter mix-blend-difference text-black relative z-20 w-full text-center">
                 DISCOVER
              </h2>
           </div>

           {/* Editorial Layout Grid */}
           <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10 w-full max-w-[1400px] mx-auto md:auto-rows-[150px]">
              
              {/* Row 1 / Stack 1 */}
              <div className="col-span-1 md:col-span-3 md:row-span-2 relative md:-mt-32 w-[80%] mx-auto md:w-full md:mx-0">
                <UnsplashImage id="1611085583191-a3b181a8840b" alt="Gold necklace" className="w-full aspect-square md:h-full md:aspect-auto shadow-lg" />
              </div>
              <div className="col-span-1 md:col-span-4 md:row-span-2 mt-4 md:-mt-12 md:ml-4 w-[90%] mx-auto md:w-full md:mx-0">
                <UnsplashImage id="1584302179602-e4c3d3fd629d" alt="Model neck" className="w-full aspect-[4/5] md:h-full md:aspect-auto shadow-xl" />
              </div>
              <div className="col-span-1 md:col-span-5 md:row-span-2 pt-4 md:pt-10 w-[70%] ml-auto md:w-full">
                <UnsplashImage id="1599643471711-5ce66fe49187" alt="Pearl earrings" className="w-full aspect-[4/3] md:w-[80%] md:ml-auto" />
              </div>

              {/* Central text bridging items */}
              <div className="col-span-1 md:col-span-12 flex justify-center items-center md:h-full md:row-span-1 my-12 md:my-10">
                 <h2 className="font-serif text-[15vw] md:text-[8vw] leading-[0.9] uppercase tracking-tight text-center">
                    WORLDS BEST
                 </h2>
              </div>

              {/* Row 2 / Stack 2 */}
              <div className="col-span-1 md:col-span-4 md:row-span-2 md:-mt-10 md:mr-8 w-[90%] mx-auto md:w-full">
                 <UnsplashImage id="1606293926075-69a41bd95a20" alt="Rose gold rings" className="w-full aspect-[4/5] object-cover" />
              </div>
              <div className="col-span-1 md:col-span-8 flex flex-col md:flex-row gap-6 md:h-full mt-6 md:mt-4 md:row-span-1">
                 <div className="w-full md:w-[40%] h-[250px] md:h-[300px]">
                   <UnsplashImage id="1602751584527-07118bf3a924" alt="Bracelet selection" className="w-full h-full" />
                 </div>
                 <div className="w-full md:w-[60%] h-[250px] md:h-[300px] mt-0 md:mt-12">
                   <UnsplashImage id="1515562141207-7a88fb7ce338" alt="Ring tray" className="w-full h-full" />
                 </div>
              </div>

              <div className="col-span-1 md:col-span-12 md:row-span-1 flex items-end">
                 <h2 className="font-serif text-[22vw] md:text-[18vw] leading-[0.7] uppercase tracking-tighter text-black w-full text-center mt-12 md:mt-20 mb-8 border-b-2 border-black/10 pb-8">
                    JEWELRY
                 </h2>
              </div>
           </div>
        </section>
      </main>

      {/* 6. FOOTER */}
      <footer className="px-4 md:px-16 pt-20 md:pt-32 pb-12 border-t border-gray-300">
        <div className="flex items-center gap-4 mb-20">
          <span className="font-serif text-2xl">Connect</span>
          <div className="w-10 h-10 border border-black rounded-full flex items-center justify-center pt-[2px]">
            <span className="block transform rotate-0 w-4 h-[1px] bg-black"></span>
            <span className="block absolute w-2 h-[1px] bg-black translate-x-[4px] -rotate-45 origin-right"></span>
            <span className="block absolute w-2 h-[1px] bg-black translate-x-[4px] rotate-45 origin-right"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 font-sans">
          <div>
            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4 md:mb-6">Contact</h3>
            <p className="text-gray-500 mb-2 text-sm md:text-base">jewelryDrip@gmail.com</p>
            <p className="text-gray-500 text-sm md:text-base">+1 800 245 4567</p>
          </div>
          <div>
            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4 md:mb-6">Social</h3>
            <ul className="space-y-2 text-gray-500 uppercase text-[10px] md:text-xs tracking-widest">
              <li><a href="#" className="hover:text-black">Instagram</a></li>
              <li><a href="#" className="hover:text-black">Twitter</a></li>
              <li><a href="#" className="hover:text-black">Discord</a></li>
              <li><a href="#" className="hover:text-black">Facebook</a></li>
            </ul>
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4 md:mb-6">Info</h3>
            <ul className="space-y-2 text-gray-500 uppercase text-[10px] md:text-xs tracking-widest">
              <li><a href="#" className="hover:text-black">Site Policies</a></li>
              <li><a href="#" className="hover:text-black">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-black">Not Financial Advice</a></li>
              <li><a href="#" className="hover:text-black">FAQ</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
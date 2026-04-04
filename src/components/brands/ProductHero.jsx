const ProductHero = ({ title, subtitle, showWave = true }) => {
  return (
    <div className="relative py-20 overflow-hidden text-white ">
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .slide-in-left { animation: slideInLeft 0.8s ease-out; }
      `}</style>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 bg-white rounded-full -right-32 w-96 h-96 mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bg-white rounded-full -bottom-32 -left-32 w-96 h-96 mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative px-6 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex-1 slide-in-left">
            <p className="mb-2 text-sm font-bold tracking-widest text-green-100 uppercase">Premium Tyre Collection</p>
            <h1 className="mb-4 font-black tracking-tight capitalize text-7xl">
              {title}
            </h1>
            <p className="mb-4 text-2xl leading-relaxed text-green-100">
              {subtitle || "Experience Superior Performance & Safety"}
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-3xl">⭐</span>
                <span className="text-lg font-semibold">4.6/5 Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">🚗</span>
                <span className="text-lg font-semibold">50K+ Happy Customers</span>
              </div>
            </div>
          </div>
          {showWave && <div className="hidden lg:block text-9xl opacity-20">🛞</div>}
        </div>
      </div>
    </div>
  );
};

export default ProductHero;

import { useEffect, useState } from "react";

const offers = [
  {
    title: "Flat ₹1000 OFF",
    subtitle: "On Premium Tyres",
    code: "SAVE1000",
    endTime: new Date().getTime() + 5 * 60 * 60 * 1000, // 5 hours
  },
  {
    title: "Buy 3 Get 1 Free",
    subtitle: "Limited Time Offer",
    code: "TYRE4",
    endTime: new Date().getTime() + 3 * 60 * 60 * 1000,
  },
];

const OfferBanner = () => {
  const [current, setCurrent] = useState(0);
  const [timeLeft, setTimeLeft] = useState({});

  // 🔄 Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % offers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // ⏳ Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = offers[current].endTime - now;

      if (distance < 0) return;

      setTimeLeft({
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="px-4 mt-4 mb-6">
      <div className="relative p-5 overflow-hidden shadow-lg rounded-xl bg-gradient-to-r bg-white/90 from-white/80 to-white/60">

        {/* Content */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          {/* Left */}
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold text-black md:text-2xl">
              {offers[current].title}
            </h2>

            <p className="text-black/80">
              {offers[current].subtitle}
            </p>

            <span className="inline-block px-3 py-1 mt-1 text-sm font-semibold text-white bg-black rounded-lg w-fit">
              {offers[current].code}
            </span>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start gap-2 md:items-end">

            {/* ⏳ Timer */}
            <div className="text-sm font-semibold text-black">
              Ends in:{" "}
              <span className="px-2 py-1 text-white bg-black rounded">
                {timeLeft.hours || 0}h {timeLeft.minutes || 0}m {timeLeft.seconds || 0}s
              </span>
            </div>

            {/* Button */}
            <button className="px-5 py-2 font-semibold text-black transition bg-white rounded-lg hover:bg-gray-100">
              Shop Now
            </button>
          </div>

        </div>

        {/* 🔘 Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {offers.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 w-2 rounded-full cursor-pointer ${
                i === current ? "bg-black" : "bg-black/40"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
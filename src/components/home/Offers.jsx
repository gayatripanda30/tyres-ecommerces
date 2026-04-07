import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import offer1 from "../../assets/offer1.png";
import offer2 from "../../assets/offer2.png";
import offer3 from "../../assets/offer3.png";

const offers = [
  {
    title: "Pirelli Performance Bonus",
    desc: "Upgrade your drive with high-performance Pirelli tyres and unlock exclusive cashback on premium sizes.",
    img: offer1,
    tag: "Limited Time",
    link: "pirelli-offer",
  },
  {
    title: "Continental Safety Deal",
    desc: "Experience superior grip and control. Get special savings when you equip your car with a full set.",
    img: offer2,
    tag: "Best Seller",
    link: "continental-offer",
  },
  {
    title: "Yokohama Road Advantage",
    desc: "Engineered for durability and comfort — enjoy extra savings on select Yokohama tyre ranges.",
    img: offer3,
    tag: "Trending",
    link: "yokohama-offer",
  },
];

const Offers = () => {
  const scrollRef = useRef();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = offers.length;

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      const next = (currentIndex + 1) % total;
      setCurrentIndex(next);

      scrollRef.current.scrollTo({
        left: scrollRef.current.clientWidth * next,
        behavior: "smooth",
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [currentIndex, paused, total]);

  return (
    <div className="py-12 bg-gray-100">
      <h2 className="mb-10 text-3xl font-bold text-center">
        Featured Offers
      </h2>

      <div
        ref={scrollRef}
        className="flex overflow-x-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {offers.map((_, i) => (
          <div key={i} className="min-w-full px-6">
            <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-3">
              {offers.map((item, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden transition bg-white shadow-lg rounded-xl hover:shadow-2xl hover:-translate-y-2"
                >
                  <img
                    src={item.img}
                    alt="offer"
                    className="object-cover w-full h-[180px]"
                  />

                  <div className="p-5">
                    <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-white bg-red-500 rounded-full">
                      {item.tag}
                    </span>

                    <h3 className="mb-2 text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="text-gray-600">
                      {item.desc}
                    </p>

                    <button
                      onClick={() => navigate("/special-offers")}
                      className="mt-4 text-sm font-semibold text-blue-600 hover:underline"
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
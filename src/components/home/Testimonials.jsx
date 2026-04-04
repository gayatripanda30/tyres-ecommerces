const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Car Owner",
    review:
      "I booked a tyre replacement late at night before a long drive, and the team managed everything seamlessly the next morning. The technician was punctual, knowledgeable, and explained the entire process clearly. Truly a hassle-free experience.",
    rating: 5,
  },
  {
    name: "Priya Das",
    role: "Customer",
    review:
      "What impressed me most was the transparency in pricing and recommendations. No unnecessary upselling—just honest advice and quality products. The service was quick and very professional.",
    rating: 4,
  },
  {
    name: "Amit Kumar",
    role: "Business Owner",
    review:
      "As someone who manages a small fleet, reliability matters a lot. Their service has been consistently efficient, and the turnaround time is excellent. Definitely a trusted partner for tyre solutions.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="px-6 py-16 bg-gray-100">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in { animation: fadeIn 0.8s ease-out; }
        .slide-up { animation: slideUp 0.6s ease-out; }
        .testimonial-card {
          animation: slideUp 0.6s ease-out;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .testimonial-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
      `}</style>
      
      {/* Heading */}
      <div className="mb-12 text-center fade-in">
        <h2 className="text-3xl font-bold">Voices of Our Valued Customers</h2>
        <p className="mt-2 text-gray-500">
         Delivering reliable tyre solutions with exceptional service every time.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-gray-200 shadow-md rounded-2xl testimonial-card"
            style={{animationDelay: `${index * 0.15}s`}}
          >
            {/* Top Icons */}
            <div className="flex items-center justify-between ">
              <span className="text-blue-400 text-7xl">“</span>
            </div>

            {/* Review */}
            <p className="mb-4 text-gray-700 leading-relaxed text-[15px]">
              {item.review}
            </p>

            {/* Bottom */}
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-semibold">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {item.role}
                </p>
              </div>

              {/* Stars */}
              <div className="text-orange-500 text-[18px]">
                {"★".repeat(item.rating)}
                {"☆".repeat(5 - item.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
const FeatureSection = ({
  title,
  desc,
  img,
  reverse = false,
  bg = "bg-white",
  overlay = false,
}) => {
  return (
    <div className={`w-full ${overlay ? "relative" : ""}`}>
      <div
        className={`grid md:grid-cols-2 items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* TEXT */}
        <div
          className={`${bg} p-10 flex items-center justify-center ${
            overlay ? "absolute md:static inset-0 bg-black/60 text-white" : ""
          }`}
        >
          <div className="max-w-md">
            <h3 className="mb-4 text-2xl font-bold">{title}</h3>
            <p className="text-sm text-gray-600 md:text-base">
              {desc}
            </p>
          </div>
        </div>

        {/* IMAGE */}
        <div className="h-[300px] md:h-[400px]">
          <img
            src={img}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
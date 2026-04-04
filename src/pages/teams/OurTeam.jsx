const teamMembers = [
  {
    name: "Rahul Sharma",
    role: "Founder & CEO",
    desc: "Leads the company with a vision to deliver quality automotive solutions.",
  },
  {
    name: "Priya Das",
    role: "Operations Manager",
    desc: "Ensures smooth operations and customer satisfaction across services.",
  },
  {
    name: "Amit Kumar",
    role: "Technical Head",
    desc: "Expert in tyre technology and installation processes.",
  },
  {
    name: "Neha Verma",
    role: "Customer Support Lead",
    desc: "Dedicated to providing excellent customer experience.",
  },
];

const OurTeam = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* 🔹 Hero Section */}
      <div className="py-20 text-center text-white bg-black">
        <h1 className="text-4xl font-bold">Meet Our Team</h1>
        <p className="mt-3 text-gray-300">
          The people behind our success
        </p>
      </div>

      {/* 🔹 Team Grid */}
      <div className="grid max-w-6xl gap-8 px-6 py-16 mx-auto md:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="p-6 text-center transition bg-white shadow-md rounded-xl hover:shadow-lg"
          >
            {/* Avatar (No Image – Using Initials) */}
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-xl font-bold text-white bg-green-500 rounded-full">
              {member.name.charAt(0)}
            </div>

            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="mb-2 text-sm text-green-500">
              {member.role}
            </p>
            <p className="text-sm text-gray-600">
              {member.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 🔹 CTA */}
      <div className="py-12 text-center">
        <h2 className="mb-3 text-2xl font-bold">
          Want to Work With Us?
        </h2>
        <p className="mb-6 text-gray-600">
          Join our growing team and build your career with us.
        </p>
        <button className="px-6 py-2 text-white bg-green-500 rounded hover:bg-green-600">
          View Careers
        </button>
      </div>
    </div>
  );
};

export default OurTeam;
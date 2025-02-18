import React from "react";

const courses = [
  {
    title: "Never too late for English",
    buttonText: "Learn More",
    image: "https://via.placeholder.com/600x400", // Replace with actual image URL
  },
  {
    title: "English Courses for Professionals",
    buttonText: "Learn More",
    image: "https://via.placeholder.com/600x400", // Replace with actual image URL
  },
];

const programs = [
  {
    title: "Program Bachelor, Master dan MBA",
    description:
      "Dapatkan gelar bisnis di Hult, sekolah bisnis independen-pemenang penghargaan",
    image: "https://ksm.edu.in/blogs/wp-content/uploads/2024/06/Top-Jobs-After-MBA-in-Finance-1024x574.jpg", // Replace with actual image URL
  },
  {
    title: "Program Bachelor, Master dan MBA",
    description:
      "Dapatkan gelar bisnis di Hult, sekolah bisnis independen-pemenang penghargaan",
    image: "https://ksm.edu.in/blogs/wp-content/uploads/2024/06/Top-Jobs-After-MBA-in-Finance-1024x574.jpg", // Replace with actual image URL
  },
  {
    title: "Program Bachelor, Master dan MBA",
    description:
      "Dapatkan gelar bisnis di Hult, sekolah bisnis independen-pemenang penghargaan",
    image: "https://ksm.edu.in/blogs/wp-content/uploads/2024/06/Top-Jobs-After-MBA-in-Finance-1024x574.jpg", // Replace with actual image URL
  },
];

const UnlockPotentials = () => {
  return (
    <div className="p-6 bg-gray-100">
      {/* Top Courses Section */}
      <div className="grid md:grid-cols-2 gap-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-64 "
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4 text-white">
              <h2 className="text-lg font-bold">{course.title}</h2>
              <button className="bg-white text-black px-4 py-2 rounded-md">{course.buttonText}</button>
            </div>
          </div>
        ))}
      </div>

      {/* Programs Section */}
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{program.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{program.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnlockPotentials;

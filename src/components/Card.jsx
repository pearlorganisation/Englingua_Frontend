export default function Card() {
  const data = [
    {
      img: "https://ksm.edu.in/blogs/wp-content/uploads/2024/06/Top-Jobs-After-MBA-in-Finance-1024x574.jpg",
      imgdescription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsa quam ipsam accusamus expedita aut iusto nihil quibusdam laboriosam eligendi, veritatis, doloribus earum neque est minus voluptatibus aliquam laudantium? Omnis! ",
    },
    {
      img: "https://ksm.edu.in/blogs/wp-content/uploads/2024/06/Top-Jobs-After-MBA-in-Finance-1024x574.jpg",
      imgdescription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsa quam ipsam accusamus expedita aut iusto nihil quibusdam laboriosam eligendi, veritatis, doloribus earum neque est minus voluptatibus aliquam laudantium? Omnis! ",
    },
    {
      img: "https://ksm.edu.in/blogs/wp-content/uploads/2024/06/Top-Jobs-After-MBA-in-Finance-1024x574.jpg",
      imgdescription:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsa quam ipsam accusamus expedita aut iusto nihil quibusdam laboriosam eligendi, veritatis, doloribus earum neque est minus voluptatibus aliquam laudantium? Omnis! ",
    },
  ];

  return (
    <div className="px-4 py-10 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg flex flex-col overflow-hidden bg-white"
          >
            <img
              src={item.img}
              alt=""
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-700">{item.imgdescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Card() {
  return (
    <div className="relative w-80 h-96  rounded-lg overflow-hidden shadow-lg">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/05/45/42/81/360_F_545428173_uyYWJoR9n5uJFYIWfDa2C49AzIECcU20.jpg')",
        }}
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content */}
      <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4 text-center">
        Fixed Bottom Text
      </div>
    </div>
  );
}

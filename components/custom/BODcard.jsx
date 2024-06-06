import Image from "next/image";
import { FaLinkedin, FaRegEnvelope, FaXTwitter } from "react-icons/fa6";

const BODcard = ({ id, name, designation, image }) => {
  return (
    <div className="relative m-4">
      <div
        className="group w-64 h-80  bg-primaryColor shadow-lg rounded-2xl overflow-hidden"
        style={{
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%, -80% 100%)",
          transition: "clip-path 0.5s", // Adding transition for smoother effect
        }}
        // Change clipPath on hover
        onMouseEnter={(e) =>
          (e.currentTarget.style.clipPath =
            "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.clipPath =
            "polygon(30% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%, -80% 100%)")
        }
      >
        <div
          className="absolute inset-0 p-4 bg-primaryColor  flex flex-col items-center justify-center"
          style={{
            clipPath:
              "polygon(100% 0%, 20% 0%, 0% 20%, 0% 100%, 100% 100%, 100% 80%)",
          }}
        >
          <Image
            src={image ? `/img/bod/${image}` : "/img/demo.webp"}
            width={250}
            height={300}
            alt="bod"
            className="h-52 sm:h-64 object-cover object-top"
          />
          <h3 className="text-white text-lg font-bold mt-4">{name}</h3>
          <p className="text-white text-sm">{designation}</p>
        </div>
        {/* <div className="absolute inset-0 hidden group-hover:flex flex-col items-center justify-center p-4 bg-gray-100">
          <h3 className="text-gray-900 text-lg font-bold mb-2">{name}</h3>
          <p className="text-gray-600 text-sm mb-4">{designation}</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaRegEnvelope />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaXTwitter />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <FaLinkedin />
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default BODcard;

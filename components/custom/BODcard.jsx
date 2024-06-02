import Image from "next/image";
import { FaLinkedin, FaRegEnvelope, FaXTwitter } from "react-icons/fa6";

const BODcard = ({ id, name, designation, image }) => {
  return (
    <div
      className="bg-white w-fit mx-auto rounded-2xl shadow-md overflow-hidden relative pb-2 max-w-[200px] md:max-w-fit"
      key={id}
    >
      <div>
        <Image
          src={image ? `/img/bod/${image}` : "/img/demo.webp"}
          width={250}
          height={360}
          alt="bod"
          className="h-52 sm:h-64 object-cover object-top"
        />
        <div className="text-center mt-4 space-y-0.5">
          <p className="text-sm font-semibold lg:text-lg">{name}</p>
          <p className="text-xs lg:text-base">{designation}</p>
          <div className="flex items-center gap-2 w-fit mx-auto text-sm lg:text-xl pt-2">
            <FaRegEnvelope className="opacity-40 hover:opacity-90 cursor-pointer" />
            <FaXTwitter className="opacity-40 hover:opacity-90 cursor-pointer" />
            <FaLinkedin className="opacity-40 hover:opacity-90 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BODcard;

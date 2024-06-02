import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { publicRequest } from "@/requestMethod";
import Image from "next/image";

async function getData() {
  const res = await publicRequest(`/aboutUs/memorandum`);
  return await res.data;
}

const data = getData();

const page = async () => {
  const memo = await data;

  return (
    <div className="bg-softWhite">
      <Navbar />
      <div className="subRoutebg">
        <div className="bg-[url('/img/former_bg.webp')] subRoutebanner">
          <div className="subRouteblack">
            <h2 className="subRouteTitle animate__animated animate__fadeInUp">
              Memorandum and Articles of Association
            </h2>
          </div>
        </div>
      </div>

      <div className="px-2 py-10">
        <div className="max-w-screen-2xl mx-auto text-sm lg:text-base space-y-10">
          <h4 className="text-lg lg:text-xl font-semibold text-center">
            Memorandum and Articles of Association
          </h4>

          {memo.map((mem) => (
            <div
              className="relative bg-white p-3 border border-black w-fit mx-auto group overflow-hidden"
              key={mem.id}
            >
              <Image
                src={"/img/memorandum.webp"}
                width={600}
                height={550}
                alt="memorandum"
              />

              <div className="text-sm lg:text-lg font-semibold absolute w-full h-full top-0 left-0 bg-black/70 backdrop-blur-sm hidden group-hover:flexCenter animate__animated animate__fadeInUp animate__fast">
                <a
                  href={`/pdf/${mem.pdf}`}
                  className="py-3 px-6 bg-softWhite rounded-md"
                >
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;

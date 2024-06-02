import FormerLayout from "@/components/about/FormerLayout";
import FormerCard from "@/components/custom/FormerCard";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { publicRequest } from "@/requestMethod";

async function getData() {
  const res = await publicRequest(`/aboutUs/formerSrViceChairmen`);
  return await res.data;
}

const data = getData();

const page = async () => {
  const formerData = await data;
  return (
    <div className="bg-softWhite">
      <Navbar />
      <div className="subRoutebg">
        <div className="bg-[url('/img/former_bg.webp')] subRoutebanner">
          <div className="subRouteblack">
            <h2 className="subRouteTitle animate__animated animate__fadeInUp">
              Former Sr. vice Chairmen
            </h2>
          </div>
        </div>
      </div>
      <FormerLayout />

      <div className="px-2 py-6">
        <div className="max-w-screen-2xl mx-auto text-sm lg:text-base space-y-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 sm:gap-6 text-center">
            {formerData.map((chair, i) => (
              <FormerCard
                key={i}
                name={chair.name}
                period={chair.period}
                position={chair.position || "Sr. Vice Chairman"}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;

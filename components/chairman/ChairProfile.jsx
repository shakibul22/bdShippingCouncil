import { publicRequest } from "@/requestMethod";
import Image from "next/image";

// async function getData() {
//   const res = await fetch(
//     `
//     ${process.env.NEXT_PUBLIC_API_BASE_URL}/chairman/profile`);
//   return await res.json();
// }

// const data = getData();

const ChairProfile = async () => {
  const res = await publicRequest("/chairman/profile");
  const profileData = await res.data;

  return (
    <div className="px-2 py-10">
      <div className="text-sm lg:text-base max-w-screen-2xl mx-auto space-y-10">
        {/* Profile */}
        <div className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 px-4 py-8 text-white rounded-2xl flex flex-col gap-10 md:flex-row items-center justify-around">
          <div className="text-center">
            <Image
              src={`/img/chairman/${profileData[0]?.image}`}
              width={250}
              height={400}
              alt="chairman"
              className="rounded-xl mx-auto shadow-lg"
            />

            <p className="mt-6 text-lg lg:text-xl font-semibold">
              {profileData[0]?.name}
            </p>
            <p>Chairman</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-gray-100 max-w-lg">
            <p>Academic Qualification:</p>
            <p>{profileData[0]?.academic}</p>
            <p>Profession:</p>
            <p>{profileData[0]?.profession}</p>
            <p>Business Activities:</p>
            <p>{profileData[0]?.business}</p>
            <p>Present Position:</p>
            <p>{profileData[0]?.presentPosition}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 text-textPrimary">
          <div className="row-span-2 md:col-span-2 bg-[#F5F1ED] px-4 lg:px-8 py-8 leading-normal rounded-2xl space-y-8">
            <h4 className="font-semibold text-center">
              Association with Business Associations/Chambers:
            </h4>
            {profileData[0]?.associations.map((associate, i) => (
              <div key={i} className="space-y-2">
                <h5 className="font-medium">{associate.name}</h5>
                <p className="font-light">{associate.text}</p>
              </div>
            ))}
          </div>

          <div className=" bg-[#F5F1ED] px-4 py-8 leading-normal rounded-2xl space-y-8 text-center">
            <h4 className="font-semibold ">Social Club Membership</h4>
            {profileData[0]?.clubs.map((club, i) => (
              <div key={i} className="space-y-2">
                <h5 className="font-medium">{club.name}</h5>
                <p className="font-light">{club.text}</p>
              </div>
            ))}
          </div>

          <div className=" bg-[#0C30461A] px-4 py-8 leading-normal rounded-2xl space-y-8">
            <h4 className="font-semibold ">Foreign Travel</h4>
            <p className="font-medium">{profileData[0]?.foreignTravel}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChairProfile;

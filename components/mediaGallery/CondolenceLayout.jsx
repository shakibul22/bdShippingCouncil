import { publicRequest } from "@/requestMethod";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CondolenceLayout = async () => {
  // const res = await publicRequest("/gallery/condolence");
  const data = [
    {
      "id": 1,
      "name": "Mr. S.M. Matiur Rahman",
      "position": "Founder Chairman",
      "period": "1977-1980",
      "featured": true,
      "image": "",
      "link":"",
      "text": " "
    },
    {
      "id": 2,
      "name": "Mohammad Shahjahan Khan",
      "position": "Hon’ble Member and former Director",
      "period": "",
      "featured": false,
      "image": "",
      "link":"/condolence/CONDOLENCE2023 .doc",
      "text": "All Hon’ble Members of Shippers’ Council of Bangladesh (SCB) along with Office Bearers, Board of Directors and Secretariat Staff are deeply shocked at the sudden and sad demise of Mohammad Shahjahan Khan, Hon’ble Member, and former Director of Shippers’ Council of Bangladesh on 22 May, 2023 at Bangkok Hospital in Thailand due to Cardiac Arrest (Inna Lillahi wa Inna ilaihi Raji’un). He was also former President of Dhaka Chamber of Commerce & Industries and Bangladesh Thai Chamber of Commerce & Industries, Managing Director of S. S. Shipping & Chartering Ltd. and S. S. Shipping & Trading Ltd., Chairman of S. S. Builders & Developers Ltd. & Fatema Real Estate & Developers Ltd. He was about 73. His departure is an irreparable loss to the business community. He left behind his wife, one son, one daughter and countless wellwishers. Chairman, Senior Vice-Chairman, Vice-Chairman, Directors & Members of SCB along with office staffs express their deepest grief to the bereaved family and pray to Allah (SWT) for eternal peace of the departed soul."
    },
    {
      "id": 3,
      "name": "Mr. M. R. Ali",
      "position": "Former Chairman",
      "period": "1994-1999",
      "featured": false,
      "image": "",
      "link":"/condolence/CONDOLENCE M R Ali.doc",

      "text": "All Hon’ble Members of Shippers’ Council of Bangladesh along with Office Bearers and Secretariat Staff are deeply shocked at the sudden and sad demise of Shippers’ Council’s Former Chairman Mr. M. R. Ali on 1st September, 2018 at 11:00pm at Apollo Hospital (Inna Lillahi Wa Inna Ilaihi Raji’un). He has left behind his wife, son, two daughters and innumerable well-wishers & friends to mourn his death. He was Chairman of Shippers’ Council of Bangladesh for the period 1994 to 1999. He was also Chairman of M/s. Orbital Inspection Service Ltd., Ex-Chairman of Central Insurance Company Ltd. & Sponsor Member of Baridhara Cosmopolitan Club Ltd. Chairman, Directors & Members of SCB are expressing their deepest grief towards the bereaved family and praying to Allah (SWT) for eternal peace of the departed soul."
    },
    {
      "id": 4,
      "name": "Mr. Mehboob-Ul-Islam",
      "position": "Ex. Senior Training Manager, RANATA LIMITED",
      "period": "",
      "featured": false,
      "image": "",
      "link":"/condolence/CONDOLENCE 3.doc",

      "text": "All Hon’ble Members of Shippers’ Council of Bangladesh (SCB) along with Office Bearers and Secretariat Staff are deeply shocked at the sudden and sad demise of Mr. Mehboob-Ul-Islam, Ex. Senior Training Manager, RANATA LIMITED and father of Mr. Ziaul Islam, Director, Shippers’ Council of Bangladesh on 17 November, 2020, Tuesday at 2:30 pm at his residence, Dhaka. (Innalillahhi Wa Inna Elaihi Raziun). He left behind his wife, three daughters and one son and countless well wishers. Chairman, Directors & Members of SCB express their deepest grief to the bereaved family and pray to Allah (SWT) for eternal peace of the departed soul."
    },
    {
      "id": 5,
      "name": "Mr. Hasan Ahmed",
      "position": "Hon’ble Member",
      "period": "",
      "featured": false,
      "image": "",
      "link":"/condolence/CONDOLENCE Hasan.doc",

      "text": "All Hon’ble Members of Shippers’ Council of Bangladesh (SCB) along with Office Bearers, Board of Directors and Secretariat Staff are deeply shocked at the sudden and sad demise of Mr. Hasan Ahmed, Hon’ble Member, Shippers’ Council of Bangladesh and Chairman, Popular Jute Mills Limited on 24th January, 2022 at 6:00 pm at BIRDEM Hospital, Dhaka (Inna Lillahi wa Inna ilaihi Raji’un). He was about 58. His departure is an irreparable loss to the business community specially Jute Sector. He left behind countless wellwishers. In his passing away, the Council has lost wellwisher and an experienced personality in Jute Sector. This is an irreparable loss to all. Chairman, Senior Vice-Chairman, Vice-Chairman, Directors & Members of SCB along with office staffs express their deepest grief to the bereaved family and pray to Allah (SWT) for eternal peace of the departed soul."
    },
    {
      "id": 6,
      "name": "Mr. Mohammed Tarek",
      "position": "Member",
      "period": "",
      "featured": false,
      "image": "",
      "link":"/condolence/CONDOLENCE.doc",
      "text": "All Hon’ble Members of Shippers’ Council of Bangladesh (SCB) along with Office Bearers, Board of Directors and Secretariat Staff are deeply shocked at the sudden and sad demise of Mohammed Tarek, Member of SCB on 5th December, 2019 at 12:05 am at his residence. He was about 83. He was an icon for Jute sector and a versatile genius in this society. He left behind his daughters and countless wellwishers. In his passing away, the Council has lost wellwisher and an experienced personality in Jute Sector. This is an irreparable loss to all. Chairman, Senior Vice-Chairman, Vice-Chairman, Directors & Members of SCB along with office staffs express their deepest grief to the bereaved family and pray to Allah (SWT) for eternal peace of the departed soul."
    },
    {
      "id": 7,
      "name": "Mr. Enamul Haque Majumdar (Lipon)",
      "position": "Director, Majumder Group",
      "period": "",
      "featured": false,
      "image": "",
      "link":"/condolence/CONDOLENCE 2.doc",
      "text": "All Hon’ble Members of Shippers’ Council of Bangladesh (SCB) along with Office Bearers and Secretariat Staff are deeply shocked at the sudden and sad demise of Mr. Enamul Haque Majumdar (Lipon), Director, Majumder Group on 14th September, 2019 at 9.30am in Singapore (Innalillahhi Wa Inna Elaihi Raziun). He left behind his daughter and son and countless well wishers. Chairman, Directors & Members of SCB express their deepest grief to the bereaved family and pray to Allah (SWT) for eternal peace of the departed soul."
    }
  ]
  

  return (
    <div className="px-4 py-10">
      <div className="max-w-screen-2xl mx-auto text-sm">
        {data?.map((con) =>
          con.featured ? (
            <div
              className="bg-black p-4 rounded-xl text-white mb-9"
              key={con.id}
            >
              <div className="flexCenter flex-col gap-6">
                <Image
                  src={con.image || "/img/demo.webp"}
                  width={250}
                  height={250}
                  className="border-2 border-white p-2"
                  alt="demo"
                />

                <div className="space-y-1 font-extralight text-center">
                  <p className="font-semibold text-base">{con.name}</p>
                  <p>{con.position}</p>
                  <p>Period: {con.period}</p>
                </div>

                <div className="w-full font-extralight max-w-5xl text-justify">
                  <p>{con.text}</p>
                </div>
              </div>
            </div>
          ) : null
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.map((con) =>
            !con.featured ? (
              <div key={con.id}> <Link href={con.link} target="_blank">
               <div className="border shadow-md rounded-xl p-2 flexCenter flex-col gap-4 bg-white ">
                  <Image
                  src={con.image || "/img/demo.webp"}
                  width={120}
                  height={150}
                  className="rounded-full border-2 border-black shadow-sm"
                  alt="demo"
                />

                <div className="space-y-1 font-extralight text-center">
                  <p className="font-semibold text-base">{con.name}</p>
                  <p>{con.position}</p>
                  <p>Period: {con.period}</p>
                </div>
               </div>
            
              </Link>
              </div>

            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default CondolenceLayout;

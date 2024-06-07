import { publicRequest } from "@/requestMethod";
import Slider from "react-slick";

async function getData() {
  // const res = await fetch(`
  //   ${process.env.NEXT_PUBLIC_API_BASE_URL}/home/latestNews`);
  // return await res.json();

  const res = await publicRequest("/home/latestNews");
  return res.data;
}

const data = getData();

// eslint-disable-next-line @next/next/no-async-client-component
const HomeLatestNews = async () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const latestNews = await data;

  return (
    <div className="bg-primaryColor text-white py-6 lg:py-10 px-2 md:px-6">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-xl lg:text-2xl font-semibold">Latest News</h2>
        <div className="px-6 mt-6 text-sm lg:text-base font-extralight relative z-10">
          {latestNews ? (
            <Slider {...settings}>
              {latestNews?.map((news) => (
                <div
                  className="px-2 md:px-4 lg:px-10 text-justify"
                  key={news.id}
                >
                  <h3>{news.news}</h3>
                </div>
              ))}
            </Slider>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default HomeLatestNews;

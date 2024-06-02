// "use client"

import Image from "next/image";
import Slider from "react-slick";
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BiChevronRight
      className={className}
      style={{ display: "block", color: "white" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BiChevronLeft
      className={className}
      style={{ display: "block", color: "white" }}
      onClick={onClick}
    />
  );
}

async function getData() {
  const res = await fetch(`
    ${process.env.NEXT_PUBLIC_API_BASE_URL}/home/sliderImage`);
  return await res.json();
}

let data = getData();

const HomeSlider = async () => {
  const settings = {
    className: "center",
    centerMode: true,

    infinite: true,
    centerPadding: "45px",
    slidesToShow: 1,
    speed: 500,
    dots: true,
    arrows: true,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    focusOnSelect: true,

    responsive: [
      {
        breakpoint: 670,
        settings: {
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  let imageData = await data;

  return (
    <div className="hslider">
      <Slider {...settings}>
        {imageData?.map((img) => (
          <div
            className="relative group activeSlide rounded-lg overflow-hidden"
            key={img.id}
          >
            <Image
              src={`/img/slider/${img.image}`}
              height={900}
              width={800}
              alt="sliderImage"
              className="mx-auto w-[350px] sm:w-[600px] lg:w-[900px] xl:w-[1100px] h-[250px] md:h-[320px] lg:h-[500px] xl:h-[540px] 3xl:h-[620px]"
              priority
            />

            <div className="absolute bottom-2 left-0 opacity-0 group-hover:opacity-100 easyTrans px-4 hidden md:block z-10">
              <p className="text-white text-sm font-extralight bg-black/60 backdrop-blur-sm p-2 rounded-lg">
                {img.caption}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;

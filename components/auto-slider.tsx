"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiStar } from "react-icons/ci";
import Slider from "react-slick";
import ReactCountryFlag from "react-country-flag";


type propsType = {
  speed?: number;
  className?: string;
  data: { icon?: string; name: string }[];
};

function Arrow() {
  return <div className="hidden"></div>;
}

export default function AutoSlider(props: propsType) {
  const { speed = 3500, data, className } = props;

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: speed,
    autoplaySpeed: speed,
    cssEase: "linear",
    draggable: false,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };

  return (
    <div className={`w-screen relative ${className ?? ""}`}>
      <Slider {...settings}>
        {data.map(({ icon, name }, i) => (
          <div key={i} className="bg-lightGray py-6 w-full">
            <div className="px-6 flex-center gap-2!">
              <span>
                {icon ? (
                  <ReactCountryFlag style={{width:30,height:30}} countryCode={icon} svg />
                ) : (
                  <CiStar className="p-1 text-3xl border border-white/40 rounded-lg" />
                )}
              </span>
              <h2 className="font-bold text-xl capitalize">{name}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

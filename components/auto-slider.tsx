// @ts-nocheck
"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PiStarFourFill } from "react-icons/pi";
import Slider from "react-slick";
import ReactCountryFlag from "react-country-flag";

type propsType = {
  speed?: number;
  className?: string;
  data: { icon?: string; name: string }[];
};

function Arrow() {
  return <div className="hidden" />;
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
    pauseOnHover: false,
    pauseOnFocus: false,
    draggable: false,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1546,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 924,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`w-screen relative ${className ?? ""}`}>
      <Slider {...settings}>
        {data.map(({ icon, name }, i) => (
          <div key={i} className="bg-lightGray py-6 w-full">
            <div className="px-6 flex-center gap-2!">
              <span>
                {icon ? (
                  <ReactCountryFlag
                    style={{ width: 30, height: 30 }}
                    countryCode={icon}
                    svg
                  />
                ) : (
                  <PiStarFourFill className="p-px md:text-3xl border border-white/40 rounded" />
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

import Image from "next/image";
import { useWindowSize } from "@/plugins/windowDimensions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

interface BProps {
  title?: string;
  subtitle?: string;
}

export default function BoxClient({title, subtitle}: BProps) {
  const {width} = useWindowSize();
  const slider1 = useRef<any>(null);
  const slider2 = useRef<any>(null);

  const settings = {
    centerMode: true,
    centerPadding: "0",
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,     
    arrows: false,
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  }

  const settings2 = {
    centerMode: true,
    centerPadding: "0",
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,     
    arrows: false,
    rows: 1,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (<>
    <div className="flex flex-col items-center justify-center bg-transparent py-14">
      {title && <h1 className="text-3xl md:text-4xl font-bold text-primary">{title}</h1>}
      {subtitle && <p className="text-center italic">{subtitle}</p>}
      <div className="xxxy w-full md:w-3/4 lg:w-2/4">
        <Slider {...settings} ref={slider1} className="mt-10">
          <div className="px-2">
            <div className="box-client border-2 rounded-md border-secondary_a">
              <Image src={"/Dinamika_Network_1.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
            </div>
          </div>
          <div className="px-2">
            <div className="box-client border-2 rounded-md border-secondary_a">
              <Image src={"/PT_Duma_1.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
            </div>
          </div>
          <div className="px-2">
            <div className="box-client border-2 rounded-md border-secondary_a">
              <Image src={"/Stars_1.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
            </div>
          </div>
          <div className="px-2">
            <div className="box-client border-2 rounded-md border-secondary_a">
              <Image src={"/Liffe_1.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
            </div>
          </div>
          <div className="px-2">
            <div className="box-client border-2 rounded-md border-secondary_a">
              <Image src={"/Meta_1.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
            </div>
          </div>
          <div className="px-2">
            <div className="box-client border-2 rounded-md border-secondary_a">
              <Image src={"/SMK_1.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
            </div>
          </div>
        </Slider>
        <Slider {...settings2} ref={slider2} className="mt-5">
          <div className="px-2">
            <div className="box-client border-2 rounded-md border-secondary_a">
              <Image src={"/GPM_1.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
            </div>
          </div>
          <div className="px-2">
            <div className="box-client border-2 rounded-md border-secondary_a">
              <Image src={"/Catur_1.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
            </div>
          </div>
          <div className="px-2">
            <div className="box-client border-2 rounded-md border-secondary_a">
              <Image src={"/importir_2.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
            </div>
          </div>
          <div className="px-2">
            <div className="box-client border-2 rounded-md border-secondary_a">
              <Image src={"/importir_5.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
            </div>
          </div>
          <div className="px-2">
            <div className="box-client border-2 rounded-md border-secondary_a">
              <Image src={"/ESD_1.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
            </div>
          </div>
          <div className="px-2">
            <div className="box-client border-2 rounded-md border-secondary_a">
              <Image src={"/importir_3.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
            </div>
          </div>
        </Slider>
      </div>
      {/* <div className={`grid grid-cols-3 md:grid-cols-5 gap-5 ${title ? "mt-10" : "mt-4"}`}>
        <div className="box-client">
          <Image src={"/Dinamika_Network_1.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/PT_Duma_1.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/Stars_1.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/Liffe_1.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/Meta_1.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/SMK_1.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/GPM_1.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/Catur_1.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/importir_2.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/importir_5.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/ESD_1.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
        </div>
        <div className="box-client">
          <Image src={"/importir_3.png"} width={width <= 640 ? 84 : 114} height={width <= 640 ? 84 : 114} alt="" />
        </div>
      </div> */}
    </div>
  </>);
}
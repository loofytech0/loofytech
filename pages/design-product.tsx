import { useRef } from "react";
import { useWindowSize } from "@/plugins/windowDimensions";
import Image from "next/image";
import Slider from "react-slick";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { directWa } from "@/plugins/globalFunction";

export default function DesignProduct() {
  const slider = useRef<any>(null);
  const slider2 = useRef<any>(null);
  const slider3 = useRef<any>(null);
  const {width} = useWindowSize();
  const router = useRouter();

  const settings = {
    centerMode: true,
    centerPadding: "24%",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,     
    arrows: false,
    rows: 1,
    // rtl: true,
    focusOnSelect: true,
    beforeChange: (oldIndex: any, newIndex: any) => {}
  }

  const settings2 = {
    centerMode: true,
    centerPadding: "20%",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,     
    arrows: false,
    rows: 1,
    focusOnSelect: true,
    beforeChange: (oldIndex: any, newIndex: any) => {}
  }

  return (<>
    <NextSeo
      title={`Loofytech - Jasa Design Produk Murah`}
      description={`Loofytech adalah jasa, dibangun oleh tenaga profesional dan berpengalaman dibidangnya, cukup dengan modal 500.000`}
      canonical={`https://loofytech.com${router.asPath}`}
      openGraph={{
        title: "Loofytech - Jasa Design Produk Murah",
        description: `Loofytech adalah jasa, dibangun oleh tenaga profesional dan berpengalaman dibidangnya, cukup dengan modal 500.000`,
        url: `https://loofytech.com${router.asPath}`,
        images: [
          {url: `https://loofytech.com/Loofy_Square_1.png`}
        ],
        siteName: "Loofytech - Jasa Design Produk Murah"
      }}
      additionalMetaTags={[{
        property: 'keywords',
        content: 'loofytech, jasa it loofytech, jasa website loofytech, jasa aplikasi loofytech, jasa design produk loofytech, loofytech konsultan, loofytech consultant, aplikasi kantor loofytech, aplikasi kasir loofytech, aplikasi pembayaran loofytech, aplikasi pergudangan loofytech, it loofy, loofytech digital'
      }, {
        name: 'application-name',
        content: 'Loofytech - Jasa Design Produk Murah'
      }, {
        httpEquiv: 'x-ua-compatible',
        content: 'IE=edge; chrome=1'
      }]}
    />
    <div className="dp-section-1 px-2 md:px-14 xl:px-52">
      <h1 className="text-2xl font-bold text-center text-primary select-none relative top-14 md:top-0 md:text-5xl">Desain Produk yang Menggambarkan Identitas Anda, Ungkapkan Cerita Diri Anda!</h1>
      <div className="w-full flex items-start mt-24 gap-10 flex-col md:flex-row">
        <div className="select-none relative w-full md:w-1/2">
          <h3 className="text-primary text-xl font-bold mb-3 text-center md:text-left md:text-2xl">Desain Logo Perusahaan / Usaha Anda</h3>
          <p className="text-sm italic">Kami senang dapat memberikan penawaran jasa desain logo untuk membantu memperkuat identitas merek Anda. Dengan kombinasi kreativitas, profesionalisme, dan keahlian dalam desain grafis, kami siap menciptakan logo yang unik dan mengesankan untuk merek Anda.</p>
        </div>
        <div style={{width: width < 768 ? "100%" : 500}}>
          <Slider {...settings} ref={slider}>
            <div className="">
              <div className="flex justify-center items-center">
                <div className="bg-gray_b flex items-center" style={{width: width < 768 ? 182 : 262, height: width < 768 ? 182 : 262}}>
                  <Image src={"/l5_1.png"} width={262} height={262} alt="Design produk" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center items-center">
                <div className="bg-gray_b flex items-center" style={{width: width < 768 ? 182 : 262, height: width < 768 ? 182 : 262}}>
                  <Image src={"/l8.png"} width={262} height={262} alt="Design produk" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center items-center">
                <div className="bg-gray_b flex items-center" style={{width: width < 768 ? 182 : 262, height: width < 768 ? 182 : 262}}>
                  <Image src={"/l9.png"} width={262} height={262} alt="Design produk" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center items-center">
                <div className="bg-gray_b flex items-center" style={{width: width < 768 ? 182 : 262, height: width < 768 ? 182 : 262}}>
                  <Image src={"/l10.png"} width={262} height={262} alt="Design produk" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center items-center">
                <div className="bg-gray_b flex items-center" style={{width: width < 768 ? 182 : 262, height: width < 768 ? 182 : 262}}>
                  <Image src={"/l4.png"} width={262} height={262} alt="Design produk" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center items-center">
                <div className="bg-gray_b flex items-center" style={{width: width < 768 ? 182 : 262, height: width < 768 ? 182 : 262}}>
                  <Image src={"/l6.png"} width={262} height={262} alt="Design produk" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center items-center">
                <div className="bg-gray_b flex items-center" style={{width: width < 768 ? 182 : 262, height: width < 768 ? 182 : 262}}>
                  <Image src={"/l7.png"} width={262} height={262} alt="Design produk" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center items-center">
                <div className="bg-gray_b flex items-center" style={{width: width < 768 ? 182 : 262, height: width < 768 ? 182 : 262}}>
                  <Image src={"/l1.png"} width={262} height={262} alt="Design produk" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center px-2 mt-10 mb-10 md:mt-0 md:mb-28 md:px-14 xl:px-52">
      <div className="w-full flex items-start gap-10 mt-0 flex-col flex-col-reverse md:mt-24 md:flex-row">
        <div style={{width: width < 768 ? "100%" : 500}}>
          <Slider {...settings} ref={slider2}>
            <div className="">
              <div className="flex justify-center items-center">
                <div className="rounded-full bg-gray_b flex justify-center items-center" style={{width: width < 768 ? 182 : 262, height: width < 768 ? 182 : 262}}>
                  <Image src={"/Mesa_de_trabajo_1.png"} width={width < 768 ? 122 : 162} height={width < 768 ? 122 : 162} alt="Design produk" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center items-center">
                <div className="rounded-full bg-gray_b flex justify-center items-center" style={{width: width < 768 ? 182 : 262, height: width < 768 ? 182 : 262}}>
                  <Image src={"/Mesa_de_trabajo_2.png"} width={width < 768 ? 162 : 182} height={width < 768 ? 162 : 182} alt="Design produk" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center items-center">
                <div className="rounded-full bg-gray_b flex justify-center items-center" style={{width: width < 768 ? 182 : 262, height: width < 768 ? 182 : 262}}>
                  <Image src={"/Mesa_de_trabajo_3.png"} width={width < 768 ? 162 : 182} height={width < 768 ? 162 : 182} alt="Design produk" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center items-center">
                <div className="rounded-full bg-gray_b flex justify-center items-center" style={{width: width < 768 ? 182 : 262, height: width < 768 ? 182 : 262}}>
                  <Image src={"/Mesa_de_trabajo_4.png"} width={width < 768 ? 162 : 182} height={width < 768 ? 162 : 182} alt="Design produk" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="w-full md:w-1/2 select-none">
          <h3 className="text-primary text-xl font-bold text-center md:text-left mb-3">Desain Profil Perusahaan / Usaha Anda</h3>
          <p className="text-sm italic">Kami senang dapat memberikan penawaran jasa desain logo untuk membantu memperkuat identitas merek Anda. Dengan kombinasi kreativitas, profesionalisme, dan keahlian dalam desain grafis, kami siap menciptakan logo yang unik dan mengesankan untuk merek Anda.</p>
        </div>
      </div>
    </div>
    <div className="dp-section-3 px-2 md:px-14 xl:px-52">
      <h1 className="text-xl md:text-5xl font-bold text-center text-primary mb-3 select-none">Desain Stationary Perusahaan / Usaha Anda</h1>
      <h3 className="italic text-center text-primary select-none text-sm md:text-normal">Kami dengan senang hati ingin menawarkan jasa desain stationary perusahaan untuk membantu memperkuat citra dan profesionalisme bisnis Anda. Pengalaman kami mencakup desain stationary, brosur, poster, Mock up untuk ATK (Pulpen, Name Tag, Amplop) dan berbagai materi pemasaran.</h3>
      <div className="w-full mt-10 md:mt-20">
        <Slider {...settings2} ref={slider3}>
          <div className="">
            <div className="flex justify-center items-center">
              <div className="bg-gray_b flex justify-center items-center" style={{width: "100%", height: "262px"}}>
                <Image src={"/S1@4x_1.png"} width={540} height={262} alt="" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center items-center">
              <div className="bg-gray_b flex justify-center items-center" style={{width: "100%", height: "262px"}}>
                <Image src={"/s2@4x.png"} width={540} height={262} alt="" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center items-center">
              <div className="bg-gray_b flex justify-center items-center" style={{width: "100%", height: "262px"}}>
                <Image src={"/S4@4x.png"} width={540} height={262} alt="" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center items-center">
              <div className="bg-gray_b flex justify-center items-center" style={{width: "100%", height: "262px"}}>
                <Image src={"/S5@4x.png"} width={420} height={262} alt="" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="text-center relative top-10">
        <button
          className="bg-primary text-white py-3 px-8 font-semibold rounded-xl"
          type="button"
          style={{filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"}}
          onClick={() => directWa("Halo, saya ingin berdiskusi dengan anda terkait company profile yang ingin saya bangun. Bisakah anda meluangkan waktu untuk berkomunikasi dengan saya?")}
        >
          Desain Produk Anda Sekarang
        </button>
      </div>
    </div>
  </>);
}
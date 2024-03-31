import Image from "next/image";
import { useDispatch } from "react-redux";
import { setSecond, setFirst, setHeaderColor } from "@/store/reducers/homeReducer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import Link from "next/link";
import { useWindowSize } from "@/plugins/windowDimensions";
import BoxClient from "./BoxClient";
import { directWa } from "@/plugins/globalFunction";
import { useRouter } from "next/router";

export default function HomeFirst() {
  const slider = useRef<any>(null);
  const [disabled, setDisabled] = useState<any>([false, false]);
  const dispatch = useDispatch();
  const {width, height} = useWindowSize();
  const router = useRouter();

  const nextSection = () => {
    dispatch(setSecond(true));
    dispatch(setFirst(false));
    dispatch(setHeaderColor("text-primary"));
  }

  const settings = {
    centerMode: true,
    centerPadding: "0",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,     
    arrows: false,
    rows: 1,
    beforeChange: (oldIndex: any, newIndex: any) => {}
  }

  return (<>
    <style global jsx>{`
      body {
        background-image: url("/header2@4x_1.png");
        background-repeat: no-repeat;
        background-size: 100%;
        background-attachment: fixed;
        background-size: cover;
      }
    `}</style>
    <div className="bg-transparent relative flex flex-col justify-center items-center">
      <h1 className="w-2/3 text-center text-primary font-bold mt-36 text-2xl md:text-4xl lg:text-6xl">
        We Provide the Key to
        <br />
        Unlock All Doors of Your Plans
      </h1>
      <div className="relative -top-10 xl:-top-5">
        <Image src={"/jumbo.png"} width={500} height={500} alt="" />
      </div>
      <div className="relative -top-20 pt-5 pb-28 px-2 md:px-28 xl:px-64">
        <div className="flex flex-col justify-center items-center relative top-12">
          <h1 className="text-3xl md:text-5xl text-center font-bold text-secondary">What&#96;s your plan ?</h1>
          <p className="text-secondary text-center text-lg px-5 md:px-0 md:text-3xl mt-3">Tell us about your plan, your mind and your problems. Then we&#96;ll handle all the details to fulfill your extraordinary plans.</p>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 mt-5">
            <div className="flex flex-col justify-center items-center relative rounded-xl ur-plan">
              <div className="relative top-4">
                <Image src={"/sec-21.png"} width={width < 768 ? 250 : 350} height={width < 768 ? 250 : 350} alt="We Listen" />
                <span className="text-3xl left-0 right-0 text-center absolute bottom-6 md:bottom-12 text-black">We Listen</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center relative rounded-xl ur-plan">
              <div className="relative top-4">
                <Image src={"/sec-22.png"} width={width < 768 ? 250 : 350} height={width < 768 ? 250 : 350} alt="We Care" />
                <span className="text-3xl left-0 right-0 text-center absolute bottom-6 md:bottom-12 text-black">We Care</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center relative rounded-xl ur-plan">
              <div className="relative top-4">
                <Image src={"/sec-23.png"} width={width < 768 ? 250 : 350} height={width < 768 ? 250 : 350} alt="We Act" />
                <span className="text-3xl left-0 right-0 text-center absolute bottom-6 md:bottom-12 text-black">We Act</span>
              </div>
            </div>
          </div>
          <div className="text-center relative top-10 md:top-5">
            <button
              type="button"
              className="flex justify-center items-center gap-2 bg-primary text-white py-1.5 px-5 rounded-lg drop-shadow-m"
              onClick={() => directWa("Halo, saya sedang berkunjung ke website loofytech.com, ada beberapa pertanyaan yang ingin saya ajukan kepada anda terkait aplikasi yang ingin saya bangun. Bersediakah anda meluangkan waktu untuk berkomunikasi dengan saya?")}
            >
              <Image src={"/whatsapp.svg"} width={24} height={24} alt="logo whatsapp" />
              <span className="">Beritahu Kami Rencana Anda</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="py-10 bg-secondary_a flex flex-col justify-center items-center px-2 md:py-20 md:px-28 xl:px-64">
      <h1 className="text-center font-bold text-black text-2xl md:text-5xl">Why You Choose LoofyTech ?</h1>
      <p className="text-lg mt-3 text-black md:text-2xl">Build with Love, to give the best for You</p>
      <div className="w-full slick-why mt-10 pb-5 px-5 lg:w-3/4 md:pb-0">
        <Slider {...settings} ref={slider}>
          <div className="">
            <div className="px-2">
              <div className="bg-primary why-u-choose-us flex flex-col items-center justify-center rounded-xl gap-4 p-10">
                <div className="flex w-full gap-5 flex-col justify-center items-center md:items-start md:flex-row md:justify-between">
                  <div style={{color: "#FFF"}} className="w-full md:w-2/3">
                    <h3 className="text-3xl font-bold text-center md:text-start whitespace-nowrap">Desain Terbaik</h3>
                    <p className="mt-2 text-sm md:text-lg text-center md:text-start">Setiap detail dipikirkan dengan seksama untuk menciptakan antarmuka yang menakjubkan, memastikan penggunaan yang mudah, serta memikat dan memanjakan mata pengguna.</p>
                  </div>
                  <Image src={"/Design.png"} width={188} height={188} alt="design" />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="px-2">
              <div className="bg-primary why-u-choose-us flex flex-col items-center justify-center rounded-xl gap-4 p-10">
                <div className="flex w-full gap-5 flex-col justify-center items-center md:items-start md:flex-row md:justify-between">
                  <div style={{color: "#FFF"}} className="w-full md:w-2/3">
                    <h3 className="text-3xl font-bold text-center md:text-start whitespace-nowrap">Skalabilitas</h3>
                    <p className="mt-2 text-sm md:text-lg text-center md:text-start">Tim kami memiliki pengetahuan mendalam tentang teknologi terbaru dan praktik terbaik, sehingga dapat memberikan solusi yang tepat dan inovatif untuk Aplikasi anda.</p>
                  </div>
                  <Image src={"/Skalabilitas.png"} width={188} height={188} alt="skalabilitas" />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="px-2">
              <div className="bg-primary why-u-choose-us flex flex-col items-center justify-center rounded-xl gap-4 p-10">
                <div className="flex w-full gap-5 flex-col justify-center items-center md:items-start md:flex-row md:justify-between">
                  <div style={{color: "#FFF"}} className="w-full md:w-2/3">
                    <h3 className="text-3xl font-bold text-center md:text-start whitespace-nowrap">Keamanan</h3>
                    <p className="mt-2 text-sm md:text-lg text-center md:text-start">Privasi dan keamanan data Anda dengan sempurna! Sistem keamanan terbaik untuk melindungi informasi berharga Anda dari ancaman cyber dan intrusi yang berbahaya.</p>
                  </div>
                  <Image src={"/Security.png"} width={188} height={188} alt="security" />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="px-2">
              <div className="bg-primary why-u-choose-us flex flex-col items-center justify-center rounded-xl gap-4 p-10">
                <div className="flex w-full gap-5 flex-col justify-center items-center md:items-start md:flex-row md:justify-between">
                  <div style={{color: "#FFF"}} className="w-full md:w-2/3">
                    <h3 className="text-3xl font-bold text-center md:text-start whitespace-nowrap">Fleksibel</h3>
                    <p className="mt-2 text-sm md:text-lg text-center md:text-start">Sesuaikan tampilan, fitur, dan fungsionalitas sesuai dengan preferensi Anda sendiri. rasakan keajaiban fleksibilitas aplikasi untuk mencapai potensi penuh bisnis Anda.</p>
                  </div>
                  <Image src={"/Speed.png"} width={188} height={188} alt="speed" />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="px-2">
              <div className="bg-primary why-u-choose-us flex flex-col items-center justify-center rounded-xl gap-4 p-10">
                <div className="flex w-full gap-5 flex-col justify-center items-center md:items-start md:flex-row md:justify-between">
                  <div style={{color: "#FFF"}} className="w-full md:w-2/3">
                    <h3 className="text-3xl font-bold text-center md:text-start whitespace-nowrap">Server</h3>
                    <p className="mt-2 text-sm md:text-lg text-center md:text-start">Dengan kecepatan tinggi dan kapasitas yang luas, Server aplikasi kami adalah jawaban atas segala kebutuhan performa dan kehandalan dalam menjalankan aplikasi Anda.</p>
                  </div>
                  <Image src={"/Server.png"} width={188} height={188} alt="server" />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="px-2">
              <div className="bg-primary why-u-choose-us flex flex-col items-center justify-center rounded-xl gap-4 p-10">
                <div className="flex w-full gap-5 flex-col justify-center items-center md:items-start md:flex-row md:justify-between">
                  <div style={{color: "#FFF"}} className="w-full md:w-2/3">
                    <h3 className="text-3xl font-bold text-center md:text-start whitespace-nowrap">Harga Negotiable</h3>
                    <p className="mt-2 text-sm md:text-lg text-center md:text-start">Dapatkan Aplikasi yang anda butuhkan denga harga terbaik ! Jangan ragu untuk bernegosiasi, kami siap memberikan penawaran spesial khusus untuk Anda.</p>
                  </div>
                  <Image src={"/Harga.png"} width={188} height={188} alt="harga" />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="px-2">
              <div className="bg-primary why-u-choose-us flex flex-col items-center justify-center rounded-xl gap-4 p-10">
                <div className="flex w-full gap-5 flex-col justify-center items-center md:items-start md:flex-row md:justify-between">
                  <div style={{color: "#FFF"}} className="w-full md:w-2/3">
                    <h3 className="text-3xl font-bold text-center md:text-start whitespace-nowrap">Optimasi SEO</h3>
                    <p className="mt-2 text-sm md:text-lg text-center md:text-start">Naikkan peringkat website Anda dan jadi yang terbaik di mesin pencari! Layanan optimasi SEO kami akan membantu website Anda muncul di peringkat atas hasil pencarian.</p>
                  </div>
                  <Image src={"/jw_4.png"} width={188} height={188} alt="optimasi seo" />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="px-2">
              <div className="bg-primary why-u-choose-us flex flex-col items-center justify-center rounded-xl gap-4 p-10">
                <div className="flex w-full gap-5 flex-col justify-center items-center md:items-start md:flex-row md:justify-between">
                  <div style={{color: "#FFF"}} className="w-full md:w-2/3">
                    <h3 className="text-3xl font-bold text-center md:text-start whitespace-nowrap">Full Kontrol</h3>
                    <p className="mt-2 text-sm md:text-lg text-center md:text-start">Kelola website Anda dengan mudah dan efisien! CMS (Content Management System) yang kami tawarkan memberikan Anda kontrol penuh atas konten dan fitur di website Anda.</p>
                  </div>
                  <Image src={"/jw_5.png"} width={188} height={188} alt="full kontrol" />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="px-2">
              <div className="bg-primary why-u-choose-us flex flex-col items-center justify-center rounded-xl gap-4 p-10">
                <div className="flex w-full gap-5 flex-col justify-center items-center md:items-start md:flex-row md:justify-between">
                  <div style={{color: "#FFF"}} className="w-full md:w-2/3">
                    <h3 className="text-3xl font-bold text-center md:text-start whitespace-nowrap">Mobile Friendly</h3>
                    <p className="mt-2 text-sm md:text-lg text-center md:text-start">Lebih dekat dengan pengunjung Anda di mana saja! Website kami didesain sepenuhnya mobile-friendly, memastikan tampilan yang sempurna dan pengalaman yang optimal di berbagai perangkat.</p>
                  </div>
                  <Image src={"/jw_3.png"} width={188} height={188} alt="mobile friendly" />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="px-2">
              <div className="bg-primary why-u-choose-us flex flex-col items-center justify-center rounded-xl gap-4 p-10">
                <div className="flex w-full gap-5 flex-col justify-center items-center md:items-start md:flex-row md:justify-between">
                  <div style={{color: "#FFF"}} className="w-full md:w-2/3">
                    <h3 className="text-3xl font-bold text-center md:text-start whitespace-nowrap">Pemeliharaan</h3>
                    <p className="mt-2 text-sm md:text-lg text-center md:text-start">Dengan pemeliharaan rutin yang kami tawarkan, aplikasi Anda akan selalu diperbarui dengan teknologi terbaru dan dijamin berjalan lancar tanpa hambatan.</p>
                  </div>
                  <Image src={"/jw_6.png"} width={188} height={188} alt="mobile friendly" />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
    <BoxClient title="Klien Kami" subtitle="Kepuasaan pelanggan adalah yang utama bagi Loofytech" />
    <div className="flex justify-center">
      <div className="w-full">
        <h1 className="text-center text-3xl font-bold text-primary mt-3">Our Project</h1>
        <div className="flex gap-3 mt-8 justify-center items-center flex-col md:flex-row">
          <button
            type="button"
            className="bbny h-11 w-44 rounded-full border border-primary font-bold bg-primary text-white"
            onClick={() => router.push("/make-website")}
          >
            <span>Website</span>
            <div className="arrow-right">
              <Image src={"/arrow_right.png"} width={20} height={20} alt="arrow right" />
            </div>
          </button>
          <button
            type="button"
            className="bbny h-11 w-44 rounded-full border border-primary font-bold bg-primary text-white"
            onClick={() => router.push("/make-application")}
          >
            <span>Aplikasi</span>
            <div className="arrow-right">
              <Image src={"/arrow_right.png"} width={20} height={20} alt="arrow right" />
            </div>
          </button>
          <button
            type="button"
            className="bbny h-11 w-44 rounded-full border border-primary font-bold bg-primary text-white"
            onClick={() => router.push("/design-product")}
          >
            <span>Desain Produk</span>
            <div className="arrow-right">
              <Image src={"/arrow_right.png"} width={20} height={20} alt="arrow right" />
            </div>
          </button>
        </div>
      </div>
    </div>
    <div className="bg-transparent pb-20 pt-10 flex flex-col justify-center items-center px-2 md:px-20 xl:px-72">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-5 md:mx-0">
        <div className="project-info bg-light_gray_50 rounded-xl flex flex-col justify-center items-center">
          <Image src={"/importir_1.png"} width={294} height={293} className="w-full" alt="importir" />
          <div className="text-primary font-bold relative -top-6 text-center">Website Importir</div>
          <div className="project-info-part p-9">
            <p className="text-black text-center text-xs font-bold">WEBSITE</p>
            <div className="flex items-center justify-center text-2xl tracking-wider font-bold absolute left-0 right-0 top-0 bottom-0 px-5 px-5 text-center">Importir</div>
          </div>
        </div>
        <div className="project-info bg-light_gray_50 rounded-xl flex flex-col justify-center items-center">
          <Image src={"/san_pradana_1.png"} width={294} height={293} className="w-full" alt="san pradana teknik" />
          <div className="text-primary font-bold relative -top-6 text-center">Website PT. San Pradana Teknik</div>
          <div className="project-info-part p-9">
            <p className="text-black text-center text-xs font-bold">WEBSITE</p>
            <div className="flex items-center justify-center text-2xl tracking-wider font-bold absolute left-0 right-0 top-0 bottom-0 px-5 text-center">PT. San Pradana Teknik</div>
          </div>
        </div>
        <div className="project-info bg-light_gray_50 rounded-xl flex flex-col justify-center items-center">
          <Image src={"/gpm_11.png"} width={294} height={293} className="w-full" alt="gading persada mandiri" />
          <div className="text-primary font-bold relative -top-6 text-center">Website PT. Gading Persada Mandiri</div>
          <div className="project-info-part p-9">
            <p className="text-black text-center text-xs font-bold">WEBSITE</p>
            <div className="flex items-center justify-center text-2xl tracking-wider font-bold absolute left-0 right-0 top-0 bottom-0 px-5 text-center">PT. Gading Persada Mandiri</div>
          </div>
        </div>
        <div className="project-info bg-light_gray_50 rounded-xl flex flex-col justify-center items-center">
          <Image src={"/yudatama_1.png"} width={294} height={293} className="w-full" alt="stars yudathama" />
          <div className="text-primary font-bold relative -top-6 text-center">Website PT. Stars Yudathama</div>
          <div className="project-info-part p-9">
            <p className="text-black text-center text-xs font-bold">WEBSITE</p>
            <div className="flex items-center justify-center text-2xl tracking-wider font-bold absolute left-0 right-0 top-0 bottom-0 px-5 text-center">PT. Stars Yudathama</div>
          </div>
        </div>
        <div className="project-info bg-light_gray_50 rounded-xl flex flex-col justify-center items-center">
          <Image src={"/baselog_1.png"} width={294} height={293} className="w-full" alt="baselog" />
          <div className="text-primary font-bold relative -top-6 text-center">Aplikasi BaseLog</div>
          <div className="project-info-part p-9">
            <p className="text-black text-center text-xs font-bold">APPLICATION</p>
            <div className="flex items-center justify-center text-2xl tracking-wider font-bold absolute left-0 right-0 top-0 bottom-0 px-5 text-center">BaseLog</div>
          </div>
        </div>
        <div className="project-info bg-light_gray_50 rounded-xl flex flex-col justify-center items-center">
          <Image src={"/catur_11.png"} width={294} height={293} className="w-full" alt="catur pariwara utama" />
          <div className="text-primary font-bold relative -top-6 text-center">Website PT. Catur Pariwara Utama</div>
          <div className="project-info-part p-9">
            <p className="text-black text-center text-xs font-bold">WEBSITE</p>
            <div className="flex items-center justify-center text-2xl tracking-wider font-bold absolute left-0 right-0 top-0 bottom-0 px-5 text-center">PT. Catur Pariwara Utama</div>
          </div>
        </div>
        <div className="project-info bg-light_gray_50 rounded-xl flex flex-col justify-center items-center">
          <Image src={"/admin_11.png"} width={294} height={293} className="w-full" alt="metawater" />
          <div className="text-primary font-bold relative -top-6 text-center">POS metaWater</div>
          <div className="project-info-part p-9">
            <p className="text-black text-center text-xs font-bold">APPLICATION</p>
            <div className="flex items-center justify-center text-2xl tracking-wider font-bold absolute left-0 right-0 top-0 bottom-0 px-5 text-center">POS metaWater</div>
          </div>
        </div>
        <div className="project-info bg-light_gray_50 rounded-xl flex flex-col justify-center items-center">
          <Image src={"/dinamika_1.png"} width={294} height={293} className="w-full" alt="dinamika network consultant" />
          <div className="text-primary font-bold relative -top-6 text-center">Website PT. Dinamika Network Consultant</div>
          <div className="project-info-part p-9">
            <p className="text-black text-center text-xs font-bold">WEBSITE</p>
            <div className="flex items-center justify-center text-2xl tracking-wider font-bold absolute left-0 right-0 top-0 bottom-0 px-5 text-center">PT. Dinamika Network Consultant</div>
          </div>
        </div>
        <div className="project-info bg-light_gray_50 rounded-xl flex flex-col justify-center items-center">
          <Image src={"/e_learning.png"} width={294} height={293} className="w-full" alt="e-learning" />
          <div className="text-primary font-bold relative -top-6 text-center">E-Learning SMK Darulmawa</div>
          <div className="project-info-part p-9">
            <p className="text-black text-center text-xs font-bold">APPLICATION</p>
            <div className="flex items-center justify-center text-2xl tracking-wider font-bold absolute left-0 right-0 top-0 bottom-0 px-5 text-center">Aplikasi E-Learning SMK Darukmawa</div>
          </div>
        </div>
      </div>
    </div>
  </>);
}
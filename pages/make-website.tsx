import Image from "next/image";
import { useWindowSize } from "@/plugins/windowDimensions";
import ProvidePart from "@/components/ProvidePart";
import { NextSeo } from "next-seo";
import Router, { useRouter } from "next/router";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { directWa } from "@/plugins/globalFunction";

export default function MakeWebsite() {
  const slidePrice = useRef<any>(null);
  const {width, height} = useWindowSize();
  const router = useRouter();

  const apps = [
    "Website Perusahaan",
    "Website Penjualan",
    "Website Pemerintahan",
    "Website UMKM",
    "Website Sekolah",
    "Website Personal",
    "Website Katalog Produk",
    "Website Organisasi",
    "Website Kampus"
  ];

  const settings = {
    centerMode: true,
    centerPadding: "0",
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
    rtl: true,
    beforeChange: (oldIndex: any, newIndex: any) => {}
  }

  return (<>
    <NextSeo
      title={`Loofytech - Jasa Pembuatan Website Murah`}
      description={`Loofytech adalah jasa, dibangun oleh tenaga profesional dan berpengalaman dibidangnya, cukup dengan modal 500.000`}
      canonical={`https://loofytech.com${router.asPath}`}
      openGraph={{
        title: "Loofytech - Jasa Pembuatan Website Murah",
        description: `Loofytech adalah jasa, dibangun oleh tenaga profesional dan berpengalaman dibidangnya, cukup dengan modal 500.000`,
        url: `https://loofytech.com${router.asPath}`,
        images: [
          {url: `https://loofytech.com/Loofy_Square_1.png`}
        ],
        siteName: "Loofytech - Jasa Pembuatan Website Murah"
      }}
      additionalMetaTags={[{
        property: 'keywords',
        content: 'loofytech, jasa it loofytech, jasa website loofytech, jasa aplikasi loofytech, jasa design produk loofytech, loofytech konsultan, loofytech consultant, aplikasi kantor loofytech, aplikasi kasir loofytech, aplikasi pembayaran loofytech, aplikasi pergudangan loofytech, it loofy, loofytech digital'
      }, {
        name: 'application-name',
        content: 'Loofytech - Jasa Pembuatan Website Murah'
      }, {
        httpEquiv: 'x-ua-compatible',
        content: 'IE=edge; chrome=1'
      }]}
    />
    <div style={{height: 200}} className="bg-secondary_a flex justify-center items-center text-xl text-center font-bold">
      <div className="relative -bottom-11">
        <h1 className="mb-0 px-5 tracking-wide">LAYANAN KAMI</h1>
        <hr />
        <p className="text-sm tracking-wide">Pembuatan Website</p>
      </div>
    </div>
    <div className="bg-primary pt-10 flex flex-col items-center justify-center relative pb-10 md:pb-64">
      <h1 className="text-3xl text-center text-white font-bold">Website apa yang anda butuhkan ?</h1>
      <Image src={"/ggggg.png"} width={600} height={384} alt="sssss" />
      <div className="gap-3 mt-10 relative -top-5 px-5 w-full grid grid-cols-2 md:grid-cols-3 md:w-auto md:px-0">
        {apps.map((m: any, i: number) => {
          return <div key={i} className="bg-white flex items-center justify-center py-2.5 rounded-lg select-make-app text-sm w-full md:text-base md:w-52">{m}</div>;
        })}
      </div>
    </div>
    <div className="bg-wave flex flex-col items-center justify-center relative">
      <div className="flex flex-col justify-center items-center relative top-10 md:top-36">
        <h1 className="text-xl text-center font-bold text-primary">Langkah Mudah Wujudkan Website Impian Anda.</h1>
        <div className="mt-5 w-full gap-5 grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col justify-center items-center relative rounded-xl or-design">
            <div className="relative top-4">
              <Image src={"/sec-21.png"} width={280} height={280} alt="We Listens" />
              <p className="text-lg text-center relative bottom-12 text-black">
                Konsultasi & Perencanaan
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center relative rounded-xl or-design">
            <div className="relative top-4">
              <Image src={"/sec-22.png"} width={280} height={280} alt="We Listens" />
              <p className="text-lg text-center relative bottom-12 text-black">
                Rancangan & Desain Web
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center relative rounded-xl or-design">
            <div className="relative top-4">
              <Image src={"/sec-23.png"} width={280} height={280} alt="We Listens" />
              <p className="text-lg text-center relative bottom-12 text-black">
                Pembuatan & Peluncuran
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 md:mt-24 flex flex-col items-center justify-center relative">
        <div className="relative top-20">
          <h1 className="text-xl text-center font-bold text-primary">Kami adalah tempat yang Tepat</h1>
          <p className="italic text-sm text-center text-primary">Kami akan memberikan Solusi dan Inovasi untuk Bisnis anda</p>
          <div className="flex flex-wrap justify-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            <div className="bg-primary rounded flex items-center justify-center p-5 siuu" style={{width: width < 768 ? 160 : 180, height: width < 768 ? 160 : 180}}>
              <Image src={"/Harga.png"} width={110} height={110} alt="harga negotiable" />
              <div>
                <h4 className="text-center font-bold mb-2 text-sm">Harga Negotiable</h4>
                <p className="text-center text-xs">Dapatkan Aplikasi yang anda butuhkan denga harga terbaik! Jangan ragu untuk bernegosiasi, kami siap memberikan penawaran spesial khusus untuk Anda</p>
              </div>
            </div>
            <div className="bg-primary rounded flex items-center justify-center p-5 siuu" style={{width: width < 768 ? 160 : 180, height: width < 768 ? 160 : 180}}>
              <Image src={"/jw_2.png"} width={110} height={110} alt="desain terbaik" />
              <div>
                <h4 className="text-center font-bold mb-2 text-sm">Desain Terbaik</h4>
                <p className="text-center text-xs">Tim kami memiliki pengetahuan mendalam tentang teknologi terbaru dan praktik terbaik, sehingga dapat memberikan solusi yang tepat dan inovatif untuk Aplikasi anda.</p>
              </div>
            </div>
            <div className="bg-primary rounded flex items-center justify-center p-5 siuu" style={{width: width < 768 ? 160 : 180, height: width < 768 ? 160 : 180}}>
              <Image src={"/jw_3.png"} width={110} height={110} alt="jasa web 3" />
              <div>
                <h4 className="text-center font-bold mb-2 text-sm">Mobile Friendly</h4>
                <p className="text-center text-xs">Sesuaikan tampilan, fitur, dan fungsionalitas sesuai dengan preferensi Anda sendiri. rasakan keajaiban fleksibilitas aplikasi untuk mencapai potensi penuh bisnis Anda.</p>
              </div>
            </div>
            <div className="bg-primary rounded flex items-center justify-center p-5 siuu" style={{width: width < 768 ? 160 : 180, height: width < 768 ? 160 : 180}}>
              <Image src={"/jw_4.png"} width={110} height={110} alt="jasa web 4" />
              <div>
                <h4 className="text-center font-bold mb-2 text-sm">Optimasi SEO</h4>
                <p className="text-center text-xs">Dengan kecepatan tinggi dan kapasitas yang luas, Server aplikasi kami adalah jawaban atas segala kebutuhan performa dan kehandalan dalam menjalankan aplikasi Anda.</p>
              </div>
            </div>
            <div className="bg-primary rounded flex items-center justify-center p-5 siuu" style={{width: width < 768 ? 160 : 180, height: width < 768 ? 160 : 180}}>
              <Image src={"/jw_5.png"} width={110} height={110} alt="jasa web 5" />
              <div>
                <h4 className="text-center font-bold mb-2 text-sm">CMS</h4>
                <p className="text-center text-xs">Privasi dan keamanan data Anda dengan sempurna! Sistem keamanan terbaik untuk melindungi informasi berharga Anda dari ancaman cyber dan intrusi yang berbahaya.</p>
              </div>
            </div>
            <div className="bg-primary rounded flex items-center justify-center p-5 siuu" style={{width: width < 768 ? 160 : 180, height: width < 768 ? 160 : 180}}>
              <Image src={"/jw_6.png"} width={110} height={110} alt="jasa web 6" />
              <div>
                <h4 className="text-center font-bold mb-2 text-sm">Pemeliharaan</h4>
                <p className="text-center text-xs">Dengan pemeliharaan rutin yang kami tawarkan, aplikasi Anda akan selalu diperbarui dengan teknologi terbaru dan dijamin berjalan lancar tanpa hambatan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full slick-price relative px-5 top-28 pb-28 md:px-0 md:w-auto md:pb-0">
        {width != 0 && width <= 767 ? <Slider {...settings} ref={slidePrice}>
          {/* Basic */}
          <div className="px-2 text-sm">
            <div className="px-8 py-12 bg-primary flex flex-col gap-0.5 rounded-lg service-info">
              <div className="text-3xl text-white text-center mb-5 font-bold">Basic</div>
              <div className="text-center mb-10 font-bold">
                <button
                  className="text-primary px-8 py-2 rounded-full bg-secondary"
                  onClick={() => directWa("Halo, Saya telah mengakses https://loofytech.com - saya tertarik membuat Website dengan “Paket Basic” dapatkah anda menjelaskan rinciannya ?")}
                >
                  Order Sekarang
                </button>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>3 Halaman</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>UI/UX Desain Simpel</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>User & Mobile Friendly</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>CTA WhatsApp</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>Free Domain</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} className="opacity-0" alt="icon check" />
                <span className="line-through">Maintenance Web</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} className="opacity-0" alt="icon check" />
                <span className="line-through">Sertifikat SSL</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} className="opacity-0" alt="icon check" />
                <span className="line-through">Request Fitur</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} className="opacity-0" alt="icon check" />
                <span className="line-through">Optimasi SEO</span>
              </div>
              <div className="text-white flex items-center  gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} className="opacity-0" alt="icon check" />
                <span className="line-through">Konten Manajemen</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} className="opacity-0" alt="icon check" />
                <span className="line-through">Bonus Logo Usaha</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} className="opacity-0" alt="icon check" />
                <span className="line-through">Harga Negotiable</span>
              </div>
            </div>
          </div>
          {/* Standart */}
          <div className="px-2 text-sm">
            <div className="px-8 py-12 bg-primary flex flex-col gap-0.5 rounded-lg service-info">
              <div className="text-3xl text-white text-center mb-5 font-bold">Standard</div>
              <div className="text-center mb-10 font-bold">
                <button
                  className="text-primary px-8 py-2 rounded-full bg-secondary"
                  onClick={() => directWa("Halo, Saya telah mengakses https://loofytech.com - saya tertarik membuat Website dengan “Paket Standar” dapatkah anda menjelaskan rinciannya ?")}
                >
                  Order Sekarang
                </button>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>5 Halaman</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>UI/UX Desain Simpel</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>User & Mobile Friendly</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>CTA WhatsApp</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>Free Domain</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>Maintenance Web</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>Sertifikat SSL</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} className="opacity-0" alt="icon check" />
                <span className="line-through">Request Fitur</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} className="opacity-0" alt="icon check" />
                <span className="line-through">Optimasi SEO</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} className="opacity-0" alt="icon check" />
                <span className="line-through">Konten Manajemen</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} className="opacity-0" alt="icon check" />
                <span className="line-through">Bonus Logo Usaha</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} className="opacity-0" alt="icon check" />
                <span className="line-through">Harga Negotiable</span>
              </div>
            </div>
          </div>
          {/* Premium */}
          <div className="px-2 text-sm">
            <div className="px-8 py-12 bg-primary flex flex-col gap-0.5 rounded-lg service-info">
              <div className="text-3xl text-white text-center mb-5 font-bold">Premium</div>
              <div className="text-center mb-10 font-bold">
                <button
                  className="text-primary px-8 py-2 rounded-full bg-secondary"
                  onClick={() => directWa("Halo, Saya telah mengakses https://loofytech.com - saya tertarik membuat Website dengan “Paket Premium” dapatkah anda menjelaskan rinciannya ?")}
                >
                  Order Sekarang
                </button>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>Lebih dari 5 Halaman</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>UI/UX Desain Simpel</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>User & Mobile Friendly</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>CTA WhatsApp</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>Free Domain</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>Maintenance Web</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>Sertifikat SSL</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>Request Fitur</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>Optimasi SEO</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>Konten Manajemen</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>Bonus Logo Usaha</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>Harga Negotiable</span>
              </div>
            </div>
          </div>
        </Slider> : <div className="gap-6 flex justify-between flex-col md:flex-row">
          {/* Basic */}
          <div className="w-64 text-sm">
            <div className="px-8 py-12 bg-primary flex flex-col gap-0.5 rounded-lg service-info">
              <div className="text-3xl text-white text-center mb-5 font-bold">Basic</div>
              <div className="text-center mb-10 font-bold">
                <button
                  className="text-primary px-8 py-2 rounded-full bg-secondary"
                  onClick={() => directWa("Halo, Saya telah mengakses https://loofytech.com - saya tertarik membuat Website dengan “Paket Basic” dapatkah anda menjelaskan rinciannya ?")}
                >
                  Order Sekarang
                </button>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>3 Halaman</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>UI/UX Desain Simpel</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>User & Mobile Friendly</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>CTA WhatsApp</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>Free Domain</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} className="opacity-0" alt="icon check" />
                <span className="line-through">Maintenance Web</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} className="opacity-0" alt="icon check" />
                <span className="line-through">Sertifikat SSL</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} className="opacity-0" alt="icon check" />
                <span className="line-through">Request Fitur</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} className="opacity-0" alt="icon check" />
                <span className="line-through">Optimasi SEO</span>
              </div>
              <div className="text-white flex items-center  gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} className="opacity-0" alt="icon check" />
                <span className="line-through">Konten Manajemen</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} className="opacity-0" alt="icon check" />
                <span className="line-through">Bonus Logo Usaha</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} className="opacity-0" alt="icon check" />
                <span className="line-through">Harga Negotiable</span>
              </div>
            </div>
          </div>
          {/* Standart */}
          <div className="w-64 text-sm">
            <div className="px-8 py-12 bg-primary flex flex-col gap-0.5 rounded-lg service-info">
              <div className="text-3xl text-white text-center mb-5 font-bold">Standard</div>
              <div className="text-center mb-10 font-bold">
                <button
                  className="text-primary px-8 py-2 rounded-full bg-secondary"
                  onClick={() => directWa("Halo, Saya telah mengakses https://loofytech.com - saya tertarik membuat Website dengan “Paket Standar” dapatkah anda menjelaskan rinciannya ?")}
                >
                  Order Sekarang
                </button>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>5 Halaman</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>UI/UX Desain Simpel</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>User & Mobile Friendly</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>CTA WhatsApp</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>Free Domain</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>Maintenance Web</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>Sertifikat SSL</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} className="opacity-0" alt="icon check" />
                <span className="line-through">Request Fitur</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} className="opacity-0" alt="icon check" />
                <span className="line-through">Optimasi SEO</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} className="opacity-0" alt="icon check" />
                <span className="line-through">Konten Manajemen</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} className="opacity-0" alt="icon check" />
                <span className="line-through">Bonus Logo Usaha</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} className="opacity-0" alt="icon check" />
                <span className="line-through">Harga Negotiable</span>
              </div>
            </div>
          </div>
          {/* Premium */}
          <div className="w-64 text-sm">
            <div className="px-8 py-12 bg-primary flex flex-col gap-0.5 rounded-lg service-info">
              <div className="text-3xl text-white text-center mb-5 font-bold">Premium</div>
              <div className="text-center mb-10 font-bold">
                <button
                  className="text-primary px-8 py-2 rounded-full bg-secondary"
                  onClick={() => directWa("Halo, Saya telah mengakses https://loofytech.com - saya tertarik membuat Website dengan “Paket Premium” dapatkah anda menjelaskan rinciannya ?")}
                >
                  Order Sekarang
                </button>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>Lebih dari 5 Halaman</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>UI/UX Desain Simpel</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>User & Mobile Friendly</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>CTA WhatsApp</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>Free Domain</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>Maintenance Web</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>Sertifikat SSL</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>Request Fitur</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>Optimasi SEO</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>Konten Manajemen</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>Bonus Logo Usaha</span>
              </div>
              <div className="text-white flex items-center gap-2">
                <Image src={"/check-circle.svg"} width={30} height={30} alt="icon check" />
                <span>Harga Negotiable</span>
              </div>
            </div>
          </div>
        </div>}
      </div>
    </div>
    <ProvidePart label="Ceritakan Rencana Anda" waMessage="Halo, Saya telah mengakses https://loofytech.com/make-website - saya ingin menyampaikan beberapa rencana saya" />
  </>);
}
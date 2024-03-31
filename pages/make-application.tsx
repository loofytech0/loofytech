import Image from "next/image";
import { useState } from "react";
import { useWindowSize } from "@/plugins/windowDimensions";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import ProvidePart from "@/components/ProvidePart";
import BoxClient from "@/components/BoxClient";

export default function MakeApplication() {
  const [showInfo, setShowInfo] = useState<string>("Identifikasi dan pemahaman Kebutuhan Aplikasi yang akan dikembangkan.");

  const {width, height} = useWindowSize();
  const router = useRouter();

  const sdlcs = [
    {
      key: "analisis",
      desc: "Identifikasi dan pemahaman Kebutuhan Aplikasi yang akan dikembangkan.",
      position: {
        right: 50,
        top: 70,
        height: 70,
        width: 160,
        rotate: "40deg"
      }
    },
    {
      key: "perencanaan",
      desc: "Penyusunan rencana proyek secara keseluruhan baik Alur Sistem & Desain sistem.",
      position: {
        width: 80,
        height: 150,
        right: 34,
        top: 197
      }
    },
    {
      key: "proses",
      desc: "Proses Pengembangan Aplikasi oleh tim Loofytech",
      position: {
        width: 160,
        height: 70,
        bottom: 50,
        right: 113,
        rotate: "-30deg"
      }
    },
    {
      key: "testing",
      desc: "pengujian fungsional, pengujian kinerja, pengujian keamanan, dan lain-lain.",
      position: {
        width: 160,
        height: 50,
        bottom: 90,
        left: 50,
        rotate: "40deg"
      }
    },
    {
      key: "implementasi",
      desc: "Instalasi dan Pelatihan terkait aplikasi kepada Instansi / Klien",
      position: {
        width: 80,
        height: 160,
        left: 33,
        top: 140
      }
    },
    {
      key: "pemeliharaan",
      desc: "Pemeliharaan rutin dan pembaruan sesuai kebutuhan dan perubahan",
      position: {
        width: 160,
        height: 80,
        top: 40,
        left: 100,
        rotate: "-30deg"
      }
    }
  ];
  
  const apps = [
    "Aplikasi Perkantoran",
    "Aplikasi Tiket",
    "Aplikasi Persuratan",
    "Aplikasi Toko",
    "Aplikasi Rumah Sakit",
    "Aplikasi Pergudangan",
    "Aplikasi Pemerintahan",
    "Aplikasi keuangan",
    "Aplikasi Koperasi"
  ];

  const handleSDLC = (param: string) => {
    setShowInfo(param);
  }

  return (<>
    <NextSeo
      title={`Loofytech - Jasa Pembuatan Aplikasi Murah`}
      description={`Loofytech adalah jasa, dibangun oleh tenaga profesional dan berpengalaman dibidangnya, cukup dengan modal 500.000`}
      canonical={`https://loofytech.com${router.asPath}`}
      openGraph={{
        title: "Loofytech - Jasa Pembuatan Aplikasi Murah",
        description: `Loofytech adalah jasa, dibangun oleh tenaga profesional dan berpengalaman dibidangnya, cukup dengan modal 500.000`,
        url: `https://loofytech.com${router.asPath}`,
        images: [
          {url: `https://loofytech.com/Loofy_Square_1.png`}
        ],
        siteName: "Loofytech - Jasa Pembuatan Aplikasi Murah"
      }}
      additionalMetaTags={[{
        property: 'keywords',
        content: 'loofytech, jasa it loofytech, jasa website loofytech, jasa aplikasi loofytech, jasa design produk loofytech, loofytech konsultan, loofytech consultant, aplikasi kantor loofytech, aplikasi kasir loofytech, aplikasi pembayaran loofytech, aplikasi pergudangan loofytech, it loofy, loofytech digital'
      }, {
        name: 'application-name',
        content: 'Loofytech - Jasa Pembuatan Aplikasi Murah'
      }, {
        httpEquiv: 'x-ua-compatible',
        content: 'IE=edge; chrome=1'
      }]}
    />
    <div style={{height: 200}} className="bg-secondary_a flex justify-center items-center text-xl text-center font-bold">
      <div className="relative -bottom-11">
        <h1 className="mb-0 px-5 tracking-wide">LAYANAN KAMI</h1>
        <hr />
        <p className="text-sm tracking-wide">Pembuatan Aplikasi</p>
      </div>
    </div>
    <div className="bg-primary pt-10 flex flex-col items-center justify-center relative pb-10 md:pb-64">
      <h1 className="text-3xl text-center text-white font-bold">Aplikasi apa yang anda butuhkan ?</h1>
      <Image src={"/ggggg.png"} width={600} height={384} alt="gggg" />
      <div className="gap-3 mt-10 relative -top-5 px-5 w-full grid grid-cols-2 md:grid-cols-3 md:w-auto md:px-0">
        {apps.map((m: any, i: number) => {
          return <div key={i} className="bg-white flex items-center justify-center py-2.5 rounded-lg select-make-app text-sm w-full md:text-base md:w-52">{m}</div>;
        })}
      </div>
    </div>
    <div className="bg-wave flex flex-col items-center justify-center relative">
      <div className="relative top-16 overflow-hidden">
        <h1 className="text-center text-xl font-bold text-primary mt-0 md:mt-20">Software Development Life Cycle</h1>
        <p className="italic text-center text-sm text-primary px-5">Panduan untuk mengelola proyek pengembangan Aplikasi secara efisien.</p>
        <div className="info-sldc bg-white">{showInfo}</div>
        <div className="my-5 animate-spin-cus relative">
          <Image src={"/SDLC_2.png"} width={540} height={540} alt="sdlc" />
          <div className="absolute w-full h-full opacity-50 top-0 rounded-full">
            {sdlcs.map((e: any, i: number) => {
              return <div
                key={i}
                className="absolute cursor-pointer"
                style={e.position}
                onClick={() => handleSDLC(e.desc)}
              />
            })}
          </div>
        </div>
      </div>
      <div className="mt-14 flex flex-col items-center justify-center relative top-10">
        <h1 className="text-xl font-bold text-center text-primary">Stack yang kami gunakan</h1>
        <span className="italic text-center text-sm text-primary px-5">Teknologi terkini yang banyak digunakan perusahaan - perusahaan besar.</span>
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-10">
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_76.png"} width={70} height={70} alt="stack 1" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_94.png"} width={70} height={70} alt="stack 2" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_87.png"} width={70} height={70} alt="stack 3" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_86.png"} width={70} height={70} alt="stack 4" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_82.png"} width={70} height={70} alt="stack 5" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_79.png"} width={70} height={70} alt="stack 6" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_98.png"} width={70} height={70} alt="stack 7" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_93.png"} width={70} height={70} alt="stack 8" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_95.png"} width={70} height={70} alt="stack 9" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_78.png"} width={70} height={70} alt="stack 10" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_77.png"} width={70} height={70} alt="stack 11" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_97.png"} width={70} height={70} alt="stack 12" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/boot@300x_1.png"} width={70} height={70} alt="stack 13" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_92.png"} width={70} height={70} alt="stack 14" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_90.png"} width={70} height={70} alt="stack 15" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/nuxt_1.png"} width={70} height={70} alt="stack 16" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_91.png"} width={70} height={70} alt="stack 17" />
          </div>
          <div
            style={{width: 90, height: 90, background: "#FFF", boxShadow: "1px 0px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
            className="shadow flex items-center justify-center"
          >
            <Image src={"/Asset_96.png"} width={70} height={70} alt="stack 18" />
          </div>
        </div>
        <div className="relative top-20 pb-36 md:pb-0">
          <h1 className="text-xl text-center font-bold text-primary">Kami adalah tempat yang Tepat</h1>
          <p className="italic text-sm text-center text-primary">Kami akan memberikan Solusi dan Inovasi untuk Bisnis anda</p>
          <div className="flex flex-wrap justify-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            <div className="bg-primary rounded flex items-center justify-center p-5 siuu" style={{width: width < 768 ? 160 : 180, height: width < 768 ? 160 : 180}}>
              <Image src={"/Harga.png"} width={200} height={200} alt="harga" />
              <div>
                <h4 className="text-center font-bold mb-2 text-sm">Harga Negotiable</h4>
                <p className="text-center text-xs">Dapatkan Aplikasi yang anda butuhkan denga harga terbaik! Jangan ragu untuk bernegosiasi, kami siap memberikan penawaran spesial khusus untuk Anda</p>
              </div>
            </div>
            <div className="bg-primary rounded flex items-center justify-center p-5 siuu" style={{width: width < 768 ? 160 : 180, height: width < 768 ? 160 : 180}}>
              <Image src={"/Skalabilitas.png"} width={200} height={200} alt="skalabilitas" />
              <div>
                <h4 className="text-center font-bold mb-2 text-sm">Skalabilitas</h4>
                <p className="text-center text-xs">Tim kami memiliki pengetahuan mendalam tentang teknologi terbaru dan praktik terbaik, sehingga dapat memberikan solusi yang tepat dan inovatif untuk Aplikasi anda.</p>
              </div>
            </div>
            <div className="bg-primary rounded flex items-center justify-center p-5 siuu" style={{width: width < 768 ? 160 : 180, height: width < 768 ? 160 : 180}}>
              <Image src={"/Speed.png"} width={200} height={200} alt="speed" />
              <div>
                <h4 className="text-center font-bold mb-2 text-sm">Fleksibel</h4>
                <p className="text-center text-xs">Sesuaikan tampilan, fitur, dan fungsionalitas sesuai dengan preferensi Anda sendiri. rasakan keajaiban fleksibilitas aplikasi untuk mencapai potensi penuh bisnis Anda.</p>
              </div>
            </div>
            <div className="bg-primary rounded flex items-center justify-center p-5 siuu" style={{width: width < 768 ? 160 : 180, height: width < 768 ? 160 : 180}}>
              <Image src={"/Server.png"} width={200} height={200} alt="server" />
              <div>
                <h4 className="text-center font-bold mb-2 text-sm">Server</h4>
                <p className="text-center text-xs">Dengan kecepatan tinggi dan kapasitas yang luas, Server aplikasi kami adalah jawaban atas segala kebutuhan performa dan kehandalan dalam menjalankan aplikasi Anda.</p>
              </div>
            </div>
            <div className="bg-primary rounded flex items-center justify-center p-5 siuu" style={{width: width < 768 ? 160 : 180, height: width < 768 ? 160 : 180}}>
              <Image src={"/Security.png"} width={200} height={200} alt="security" />
              <div>
                <h4 className="text-center font-bold mb-2 text-sm">Keamanan</h4>
                <p className="text-center text-xs">Privasi dan keamanan data Anda dengan sempurna! Sistem keamanan terbaik untuk melindungi informasi berharga Anda dari ancaman cyber dan intrusi yang berbahaya.</p>
              </div>
            </div>
            <div className="bg-primary rounded flex items-center justify-center p-5 siuu" style={{width: width < 768 ? 160 : 180, height: width < 768 ? 160 : 180}}>
              <Image src={"/setting_1.png"} width={200} height={200} alt="setting" />
              <div>
                <h4 className="text-center font-bold mb-2 text-sm">Pemeliharaan</h4>
                <p className="text-center text-xs">Dengan pemeliharaan rutin yang kami tawarkan, aplikasi Anda akan selalu diperbarui dengan teknologi terbaru dan dijamin berjalan lancar tanpa hambatan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ProvidePart label="Buat Aplikasi Anda !" waMessage="Halo, Saya telah mengakses www.loofytech.com/Aplikasi - saya tertarik membuat aplikasi dengan loofytech, bagaimanakah prosedurnya ?" />
    <BoxClient title="Klien Kami" subtitle="Kepuasaan pelanggan adalah yang utama bagi Loofytech" />
  </>);
}
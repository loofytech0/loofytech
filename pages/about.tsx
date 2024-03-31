import ProvidePart from "@/components/ProvidePart";
import Image from "next/image";
import { useWindowSize } from "@/plugins/windowDimensions";
import BoxClient from "@/components/BoxClient";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

export default function About() {
  const {width} = useWindowSize();
  const router = useRouter();

  return (<>
    <NextSeo
      title={`Loofytech - Tentang loofytech`}
      description={`Loofytech adalah jasa, dibangun oleh tenaga profesional dan berpengalaman dibidangnya, cukup dengan modal 500.000`}
      canonical={`https://loofytech.com${router.asPath}`}
      openGraph={{
        title: "Loofytech - Tentang loofytech",
        description: `Loofytech adalah jasa, dibangun oleh tenaga profesional dan berpengalaman dibidangnya, cukup dengan modal 500.000`,
        url: `https://loofytech.com${router.asPath}`,
        images: [
          {url: `https://loofytech.com/Loofy_Square_1.png`}
        ],
        siteName: "Loofytech - Tentang loofytech"
      }}
      additionalMetaTags={[{
        property: 'keywords',
        content: 'loofytech, jasa it loofytech, jasa website loofytech, jasa aplikasi loofytech, jasa design produk loofytech, loofytech konsultan, loofytech consultant, aplikasi kantor loofytech, aplikasi kasir loofytech, aplikasi pembayaran loofytech, aplikasi pergudangan loofytech, it loofy, loofytech digital'
      }, {
        name: 'application-name',
        content: 'Loofytech - Tentang loofytech'
      }, {
        httpEquiv: 'x-ua-compatible',
        content: 'IE=edge; chrome=1'
      }]}
    />
    <div style={{height: 200}} className="bg-secondary_a flex justify-center items-center text-xl text-center font-bold">
      <h1 className="relative -bottom-11">Tentang Kami</h1>
    </div>
    <div className="py-20 bg-white">
      <div className="flex items-center gap-3 flex-col md:flex-row">
        <div className="w-full flex justify-center md:justify-end">
          <Image src={"/tk_1.png"} width={250} height={253} alt="take 1" />
        </div>
        <div className="w-full flex justify-start">
          <div className="w-full md:w-2/3 text-2xl relative -bottom-4 text-center md:text-start">Memberikan Inovasi dan Solusi khususnya di bidang Teknologi Informasi agar berdampak Positif kepada pengguna.</div>
        </div>
      </div>
      <div className="flex items-center gap-5 flex-col mt-10 md:mt-0 md:flex-row">
        <div className="w-full flex justify-end">
          <div className="w-full md:w-2/3 text-2xl relative -bottom-4 text-center md:text-start" style={{direction: width < 640 ? "unset" : "rtl"}}>Mewujudkan sistem Teknologi profesional dengan harga terjangkau dalam membantu perubahan era digitalisasi di Indonesia.</div>
        </div>
        <div className="w-full flex justify-center md:justify-start">
          <Image src={"/tk_2.png"} width={250} height={253} alt="take 2" />
        </div>
      </div>
    </div>
    <ProvidePart label="Ceritakan Rencana Anda" waMessage="Halo, Saya telah mengakses https://loofytech.com/about - saya ingin menyampaikan beberapa rencana saya" />
    <BoxClient />
  </>);
}
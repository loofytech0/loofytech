import HomeSecond from "@/components/HomeSecond";
import HomeFirst from "@/components/HomeFirst";
import { useSelector, useDispatch } from "react-redux";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

export default function Home() {
  const {FIRST, SECOND} = useSelector((state: any) => state.home);
  const router = useRouter();

  return (<>
    <NextSeo
      title={`Loofytech - Jasa Pembuatan Website, Pembuatan Aplikasi dan Design Produk Murah`}
      description={`Loofytech adalah jasa, dibangun oleh tenaga profesional dan berpengalaman dibidangnya, cukup dengan modal 500.000`}
      canonical={`https://loofytech.com${router.asPath}`}
      openGraph={{
        title: "Loofytech - Jasa Pembuatan Website, Pembuatan Aplikasi dan Design Produk Murah",
        description: `Loofytech adalah jasa, dibangun oleh tenaga profesional dan berpengalaman dibidangnya, cukup dengan modal 500.000`,
        url: `https://loofytech.com${router.asPath}`,
        images: [
          {url: `https://loofytech.com/Loofy_Square_1.png`}
        ],
        siteName: "Loofytech - Jasa Pembuatan Website, Pembuatan Aplikasi dan Design Produk Murah"
      }}
      additionalMetaTags={[{
        property: 'keywords',
        content: 'loofytech, jasa it loofytech, jasa website loofytech, jasa aplikasi loofytech, jasa design produk loofytech, loofytech konsultan, loofytech consultant, aplikasi kantor loofytech, aplikasi kasir loofytech, aplikasi pembayaran loofytech, aplikasi pergudangan loofytech, it loofy, loofytech digital'
      }, {
        name: 'application-name',
        content: 'Loofytech - Jasa Pembuatan Website, Pembuatan Aplikasi dan Design Produk Murah'
      }, {
        httpEquiv: 'x-ua-compatible',
        content: 'IE=edge; chrome=1'
      }]}
    />
    {FIRST && <HomeFirst />}
    {SECOND && <HomeSecond />}
  </>);
}

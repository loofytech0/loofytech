import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (<>
    <div className="pb-5 pt-10 text-white bg-black_a flex flex-col md:flex-row justify-between px-4 md:px-28 xl:px-64">
      <div className="w-full md:w-1/4">
        <Logo width={137} height={58} color="#F1F1F1" />
        <div className="text-xs mt-2">
          Kami berdedikasi untuk menciptakan solusi inovatif digitalisasi Bisnis ataupun Produk anda. Dengan prinsip bekerja sepenuh hati untuk memberikan pengalaman terbaik kepada pelanggan, sehingga Anda dapat meraih potensi penuh dari teknologi dengan percaya diri dan tanpa beban finansial yang berlebihan.
        </div>
      </div>
      <div className="">
        <div>
          <div className="whitespace-nowrap mb-5 font-bold relative top-3 md:top-0">Layanan Kami</div>
          <div className="flex flex-col gap-0.5 md:gap-2 text-sm whitespace-nowrap">
            <Link href={"/make-website"}>Jasa Pembuatan Website</Link>
            <Link href={"/make-application"}>Jasa Pembuatan Aplikasi</Link>
            <Link href={"/design-product"}>Jasa Desain Produk</Link>
          </div>
        </div>
      </div>
      <div className="">
        <div>
          <div className="whitespace-nowrap mb-5 font-bold relative top-3 md:top-0">Sosial Media</div>
          <div className="flex gap-1.5 items-center relative -left-0.5">
            <Link href={"https://www.linkedin.com"} target="_blank">
              <Image src={"/LINKEDIN.svg"} width={26} height={26} alt="" />
            </Link>
            <Link href={"https://www.instagram.com"} target="_blank">
              <Image src={"/IG.svg"} width={26} height={26} alt="" />
            </Link>
            <Link href={"https://github.com"} target="_blank">
              <Image src={"/GITHUB.svg"} width={26} height={26} alt="" />
            </Link>
            <Link href={"https://facebook.com"} target="_blank">
              <Image src={"/FACEBOOK.svg"} width={26} height={26} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="" style={{width: "178px"}}>
        <div className="whitespace-nowrap mb-5 font-bold relative top-3 md:top-0">Kontak Kami</div>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <Image src={"/Wablack.svg"} width={25} height={25} alt="" />
            <div className="text-sm">+62853-7734-4144</div>
          </div>
          <div className="flex items-center gap-1.5">
            <Image src={"/Mail.svg"} width={25} height={25} alt="" />
            <div className="text-sm">contact@loofytech.com</div>
          </div>
          <div className="flex items-start gap-1.5">
            <Image src={"/Location.svg"} width={25} height={25} alt="" />
            <div className="text-sm">Bandar Lampung, Lampung, Indonesia</div>
          </div>
        </div>
      </div>
    </div>
    <div className="py-2.5 bg-black_a flex flex-col lg:flex-row justify-between items-center px-2 md:px-28 xl:px-64">
      <div className="flex items-center gap-1.5 text-secondary_a">
        <Image src={"/ph_copyright-light.svg"} width={20} height={20} alt="" />
        <span className="text-sm">2023 <Link href={"https://loofytech.com"}>Loofytech</Link> | All Rights Reserved Copyright</span>
      </div>
      <div className="flex items-center gap-1.5 text-secondary_a">
        Design with
        <Image src={"/made_love.svg"} width={12} height={11} alt="" />
        by Loofyteam
      </div>
    </div>
  </>);
}
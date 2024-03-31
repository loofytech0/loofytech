import Logo from "./Logo";
import Link from "next/link";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { useWindowSize } from "@/plugins/windowDimensions";
import { useRouter } from "next/router";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const {width} = useWindowSize();

  const openMobileMenu = () => {
    setOpen(true);
  }

  const closeMobileMenu = () => {
    setOpen(false);
  }

  const mobileLink = (param: string) => {
    setOpen(false);
    return router.push(param);
  }

  return (<>
    <div className="z-50 fixed top-0 bg-white w-full flex justify-between items-center py-5 px-2 md:px-28 xl:px-64 shadow">
      <Link href={"/"} className="relative top-1">
        <Logo width={144} height={48} color="#010101" />
      </Link>
      {width > 640 ? <div className="h-full gap-10 font-semibold justify-center items-center hidden md:flex">
        <Link href={"/"} className="relative">
          Beranda
          {router.asPath == "/" && <div className="h-1 w-full -bottom-3 bg-secondary absolute"></div>}
        </Link>
        <div className="head-dropdown">
          <span>Layanan Kami</span>
          {["/make-website", "/make-application", "/design-product"].includes(router.asPath) && (
            <div className="h-1 w-full -bottom-3 bg-secondary absolute"></div>
          )}
          <div className="head-dropdown-content bg-transparent pt-3">
            <Link className="bg-white whitespace-nowrap hover:bg-gray hover:text-white" href={"/make-website"}>Pembuatan Website</Link>
            <Link className="bg-white whitespace-nowrap hover:bg-gray hover:text-white" href={"/make-application"}>Pembuatan Program / Aplikasi</Link>
            <Link className="bg-white whitespace-nowrap hover:bg-gray hover:text-white" href={"/design-product"}>Desain Produk</Link>
          </div>
        </div>
        {/* <Link href={"/information"} className="relative">
          {router.asPath == "/information" && <div className="h-1 w-full -bottom-3 bg-secondary absolute"></div>}
          Informasi
        </Link> */}
        <Link href={"/about"} className="relative">
          {router.asPath == "/about" && <div className="h-1 w-full -bottom-3 bg-secondary absolute"></div>}
          Tentang Kami
        </Link>
        <Link href={"/contact"} className="relative">
          {router.asPath == "/contact" && <div className="h-1 w-full -bottom-3 bg-secondary absolute"></div>}
          Kontak
        </Link>
      </div> : <div className="py-2 px-3 outline-none" onClick={openMobileMenu}>
        <MenuOutlined style={{fontSize: 22}} />
      </div>}
    </div>
    {width <= 640 && <Drawer
      title={<div className="relative top-1">
        <Logo width={80} height={28} color="#010101" />
      </div>}
      width={"80%"}
      placement="right"
      onClose={closeMobileMenu}
      open={open}
    >
      <div className="text-lg py-2" onClick={() => mobileLink("/")}>
        Beranda
      </div>
      <div className="text-lg py-2" onClick={() => mobileLink("/make-website")}>
        Pembuatan Website
      </div>
      <div className="text-lg py-2" onClick={() => mobileLink("/make-application")}>
        Pembuatan Aplikasi
      </div>
      <div className="text-lg py-2" onClick={() => mobileLink("/design-product")}>
        Desain Produk
      </div>
      <div className="text-lg py-2" onClick={() => mobileLink("/information")}>
        Informasi
      </div>
      <div className="text-lg py-2" onClick={() => mobileLink("/about")}>
        Tentang Kami
      </div>
      <div className="text-lg py-2" onClick={() => mobileLink("/contact")}>
        Kontak
      </div>
    </Drawer>}
  </>);
}
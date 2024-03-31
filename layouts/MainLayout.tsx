import Image from "next/image";
import { Quicksand } from "next/font/google";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { setBgBot, setBgTop, setFlash } from "@/store/reducers/transitionReducer";
import { Suspense, useEffect, useState } from "react";
import NextNProgress from "nextjs-progressbar";
import { useRouter } from "next/router";
import { useEffectOnce } from "usehooks-ts";
import Select from "react-select";
import Logo from "@/components/Logo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FlyingMessage from "@/components/FlyingMessage";
import { useWindowSize } from "@/plugins/windowDimensions";
import ScrollToTop from "@/components/ScrollToTop";

const font = Quicksand({
  subsets: ["latin"],
  weight: "400"
});

interface LProps {
  children: React.ReactNode;
}

export default function MainLayout({children}: LProps) {
  const {FIRST, SECOND, HEADER_COLOR_CSS} = useSelector((state: any) => state.home);
  const {FLASH} = useSelector((state: any) => state.transition);
  const dispatch = useDispatch();
  const router = useRouter();
  const {width} = useWindowSize();
  const [showToTop, setShowToTop] = useState<boolean>(false);

  const handleRouteStartChange = () => {
    dispatch(setFlash(true));
    setTransitionStart();
  }
  
  const handleRouteCompleteChange = () => {
    setTimeout(() => {
      setTransitionEnd();
      setTimeout(() => dispatch(setFlash(false)), 500);
    }, 1000);
  }

  const scrll = () => {
    if (window.scrollY <= 500) {
      setShowToTop(false);
    } else {
      setShowToTop(true);
    }
  }

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteStartChange);
    router.events.on('routeChangeComplete', handleRouteCompleteChange);

    window.addEventListener("scroll", scrll);
    return () => window.removeEventListener('scroll', scrll);
  }, []);

  useEffectOnce(() => {
    dispatch(setFlash(true));
    setTransitionEnd();
    setTimeout(() => dispatch(setFlash(false)), 500);
  });

  const setTransitionStart = () => {
    dispatch(setBgTop({
      initial: {left: "-100%"},
      animate: {left: 0},
      transition: {ease: "easeInOut"}
    }));
    dispatch(setBgBot({
      initial: {left: "-100%"},
      animate: {left: 0},
      transition: {ease: "easeInOut"}
    }));
  }

  const setTransitionEnd = () => {
    dispatch(setBgTop({
      initial: {left: 0},
      animate: {left: "-100%"},
      transition: {ease: "easeInOut"}
    }));
    dispatch(setBgBot({
      initial: {left: 0},
      animate: {left: "-100%"},
      transition: {ease: "easeInOut"}
    }));
  }

  return (<div className={font.className}>
    <Header />
    {children}
    <Footer />
    {showToTop && <ScrollToTop />}
    <FlyingMessage />
    <NextNProgress color="#0F3D3E" />
  </div>);
}
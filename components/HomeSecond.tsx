import { motion, useScroll } from "framer-motion";
import { createRef, useEffect, useRef, useState } from "react";
import { setHeaderColor } from "@/store/reducers/homeReducer";
import { useDispatch } from "react-redux";

export default function HomeSecond() {
  const dispatch = useDispatch();

  useEffect(() => {
    document.querySelector(".snap-container")?.addEventListener("scroll", (e) => {
      const inPosition = (e.currentTarget as HTMLElement).scrollTop;
      const fixPosition = parseInt(inPosition.toFixed());
      if (fixPosition >= 400) {
        dispatch(setHeaderColor("text-black"));
      } else {
        dispatch(setHeaderColor("text-primary"));
      }
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
  }, []);

  return (<div className="absolute top-0 w-full z-10 snap-container">
    <div className="bg-black px-40 flex snap-item">
      <div className="h-full w-2/3 flex flex-col justify-center text-white select-none">
        <h1 className="text-7xl">Welcome to loofytech</h1>
        <p className="text-2xl">We are a company engaged in the field of website development and innovative product design. With a main focus on the latest technology, our team is committed to provide the best and creative solutions for our clients.</p>
      </div>
      <div className="h-full w-1/3 flex items-center justify-center">
        <div className="relative top-40">
          <button className="bg-primary text-black text-4xl leading-5 pt-5 pb-4 px-10 rounded-full">Contact Us</button>
        </div>
      </div>
    </div>
    <div className="bg-white snap-item flex items-center justify-center">section 2</div>
    <div className="bg-white snap-item flex items-center justify-center">section 3</div>
    <div className="bg-white snap-item flex items-center justify-center">section 4</div>
  </div>);
}
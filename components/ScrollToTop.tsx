import { useWindowSize } from "@/plugins/windowDimensions";
import { useEffect, useRef } from "react";

export default function ScrollToTop() {
  const {width} = useWindowSize();

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }

  return (<>
    <div
      onClick={scrollToTop}
      className={`fixed cursor-pointer w-10 h-10 bg-secondary rounded flex items-center justify-center ${width >= 640 ? "bottom-6 left-6" : "bottom-4 left-4"}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
      </svg>
    </div>
  </>);
}
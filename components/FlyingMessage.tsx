import { directWa } from "@/plugins/globalFunction";
import { useWindowSize } from "@/plugins/windowDimensions";
import Image from "next/image";

interface CProps {
  message?: string;
}

export default function FlyingMessage({message}: CProps) {
  const {width} = useWindowSize();

  return (<>
    <div className={`fixed w-14 h-14 rounded-full bg-primary_a ${width >= 768 ? "bottom-6 right-6" : "bottom-2 right-3"}`}>
      {width >= 768 && <div className="shadow-lg whitespace-nowrap rounded-lg absolute bg-white py-1 px-3 right-16 top-3">
        Tanya aja dulu
      </div>}
      <div className="animate-ping bg-primary_a rounded-full w-2/3 h-2/3 absolute" style={{top: "15%", left: "15%"}}></div>
      <Image
        src={"/flymsg.png"}
        width={200}
        height={200}
        onClick={() => directWa("Saya telah mengakses loofytech.com, saya tertarik ingin bekerja sama")}
        className="cursor-pointer relative z-10"
        alt="wame"
      />
    </div>
  </>);
}
import { directWa } from "@/plugins/globalFunction";
import Image from "next/image";

interface PProps {
  waMessage?: string;
  label: string;
}

export default function ProvidePart({waMessage, label}: PProps) {
  return (<>
    <div className="bg-primary relative flex flex-col justify-center items-center text-xl text-center wbgx" style={{minHeight: 556}}>
      <div className="absolute top-0 md:-top-20">
        <Image src={"/jumbo.png"} width={500} height={500} alt="" />
      </div>
      <div className="relative -bottom-28 text-center text-white font-bold w-full text-3xl md:w-2/3 md:text-5xl">
        We Provide the Key to
        <br />
        Unlock All Doors of Your Plans
      </div>
      {waMessage && <div className="absolute bottom-10">
        <button
          className="bg-white text-primary flex items-center gap-2 rounded-lg px-8 py-2"
          onClick={() => directWa(waMessage)}
        >
          <Image src={"/formkit_whatsapp.svg"} width={24} height={24} alt="logo whatsapp" />
          <span className="">{label}</span>
        </button>
      </div>}
    </div>
  </>);
}
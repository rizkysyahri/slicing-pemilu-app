import { Carousel } from "@material-tailwind/react";
import monkeyImage from "../assets/image 1.png";

export default function CarouselDefault() {
  return (
    <Carousel className="rounded-xl">
      <div className="bg-white h-auto w-[947px] mx-auto p-10 flex flex-row mt-10 rounded-lg">
        <img src={monkeyImage} alt="" className="w-[246px]" />
        <div className="ml-10 flex-col flex">
          <span className="font-bold text-2xl">Nomor Urut: 1</span>
          <span className="font-bold text-4xl text-[#5E0000]">
            CINTARA SURYA PALOH
          </span>
          <p className="mt-4">VISI & MISI :</p>
          <ul className="list-disc ml-6">
            <li>Memindahkan Indonesia ke Isekai</li>
            <li>Nonton anime 3x sehari</li>
            <li>Melakukan peresapan pada budaya jepang</li>
          </ul>

          <p className="mt-4">KOALISI :</p>
          <ul className="list-disc ml-6">
            <li>Partai Pesatuan Wibop</li>
            <li>Partai Redbull</li>
            <li>Partai Black Magic</li>
          </ul>
        </div>
      </div>
      <div className="bg-white h-auto w-[947px] mx-auto p-10 flex flex-row mt-10 rounded-lg">
        <img src={monkeyImage} alt="" className="w-[246px]" />
        <div className="ml-10 flex-col flex">
          <span className="font-bold text-2xl">Nomor Urut: 1</span>
          <span className="font-bold text-4xl text-[#5E0000]">
            CINTARA SURYA PALOH
          </span>
          <p className="mt-4">VISI & MISI :</p>
          <ul className="list-disc ml-6">
            <li>Memindahkan Indonesia ke Isekai</li>
            <li>Nonton anime 3x sehari</li>
            <li>Melakukan peresapan pada budaya jepang</li>
          </ul>

          <p className="mt-4">KOALISI :</p>
          <ul className="list-disc ml-6">
            <li>Partai Pesatuan Wibop</li>
            <li>Partai Redbull</li>
            <li>Partai Black Magic</li>
          </ul>
        </div>
      </div>
      <div className="bg-white h-auto w-[947px] mx-auto p-10 flex flex-row mt-10 rounded-lg">
        <img src={monkeyImage} alt="" className="w-[246px]" />
        <div className="ml-10 flex-col flex">
          <span className="font-bold text-2xl">Nomor Urut: 1</span>
          <span className="font-bold text-4xl text-[#5E0000]">
            CINTARA SURYA PALOH
          </span>
          <p className="mt-4">VISI & MISI :</p>
          <ul className="list-disc ml-6">
            <li>Memindahkan Indonesia ke Isekai</li>
            <li>Nonton anime 3x sehari</li>
            <li>Melakukan peresapan pada budaya jepang</li>
          </ul>

          <p className="mt-4">KOALISI :</p>
          <ul className="list-disc ml-6">
            <li>Partai Pesatuan Wibop</li>
            <li>Partai Redbull</li>
            <li>Partai Black Magic</li>
          </ul>
        </div>
      </div>
    </Carousel>
  );
}

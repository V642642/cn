import Image from "next/image";
import { useState } from "react";
import GalleryPopup from "../popups/GalleryPopup";

export default function MyGallery() {

  const [open, setOpen] = useState({state :false , initialSlide : 0});

  return (
    <div className="flex flex-col items-center px-4 py-20 justify-center gap-2 w-full">
      <GalleryPopup open={open} setOpen={setOpen} />
      <div className=" flex w-full items-center gap-3 justify-center flex-col md:flex-row">
        <Image
        alt="gallery"
          onClick={() => setOpen({state :true, initialSlide : 0})}
          src="/images/slide6.webp"
          width={300}
          height={130}
          className="w-full h-[250px] object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />
        <Image
        alt="gallery"
          onClick={() => setOpen({state :true, initialSlide : 1})}
          src="/images/slide9.webp"
          width={300}
          height={130}
          className="w-full h-[250px] object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />

        <Image
        alt="gallery"
          onClick={() => setOpen({state :true, initialSlide : 2})}
          src="/images/slide2.jpeg"
          width={300}
          height={130}
          className="w-full h-[250px] object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />

        <Image
        alt="gallery"
          onClick={() => setOpen({state :true, initialSlide : 3})}
          src="/images/slide3.jpeg"
          width={300}
          height={130}
          className="w-full h-[250px] object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />
      </div>
      <div className=" flex w-full items-center gap-3 justify-center flex-col md:flex-row">
        <Image
        alt="gallery"
          onClick={() => setOpen({state :true, initialSlide : 4})}
          src="/images/slide4.webp"
          width={300}
          height={130}
          className="w-full h-[250px] object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />
        <Image
        alt="gallery"
          onClick={() => setOpen({state :true, initialSlide : 5})}
          src="/images/slide5.webp"
          width={300}
          height={130}
          className="w-full h-[250px] object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />

        <Image
        alt="gallery"
          onClick={() => setOpen({state :true, initialSlide : 6})}
          src="/images/slide8.webp"
          width={300}
          height={130}
          className="w-full h-[250px] object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />

        <Image
        alt="gallery"
          onClick={() => setOpen({state :true, initialSlide : 7})}
          src="/images/slide1.jpeg"
          width={300}
          height={130}
          className="w-full h-[250px] object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />
      </div>
      <div className=" flex w-full items-center gap-3 justify-center flex-col md:flex-row">
        <Image
        alt="gallery"
          onClick={() => setOpen({state :true, initialSlide : 8})}
          src="/images/HRAIAward.jpeg"
          width={300}
          height={130}
          className="w-full h-[250px] object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />
        <Image
        alt="gallery"
          onClick={() => setOpen({state :true, initialSlide : 9})}
          src="/images/IMG_2148.webp"
          width={300}
          height={130}
          className="w-full h-[250px] object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />

        <Image
        alt="gallery"
          onClick={() => setOpen({state :true, initialSlide : 10})}
          src="/images/hiringplug1.webp"
          width={300}
          height={130}
          className="w-full h-[250px] object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />

        <Image
        alt="gallery"
          onClick={() => setOpen({state :true, initialSlide : 11})}
          src="/images/hiringplug2.webp"
          width={300}
          height={130}
          className="w-full h-[250px] object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />
      </div>
      <div className=" flex w-full items-center gap-3 justify-center flex-col md:flex-row">
        <Image
        alt="gallery"
          onClick={() => setOpen({state :true, initialSlide : 12})}
          src="/images/hiringplug3.webp"
          width={300}
          height={130}
          className="w-full h-[250px] object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />
        <Image
        alt="gallery"
          onClick={() => setOpen({state :true, initialSlide : 13})}
          src="/images/hiringplug4.webp"
          width={300}
          height={130}
          className="w-full h-[250px] object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />

        <Image
        alt="gallery"
          onClick={() => setOpen({state :true, initialSlide : 14})}
          src="/images/team.webp"
          width={300}
          height={130}
          className="w-full h-[250px] object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />

        <Image
        alt="gallery"
          onClick={() => setOpen({state :true, initialSlide : 15})}
          src="/images/team2.webp"
          width={300}
          height={130}
          className="w-full h-[250px] object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />
      </div>
      <div className=" flex w-full items-center gap-3 justify-center flex-col md:flex-row">
        <Image
        alt="gallery"
          onClick={() => setOpen({state :true, initialSlide : 16})}
          src="/images/team3.webp"
          width={300}
          height={130}
          className="w-full h-[250px] object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />
        <Image
        alt="gallery"
          onClick={() => setOpen({state :true, initialSlide : 17})}
          src="/images/team4.webp"
          width={300}
          height={130}
          className="w-full h-[250px] object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />

        <Image
        alt="gallery"
          onClick={() => setOpen({state :true, initialSlide : 18})}
          src="/images/conf.webp"
          width={300}
          height={130}
          className="w-full h-[250px] object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />

        <Image
        alt="gallery"
          onClick={() => setOpen({state :true, initialSlide : 19})}
          src="/images/hiringplug4 (1).webp"
          width={300}
          height={130}
          className="w-full h-[250px] object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />
      </div>
    </div>
  );
}

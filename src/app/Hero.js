import Image from "next/image";
import sparkles from "@/app/images/Sparkles.png";
import imageOne from "@/app/images/image-one.png";
import imageTwo from "@/app/images/image-two.png";
import imageThree from "@/app/images/image-three.png";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 mb-[50px] h-[100vh]">
      <div className="flex flex-col items-center p-[100px] pt-[150px] shadow-md relative">
        <div className="box "></div>
        <div className="box-2"></div>
        <p className="text-[14px] border-[#cbebd4]  font-normal leading-7 border-2 rounded-[40px] flex p-[5px] mb-[10px] self-start ">
          <div className="">
            <Image
              src={sparkles}
              width={20}
              height={50}
              className="border-2 border-[#cbebd4] rounded-full py-[4px]  "
            />
          </div>
          Introducing Mailer's design books
        </p>
        <h1 className="text-[#707581] font-inter text-[48px]  font-bold leading-[135%] tracking-[-0.96px]">
          Get <span className="font-bold text-black">Mailerlite's</span> top 10
          must-read design books of the year!
        </h1>
        <p className="text-[#707581] font-inter text-[18px] not-italic font-normal leading-7 ">
          Fuel your inspiration and elevate your skills with our handpicked
          selsction of must read design books.
        </p>
        <button className="bg-[#58bf73] mt-[20px] px-[12px] py-[16px] self-start text-[#f6f7f7] rounded-[7px]">
          Explore Our List
        </button>
        <div className="down-box "></div>
        <div className="down-box-2"></div>
      </div>
      <div className="flex items-center mt-[-30px]">
        <div>
          {" "}
          <Image src={imageOne} width={150} height={100} />
        </div>

        <div className="flex flex-col justify-center w-[100%] items-center">
          <Image src={imageTwo} width="100%" height="100%" className="z-10" />

          <div className="mt-[-90px]">
            <h2 className="font-bold text-[27px] text-center">
              Reimagining Design: Unlocking Strategic innovation
            </h2>
            <p className="text-center text-[#707581]">Kevin G.Bethune</p>
          </div>
        </div>
        <div>
          {" "}
          <Image src={imageThree} width={200} height={50} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

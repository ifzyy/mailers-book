import Image from "next/image";
import voltage from "@/app/images/high-voltage.jpg";
import bookOne from "@/app/images/book-one.png";
import bookTwo from "@/app/images/book-two.png";
import bookThree from "@/app/images/book-three.png";
import bookFour from "@/app/images/book-four.png";
import bookFive from "@/app/images/book-five.png";
import bookSix from "@/app/images/book-six.png";
import bookSeven from "@/app/images/book-seven.png";
import bookEight from "@/app/images/book-eight.png";
import bookNine from "@/app/images/book-nine.png";
import bookTen from "@/app/images/book-ten.png";
import vector from "@/app/images/vector-9.png";
import vectorTwo from "@/app/images/vector-9.png";
const Main = () => {
  return (
    <div className="flex flex-col items-center p-[50px]">
      <p className="text-[14px] border-[#cbebd4]  font-normal leading-7 border-2 rounded-[40px] flex p-[5px] mb-[10px] self-start ">
        <div className="">
          <Image
            src={voltage}
            width={20}
            height={50}
            className="border-2 border-[#cbebd4] rounded-full py-[4px]  "
          />
        </div>
        Buy Now and get 2 books free
      </p>
      <div className="flex gap-[30px] items-center">
        <h2 className="text-[27px] font-bold text-[#707581] font-inter leading-[150%] ">
          <span className="text-black">Discover,</span>{" "}
          <span className="text-black">Engage,</span> and{" "}
          <span className="text-black">Immerse</span> Yourself in Our Must-Read
          Top 10 Collection
        </h2>
        <h2 className="text-[#707581] text-[20px] p-[20px]">
          Explore an extraordinary collection, immerse yourself in riveting
          narratives, and ignite your imagination with our handpicked selection
          of must-read books!
        </h2>
      </div>
      <div className="mt-[30px] grid grid-cols-3">
        {" "}
        <div className="border-b-[0.5px] border-r-[0.5px] border-[#79cc8f]">
          {" "}
          <Image src={bookOne} width="120%" height="120%" />
        </div>
        <div className="border-b-[1px] border-r-[0.45px] border-[#79cc8f]">
          {" "}
          <Image src={bookTwo} width="120%" height="120%" />{" "}
        </div>
        <div className="border-b-[0.5px] border-[#79cc8f]">
          {" "}
          <Image src={bookThree} width="120%" height="120%" />{" "}
        </div>{" "}
        <div className="border-b-[0.5px] border-r-[1px] border-[#79cc8f]">
          {" "}
          <Image src={bookFour} width="120%" height="120%" />{" "}
        </div>
        <div className="border-b-[1px] border-r-[1px] border-[#79cc8f]">
          {" "}
          <Image src={bookFive} width="120%" height="120%" />{" "}
        </div>
        <div className="border-b-[0.5px] border-[#79cc8f]">
          {" "}
          <Image src={bookSix} width="120%" height="120%" />{" "}
        </div>{" "}
        <div className=" border-r-[0.5px] border-[#79cc8f]">
          {" "}
          <Image src={bookSeven} width="120%" height="120%" />{" "}
        </div>
        <div className="border-r-[0.9px] border-[#79cc8f]">
          {" "}
          <Image src={bookEight} width="120%" height="120%" />{" "}
        </div>
        <div className=" border-[#79cc8f]">
          <Image src={bookNine} width="120%" height="120%" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Main;

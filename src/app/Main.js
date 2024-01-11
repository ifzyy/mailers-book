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
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";
import vectorTwo from "@/app/images/vector-9.png";
const Main = () => {
  return (
    <>
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

    <span className="bg-black flex flex-col px-20 py-12 items-start max-md:px-5">
      <div className="w-[635px] max-w-full mt-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[66%] max-md:w-full max-md:ml-0">
            <span className="flex grow flex-col items-center mt-7 max-md:mt-8">
              <div className="border border-[color:var(--Foundation-Grey-grey-700,#363B45)] bg-neutral-800 flex w-[9px] shrink-0 h-2.5 flex-col border-solid" />
              <div className="text-neutral-100 text-4xl font-semibold leading-[49px] tracking-tighter self-stretch mt-2.5">
                <span className="text-gray-400">What you get</span> purchasing{" "}
                <span className="text-gray-400">from our</span>
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch">
              <div className="flex justify-between gap-0 items-end">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7d9bd068-9f78-45a5-829e-f56c02884900?apiKey=857f11b861f84bb5a594c7e92461f6ee&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d9bd068-9f78-45a5-829e-f56c02884900?apiKey=857f11b861f84bb5a594c7e92461f6ee&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d9bd068-9f78-45a5-829e-f56c02884900?apiKey=857f11b861f84bb5a594c7e92461f6ee&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d9bd068-9f78-45a5-829e-f56c02884900?apiKey=857f11b861f84bb5a594c7e92461f6ee&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d9bd068-9f78-45a5-829e-f56c02884900?apiKey=857f11b861f84bb5a594c7e92461f6ee&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d9bd068-9f78-45a5-829e-f56c02884900?apiKey=857f11b861f84bb5a594c7e92461f6ee&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d9bd068-9f78-45a5-829e-f56c02884900?apiKey=857f11b861f84bb5a594c7e92461f6ee&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d9bd068-9f78-45a5-829e-f56c02884900?apiKey=857f11b861f84bb5a594c7e92461f6ee&"
                  className="aspect-[0.85] object-contain object-center w-[23px] overflow-hidden shrink-0 max-w-full mt-7"
                />
                <span className="items-stretch shadow-sm bg-green-500 flex gap-1 px-5 py-2 rounded-3xl border-2 border-solid border-green-700 self-start">
                  <div className="text-white text-sm font-medium leading-6 grow whitespace-nowrap">
                    Buy 3, Get one free{" "}
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2f9a1e9a760b93040abb383414dfca56fe86d24b5666c7b84c4c7b4944a52e67?apiKey=857f11b861f84bb5a594c7e92461f6ee&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f9a1e9a760b93040abb383414dfca56fe86d24b5666c7b84c4c7b4944a52e67?apiKey=857f11b861f84bb5a594c7e92461f6ee&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f9a1e9a760b93040abb383414dfca56fe86d24b5666c7b84c4c7b4944a52e67?apiKey=857f11b861f84bb5a594c7e92461f6ee&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f9a1e9a760b93040abb383414dfca56fe86d24b5666c7b84c4c7b4944a52e67?apiKey=857f11b861f84bb5a594c7e92461f6ee&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f9a1e9a760b93040abb383414dfca56fe86d24b5666c7b84c4c7b4944a52e67?apiKey=857f11b861f84bb5a594c7e92461f6ee&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f9a1e9a760b93040abb383414dfca56fe86d24b5666c7b84c4c7b4944a52e67?apiKey=857f11b861f84bb5a594c7e92461f6ee&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f9a1e9a760b93040abb383414dfca56fe86d24b5666c7b84c4c7b4944a52e67?apiKey=857f11b861f84bb5a594c7e92461f6ee&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2f9a1e9a760b93040abb383414dfca56fe86d24b5666c7b84c4c7b4944a52e67?apiKey=857f11b861f84bb5a594c7e92461f6ee&"
                    className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
                  />
                </span>
              </div>
              <div className="border border-[color:var(--Foundation-Grey-grey-700,#363B45)] bg-neutral-800 flex w-[9px] shrink-0 h-2.5 flex-col mt-8 border-solid self-start" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-gray-400 text-xl leading-8 self-stretch mt-9 max-md:max-w-full">
        When you purchase from our collection, you get more than just a book.
        You unlock a world of benefits:
      </div>
      <div className="justify-between items-stretch self-stretch flex gap-5 mt-6 mb-8 pr-8 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5391a3a9d34215e8d6f4d205aab80aab3f6e9fd3fd8103edb14b7d41cb0a73ad?apiKey=857f11b861f84bb5a594c7e92461f6ee&"
          className="aspect-[0] object-contain object-center w-px stroke-[1px] stroke-zinc-700 stroke-opacity-0 overflow-hidden shrink-0 max-w-full"
        />
        <span className="self-center flex grow basis-[0%] flex-col my-auto max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/22df9ff3ad85bef367f08fd5161e27f9935f86bc4599e0a0ee5aab1d3106383b?apiKey=857f11b861f84bb5a594c7e92461f6ee&"
            className="aspect-square object-contain object-center w-12 justify-center items-center overflow-hidden max-w-full self-start"
          />
          <div className="justify-center text-neutral-100 text-2xl font-semibold leading-8 tracking-tight self-stretch mt-5 max-md:max-w-full">
            Free Shipping
          </div>
          <div className="text-gray-400 text-base leading-6 self-stretch mt-1 max-md:max-w-full">
            Enjoy the convenience of free shipping on all book orders. No extra
            cost, no hidden fees. Delivered right to your doorstep, so you can
            dive into your next read without delay.
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/892012befa768dbc714496dbb9211691cea7ec69e45978a1102dc228f1a31e1a?apiKey=857f11b861f84bb5a594c7e92461f6ee&"
            className="aspect-square object-contain object-center w-12 justify-center items-center overflow-hidden max-w-full mt-16 self-start max-md:mt-10"
          />
          <div className="justify-center text-neutral-100 text-2xl font-semibold leading-8 tracking-tight self-stretch mt-5 max-md:max-w-full">
            Best Price{" "}
          </div>
          <div className="text-gray-400 text-base leading-6 self-stretch mt-1 max-md:max-w-full">
            Discover exceptional value with our competitive prices. We strive to
            offer you the best deals on our handpicked selection of books. Get
            your next great read at a price that won't break the bank.
          </div>
        </span>{" "}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/154569c46d0e6f7235b172f67e5df1ab51dced66d3b8b63b0ad0f7ba3a2f3a5b?apiKey=857f11b861f84bb5a594c7e92461f6ee&"
          className="aspect-[0] object-contain object-center w-px stroke-[1px] stroke-zinc-700 stroke-opacity-0 overflow-hidden shrink-0 max-w-full"
        />{" "}
        <span className="self-center flex grow basis-[0%] flex-col my-auto max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb783e82f8453db5dbdc22b1e2aeb718f44d7e3353172b430a1d0b126cf288b0?apiKey=857f11b861f84bb5a594c7e92461f6ee&"
            className="aspect-square object-contain object-center w-12 justify-center items-center overflow-hidden max-w-full self-start"
          />{" "}
          <div className="justify-center text-neutral-100 text-2xl font-semibold leading-8 tracking-tight self-stretch mt-5 max-md:max-w-full">
            Quality Guarantee
          </div>{" "}
          <div className="text-gray-400 text-base leading-6 self-stretch mt-1 max-md:max-w-full">
            We take pride in curating only the finest books for our collection.
            Each book undergoes rigorous selection, ensuring impeccable quality
            in storytelling, writing, and production. Your satisfaction is our
            guarantee
          </div>{" "}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/03e88e4cc59def85f699b7982cb3152a3d63e39fb46a2a48079c629e1c9884a8?apiKey=857f11b861f84bb5a594c7e92461f6ee&"
            className="aspect-square object-contain object-center w-12 justify-center items-center overflow-hidden max-w-full mt-14 self-start max-md:mt-10"
          />{" "}
          <div className="justify-center text-neutral-100 text-2xl font-semibold leading-8 tracking-tight self-stretch mt-5 max-md:max-w-full">
            Exclusive offer{" "}
          </div>{" "}
          <div className="text-gray-400 text-base leading-6 self-stretch mt-1 max-md:max-w-full">
            Unlock exclusive offers and discounts when you shop from our
            collection. As a valued customer, you'll gain access to special
            promotions, limited editions, and bundle deals. Experience the joy
            of discovering hidden gems and unique editions
          </div>
        </span>
      </div>
    </span>
  

<Testimonials />
<Newsletter />
    </>
  
  );
};

export default Main;

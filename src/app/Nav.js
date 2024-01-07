import Image from "next/image"
import logo from "@/app/images/logo.png"
const Nav = () => {
  return (
    <div className="flex items-center justify-between p-[30px]">
      <div className="flex items-center">
        <div className="text-[25px] text-normal flex items-center text-[#202329] font-bold">
        <Image src={logo} width={50} height={50} />
          Mailer's Book
        </div>

        <ul className="flex pl-[30px] gap-[20px] text-[#4c5361] text-[16px]">
          <li>Blog</li>
          <li>Contact Us</li>
          <li>Feedback</li>
          <li>Shipping</li>
        </ul>
      </div>

      <ul className="flex items-center gap-[10px]">
        <li className="text-[#4c5361] text-[16px] font-normal">Cart (0)</li>
        <li className="bg-[#58bf73] px-[12px] py-[16px] text-[#f6f7f7] rounded-[7px]">Explore Our List</li>
      </ul>
    </div>
  );
};

export default Nav;

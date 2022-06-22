import Image from "next/image";
import BArrow from "../public/img/buttom-arrow.svg";
import logo from "../public/img/logo.svg";

export default function Nav() {
  return (
    <nav className="flex items-center relative justify-between px-16 z-40 mt-4">
      <div className="w-[140px]">
        <Image src={logo} />
      </div>
      <div className="flex -mr-24">
        <ul className="flex">
          <li className="px-4">
            <a className="flex items-center cursor-pointer">
              محصولات <span className="w-4 h-4"><Image src={BArrow} /></span>
            </a>
          </li>
          <li className="px-4">
            <a className="flex items-center cursor-pointer">
              کاربردها <span className="w-4 h-4"><Image src={BArrow} /></span>
            </a>
          </li>
          <li className="px-4">
            <a className="flex items-center cursor-pointer">
              توسعه دهندگان <span className="w-4 h-4"><Image src={BArrow} /></span>
            </a>
          </li>
          <li className="px-4">
            <a className="flex items-center cursor-pointer">
              درباره ما <span className="w-4 h-4"><Image src={BArrow} /></span>
            </a>
          </li>
          <li className="px-4">
            <a>قیمت</a>
          </li>
        </ul>
      </div>
      <div className="flex">
        <button className=" bg-black text-white text-sm py-2 px-4 ml-4 rounded-xl">
          API
        </button>
        <button className="bg-black border py-2 px-4 text-yellow-500 rounded-xl">
          ثبت نام/ورود
        </button>
      </div>
    </nav>
  );
}

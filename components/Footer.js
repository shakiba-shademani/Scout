import Image from "next/image";
import logo from "../public/img/logo-dark.svg"

export default function Footer() {
  return (
    <footer className="bg-[#3A3B3C] text-white mt-16">
      <div className="container px-4 text-sm">
        <div className="py-12 flex border-box">
          <div className="inline-block mr-20">
            <Image src={logo} />
          </div>
          <div className="flex justify-around w-2/3 mr-56">
            <nav className="flex flex-col text-right relative">
              <div className="text-yellow-500 text-xl mb-2">توسعه دهندگان</div>
              <a href="#">سندباکس</a>
              <a href="#">مستندات فنی</a>
            </nav>
            <nav className="flex flex-col text-right relative">
              <div className="text-yellow-500 text-xl mb-2">سرویس ها</div>
              <a href="#">بانکی حسابی</a>
              <a href="#">استعلامی تبدیلی</a>
              <a href="#">احراز هویت </a>
              <a href="#">اعتبار سنجی</a>
              <a href="#">خدماتی</a>
              <a href="#">افتتاح حساب غیر حضوری</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

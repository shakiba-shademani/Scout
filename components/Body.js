import lamp from "../public/img/lamp.svg"
import moushak from "../public/img/moushak.svg";
import conversation from "../public/img/conversation.svg";
import targetBlack from "../public/img/target-yellow-black.svg";
import contacts from "../public/img/contacts.svg";
import cloud from "../public/img/cloud.svg";
import note from "../public/img/note.svg";
import pay from "../public/img/pay.svg";
import mountain from "../public/img/mountain.svg";
import star from "../public/img/star.svg";
import Image from "next/image";


export default function Body() {
  return (
    <div>
      <div className="flex justify-center px-8">
      <div className="flex flex-col items-center mt-24 mr-32">
        <div className="text-5xl font-bold mb-4">نوآوری بدون مرز</div>
        <div className="text-5xl font-bold mb-4 bg-black text-yellow-500 w-fit">Innovation</div>
        <div className="text-5xl font-bold mb-4 bg-black text-yellow-500 w-fit">without Borders</div>

        <p className="font-bold text-xl text-center text-slate-700">
          دسترسی آسان و سریع به <br />وب‌سرویس‌های بانکی و خدماتی
        </p>
      </div>
      <div className="-mt-16 w-1/2"><Image src={lamp} /></div>
    </div>
      <div className="flex justify-center items-center mb-8">
        <div className="w-1/2">
      <div className="w-72 -mt-72 mr-24">
          <Image src={targetBlack} />
          </div> 
          <div className="w-40 mr-80 -mt-16">
          <Image src={conversation} />
        </div>
        </div>
        <div className="flex flex-col w-[30%]">
          <p className="text-3xl font-bold mb-8 z-30">
            واریز امن،    
          </p>
          <p className="text-3xl font-bold mb-8 z-30">
             بی‌دردسر و مقیاس‌پذیر پول
          </p>
          <p className="mb-8">
            از داخل نرم‌افزار خود بدون مراجعه به شعبه یا اینترنت بانک، با
            کاربرانتان تصفیه‌حساب کنید
          </p>
          <div>
            <a>
              <button className="bg-black text-white px-4 py-2 rounded">
                  Read More
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-yellow-300">
        <div className="flex flex-col justify-center mr-28 w-1/2">
        <p className="text-3xl text-right mb-4">تأیید آنی هویت کاربران</p>
        <p className="text-justify mb-8">
          با استفاده از مراجع هویتی مختلف، از صحت اطلاعات هویتی کاربران مطلع
          شوید و فرآیندهای کشف تقلب، مبارزه با پول‌شویی و مدیریت کاربران خود را
          تسهیل کنید
        </p>
        <div>
            <a>
              <button className="bg-black text-white px-4 py-2 rounded">
                  Read More
              </button>
            </a>
          </div>
        </div>
        <div className="-mt-56 ml-16"> <Image src={contacts} /></div>
      </div>
      

      <div className="flex justify-evenly items-center mt-20">
      <div className="w-[35%]">
          <Image src={moushak} />
        </div>
        <div className="flex flex-col justify-center items-center">
        <p className="text-3xl text-right mb-4">دایرکت دبیت:
        <br /> پرداخت خودکار انواع قبض</p>
        <p> برداشت مستقیم هزینه‌های دوره‌ای از حساب مشتریان</p>
        <button className="bg-black text-white rounded-2xl cursor-pointer mt-4 p-3">
          Read More
        </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-[8rem]">
        <p className="text-5xl text-right mb-4">همه‌چیز، یکجا!</p>
        <p>
        قبض خدماتی مثل آب و برق گاز ، ولت(کیف پول) ، ناجی ، شارژ
        </p>
        <div className="flex justify-evenly w-[75%] mt-16">
<div className="bg-yellow-300 rounded-full w-56 h-56 p-12"><Image src={cloud} /></div>
<div className="bg-yellow-300 rounded-full w-56 h-56 p-12"><Image src={note} /></div>
<div className="bg-yellow-300 rounded-full w-56 h-56 p-12"><Image src={mountain} /></div>
        </div>
        <div className="flex justify-evenly w-[75%] mt-8">
<div className=""><p>سرویس‌ های خدماتی</p></div>
<div className=""><p>سرویس های استعلامی</p></div>
<div className=""><p>سرویس های تبدیلی</p></div>
        </div>
      </div>

      <div className="flex justify-center bg-yellow-300 mt-32">
        <div className="flex flex-col justify-center mr-28 w-1/2">
        <p className="text-3xl text-right mb-4">Pay-As-You-Go</p>
        <p className="text-justify mb-8">
        حتی اگر کسب وکارتان خیلی کوچک یا خیلی بزرگ است، نگران نباشید!
        </p>
        <div>
            <a>
              <button className="bg-black text-white px-4 py-2 rounded">
                  Read More
              </button>
            </a>
          </div>
        </div>
        <div className="-mb-32"> <Image src={pay} /></div>
      </div>

      <div className="relative flex flex-col justify-center items-center mt-[8rem]">
        <p className="text-3xl mb-4">به {`<زبان />`} خودتان</p>
        <p>
          مستندات فنی کامل تمام وب سرویس‌های فینوتک اینجا هست!
        </p>
        <div className="w-[33%] mt-7"><Image src={star} /></div>
        <div>
            <a>
              <button className="bg-black text-white px-4 py-2 rounded">
                  Read More
              </button>
            </a>
          </div>
      </div>
    </div>
  );
}

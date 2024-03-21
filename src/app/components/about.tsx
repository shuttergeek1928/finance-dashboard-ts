import React from "react";
import Image from "next/image";
import Link from "next/link";

const payments = [
  {
    date: "2024/03/13",
    title: "Payment 1",
    imgSrc: "/visa.svg",
    amount: 900.4,
  },
  {
    date: "2024/03/12",
    title: "Payment 2",
    imgSrc: "/visa.svg",
    amount: 600.4,
  },
  {
    date: "2024/03/11",
    title: "Payment 3",
    imgSrc: "/visa.svg",
    amount: 200.4,
  },
];

const About = () => {
  return (
    <>
      <div className="flex flex-col h-full w-full items-center justify-between gap-8">
        <div className="flex flex-col h-full w-full items-center justify-evenly">
          {/* IMAGE CONTAINER */}
          <div className="">
            <Image
              src="/profilePicture.png"
              alt="profile"
              width={100}
              height={100}
              className=" rounded-full shadow-xl"
            />
            <h2 className="text-base font-semibold text-center">
              Marcy Walden
            </h2>
            <p className="text-xs text-gray-500 text-center"> Investor</p>
          </div>
          {/* ABOUT CONTAINER */}
          <div>
            <p className="text-base font-semibold">About</p>
            <p className="text-xs text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="flex flex-col h-full w-full items-center justify-evenly">
          <div className="flex flex-col w-full items-center justify-between gap-4">
            <div className="flex w-full justify-between items-center gap-6">
              <p className="text-base font-semibold">Activities</p>
              <Link href="/" className="text-xs">
                View All
              </Link>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-col items-start justify-end gap-4">
                {payments.map((payment) => (
                  <div className="flex gap-8 items-center justify-center">
                    <Image
                      src={payment.imgSrc}
                      alt={payment.title}
                      width={30}
                      height={30}
                    />
                    <section>
                      <h6 className="text-base">{payment.title}</h6>
                      <p className="text-[8px] text-gray">
                        {payment.date} : &#8377; {payment.amount}
                      </p>
                    </section>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

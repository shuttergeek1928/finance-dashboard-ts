import Image from "next/image";
import Link from "next/link";
import React from "react";

const navLinks = [
  { url: "/finances", title: "Dashboard", imgSrc: "/dashboard.svg" },
  { url: "/income", title: "Income", imgSrc: "/income2.svg" },
  { url: "/investments", title: "Investments", imgSrc: "/investor.svg" },
  { url: "/payments", title: "Payments", imgSrc: "/payments.svg" },
  { url: "/liabilities", title: "Liabilities", imgSrc: "/loans.svg" },
  { url: "/sip", title: "SIP", imgSrc: "/investment.svg" },
  { url: "/emi", title: "EMI", imgSrc: "/emi.svg" },
];

const links = [
    { url: "/settings", title: "Settings", imgSrc: "/settings.svg" },
    { url: "/logout", title: "Logout", imgSrc: "/logout.svg" },
  ];
const NavigationTab = () => {
  return (
    <>
      <div className="flex flex-col items-start gap-4">
        {navLinks.map((link) => (
          <div className="flex gap-4 items-center justify-start">
            <Image src={link.imgSrc} alt="dashboard" width={20} height={20} className=""/>
            <Link href={link.url} className="text-lg">
              {link.title}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-start gap-4">
        {links.map((link) => (
          <div className="flex gap-4 items-center justify-center">
            <Image src={link.imgSrc} alt="dashboard" width={18} height={18} />
            <Link href={link.url} className="text-base">
              {link.title}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default NavigationTab;

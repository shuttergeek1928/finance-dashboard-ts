import Link from "next/link";
import Image from "next/image";
const links = [
  { url: "/", title: "Home" },
  { url: "/finances", title: "Finances" },
  { url: "/about", title: "About" },
];

const NavBar = () => {
  return (
    <>
      {/* CONTAINER */}
      <div className="flex items-center h-14 justify-between px-4 sm:px-8 md:px-12 lg:px-28 xl:px-48 py-4 text-lg border-b-2">
        {/* HYPERLINKS */}
        <div className="hidden md:flex gap-4 w-1/3 text-black">
          {links.map((link) => (
            <Link href={link.url} key={link.title}>
              {link.title}
            </Link>
          ))}
        </div>
        {/* LOGO */}
        <div className="md:hidded lg:flex xl:w-1/3 xl:justify-center">
          <Link
            href="/"
            className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
          >
            <span className="w-14 text-white m-auto">Finance</span>
            <span className="w-20 h-6 bg-white text-black flex items-center justify-center">
              Dashboard
            </span>
          </Link>
        </div>
        {/* SOCIAL ICONSS */}
        <div className="hidden md:flex md:justify-end gap-4 w-1/3">
          <Link href="#">
            <Image src="/github.png" alt="" width={24} height={24}></Image>
          </Link>
          <Link href="#">
            <Image src="/instagram.png" alt="" width={24} height={24}></Image>
          </Link>
          <Link href="#">
            <Image src="/linkedin.png" alt="" width={24} height={24}></Image>
          </Link>
          <Link href="#">
            <Image src="/facebook.png" alt="" width={24} height={24}></Image>
          </Link>
          <Link href="#">
            <Image src="/dribbble.png" alt="" width={24} height={24}></Image>
          </Link>
          <Link href="#">
            <Image src="/pinterest.png" alt="" width={24} height={24}></Image>
          </Link>
        </div>
        {/* RESPONSIVE MENU */}
        {/* <div className="md:hidded"></div> */}
        {/* MENU LIST */}
        {/* <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"></div> */}
      </div>
    </>
  );
};

export default NavBar;

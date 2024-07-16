import Image from "next/image";
import Link from "next/link";
import logo from "@assets/images/logo.png";

const MenuItems = [
  {
    name: "SOB COLLECTIONS",
    href: "/collections",
  },
  {
    name: "PRODUCTS",
    href: "/products",
  },
];

const MenuBar = () => {
  return (
    <div className="flex justify-between w-full items-center pr-10">
      <Link href="/">
        <Image width={200} height={200} className="h-full" src={logo.src} alt="logo" />
      </Link>
      <div className="flex">
        {MenuItems.map((item, index) => {
          return (
            <Link href={item.href} key={`${item.name}_${index}`}>
              <div className="h-full flex items-center text-white pl-8 text-[18] font-bold">{item.name}</div>;
            </Link>
          )
        })}
      </div>
    </div>
  );
};

export default MenuBar;

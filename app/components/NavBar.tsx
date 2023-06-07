import Link from "next/link";
export default function NavBar() {
  const navLinks = [
    {
      href: "/",
      name: "Main page",
    },
    {
      href: "/nfts",
      name: "Nfts",
    },
  ];

  return (
    <div className={"p-[20px] w-[100%] bg-black flex gap-[10px]"}>
      {navLinks.map((link) => {
        return (
          <Link className={"text-white"} key={link.name} href={`${link.href}`}>
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}

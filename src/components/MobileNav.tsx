"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

interface LinkItem {
  name: string;
  path: string;
}

const links: LinkItem[] = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "skills", path: "/skills" },
  { name: "projects", path: "/projects" },
  { name: "contact", path: "/contact" },
];

const MobileNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-blue-100" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              RANA BISMA<span className="text-blue-800">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname ? "text-blue-800 border-b-2 border-blue-800" : ""
              } text-xl capitalize hover:text-blue-800 transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

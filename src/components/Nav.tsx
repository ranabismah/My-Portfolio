"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define the type for each link in the navigation
interface LinkItem {
  name: string;
  path: string;
}

const links: LinkItem[] = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "skills",
    path: "/skills",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav: React.FC = () => {
  const pathname = usePathname();
  console.log(pathname); 

  return (
    <nav className="flex gap-8 text-blue-700">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathname && "text-blue-900 border-b-2 border-blue-900"
          } capitalize font-medium hover:text-blue-950 transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;

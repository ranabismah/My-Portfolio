import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Type definition for the social items
interface SocialItem {
  icon: JSX.Element;
  path: string;
}

// Props for the Social component
interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const socials: SocialItem[] = [
  { icon: <FaGithub />, path: "https://github.com/ranabismah" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/rana-bisma-qasim-537bab2bb" },
  { icon: <MdEmail />, path: "mailto:ranabismah178@gmail.com" },
];

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;

import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/belarminojunior" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/belarmino-sim%C3%A3o-j%C3%BAnior-72230a301/",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/belarminojunior____/",
  },
  {
    icon: <FaXTwitter />,
    path: "/",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;

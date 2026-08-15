import {FaDiscord, FaTwitter, FaInstagram, FaLinkedin} from "react-icons/fa";

const socialLinks = [
  {href: "https://discord.com", icon: <FaDiscord/>},
  {href: "https://twitter.com/ifhamINstyle", icon: <FaTwitter/>},
  {href: "https://instagram.com/onlyifham", icon: <FaInstagram/>},
  {href: "https://linkedin.com/in/syedifham", icon: <FaLinkedin/>},
];

const currentYear = new Date().getFullYear();


const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©IFHAM {currentYear}. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;


import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const SocialLink = ({ title, link }: { title: string; link: string }) => {
  return (
    <>
      <Link
        href={link}
        target="_blank"
        className="flex group items-center justify-center gap-2 font-semibold text-xl text-gray-400"
      >
        <p className="group-hover:text-white">{title}</p>
        <FiArrowUpRight className="translate-x-0 translate-y-0 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
      </Link>
    </>
  );
};

export default SocialLink;

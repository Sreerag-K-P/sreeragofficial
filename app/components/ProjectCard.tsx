import Image from "next/image";
import Link from "next/link";
import { type } from "os";
type Props = {
  title: string;
  link: string;
  img: string;
};

const ProjectCard = ({ title, link, img }: Props) => {
  return (
    <>
      <Link href={link} target="_blank">
        <div className="w-full h-80 border-[1px] border-blue-600 rounded-lg overflow-hidden relative group">
          <Image
            src={img}
            alt={title}
            height={350}
            width={350}
            className="object-cover translate-y-0 group-hover:-translate-y-[65%] transition-transform duration-[3s]"
          />
          <p className="absolute hidden group-hover:inline-block py-1 text-white text-center font-semibold bottom-0 w-full bg-blue-600 duration-300">
            {title}
          </p>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;

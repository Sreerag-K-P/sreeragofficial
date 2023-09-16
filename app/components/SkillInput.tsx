import Link from "next/link";
interface props {
  title: string;
  link: string;
}
const SkillInput = ({ title, link }: props) => {
  return (
    <Link href={link} target="_blank">
      <p className="tracking-wide border rounded-lg border-blue-800 py-2 px-6 text-lg bg-transparent text-gray-400 hover:text-white hover:border-blue-600 hover:bg-black duration-300">
        {title}
      </p>
    </Link>
  );
};

export default SkillInput;

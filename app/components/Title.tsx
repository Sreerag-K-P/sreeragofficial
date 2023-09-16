import { ReactNode } from "react";

interface Props {
  text: string;
  icon: ReactNode;
}

const Title = ({ text, icon }: Props) => {
  return (
    <div className="flex items-center gap-4 text-2xl group pb-6">
      <h3 className="font-semibold relative overflow-hidden">
        {text}
        <span className="absolute inline-block bottom-0 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300 w-full h-[2px] bg-blue-600"></span>
      </h3>
      <span className="text-blue-600">{icon}</span>
    </div>
  );
};

export default Title;

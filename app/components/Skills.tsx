import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillInput from "./SkillInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillInput
          title="Javascript"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <SkillInput title="Next js" link="https://nextjs.org/" />
        <SkillInput title="React" link="https://react.dev/" />
        <SkillInput title="Tailwind css" link="https://tailwindcss.com/" />
        <SkillInput title="Typescript" link="https://www.typescriptlang.org/" />
        <SkillInput title="HTML5" link="" />
        <SkillInput title="CSS" link="" />
        <SkillInput title="Git" link="" />
        <SkillInput title="Sanity" link="" />
        <SkillInput title="Mongodb" link="" />
        <SkillInput title="Vercel" link="" />
        <SkillInput title="Npm" link="" />
        <SkillInput title="Node" link="" />
        <SkillInput title="Netlify" link="" />
        <SkillInput title="Sanity" link="" />
      </div>
    </div>
  );
};

export default Skills;

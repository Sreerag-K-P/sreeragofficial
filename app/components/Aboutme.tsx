import React from "react";
import Title from "./Title";
import { SiInformatica } from "react-icons/si";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wider flex flex-col gap-6">
        <p>
          Hi, I am Sreerag K P, a B Tech (CSE) graduate with a passion for full
          stack development . I am excited to begin my career in web development
          and am eager to learn and grow in this field. My skills include Nextjs
          Tailwind css, Typescript, javascript,react ,html and css and I am
          confident in my ability to apply these skills to real-world
          situations. Outside of work, I enjoy watching Indian football, which
          have taught me valuable lessons about importance of being part of a
          team.
        </p>
        <p>
          I am a motivated and dedicated individual who is ready to contribute
          to a team and make a positive impact. <br />
          My Age : 24 <br />
          Place : kerala,India <br />
          Date of birth: 21-01-1999 <br />
          Graduation: Bachelor of technology in computer science and engineering{" "}
          <br />
          CGPA: 7.46 <br />
          Graduated from :Government Engineering Collage , Wayanad kerala. in
          2021 (Under KTU - University)
        </p>
      </div>
    </div>
  );
};

export default Aboutme;

import Title from "./Title";
import { FaProjectDiagram } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import nike from "@/public/img/projects/nike.png";
import restorent from "@/public/img/projects/Restaurant Home.png";
import threads from "@/public/img/projects/threads-app-tau-sooty.vercel.app_.png";
import bookstore from "@/public/img/projects/book-store-mern-stack-s5oc-eb4b26epu-sreerag-k-p.vercel.app_.png";
import portfolio from "@/public/img/projects/localhost_3000_.png";
import parel from "@/public/img/projects/parel.png";
import ibm from "@/public/img/projects/ibm.png";
import gpt3 from "@/public/img/projects/gpt3.png";
import metaversus from "@/public/img/projects/MacBook Pro - 2.png";
import ecommerce from "@/public/img/projects/ecommerce-nextjs-sreerag-k-p.vercel.app_.png";
import youtube from "@/public/img/projects/youtube.png";
const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          title="Ecommerce website"
          link="https://ecommerce-nextjs-sreerag-k-p.vercel.app/"
          img={ecommerce.src}
        />
        <ProjectCard
          title="Youtube-clone"
          link="https://youtube-next-n98iv2ga6-sreerag-k-p.vercel.app"
          img={youtube.src}
        />
        <ProjectCard
          title="Bookstore-mern"
          link="https://book-store-mern-stack-s5oc-eb4b26epu-sreerag-k-p.vercel.app/"
          img={bookstore.src}
        />
        <ProjectCard
          title="Parel creative -landing page clone"
          link="https://sreerag-k-p.github.io/Procreativeclonesite/"
          img={parel.src}
        />
        <ProjectCard
          title="IBM landing page clone"
          link="https://ibm-sreerag.vercel.app/"
          img={ibm.src}
        />
        <ProjectCard
          title="NikeShoes landing page"
          link="https://nikeshoes-landing-page.vercel.app/"
          img={nike.src}
        />
        <ProjectCard
          title="Restaurant landing page"
          link="https://restorentlandpage.netlify.app/"
          img={restorent.src}
        />
        <ProjectCard
          title="GPT3 landing page"
          link="https://gpt3reactsreerag.netlify.app/"
          img={gpt3.src}
        />
        <ProjectCard
          title="Metaversus"
          link="https://metaversus-eight-lilac.vercel.app/"
          img={metaversus.src}
        />
        <ProjectCard title="Portfolio" link="#" img={portfolio.src} />
        {/* <ProjectCard
          title="Threads"
          link="https://threads-app-tau-sooty.vercel.app/"
          img={threads.src}
        /> */}
      </div>
    </div>
  );
};

export default Projects;

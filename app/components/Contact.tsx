import Link from "next/link";
import SocialLink from "./SocialLink";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl font-bold text-center ">
          Let us create some awesome products!
        </h2>
        <p className="text-lg tracking-wide font-medium text-center">
          I am always open to discussing with our projects.
        </p>
        <Link href="mailto:sreeragkjnivas4324602@gmail.com">
          <button
            type="button"
            className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300"
          >
            Say Hello
          </button>
        </Link>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
        <SocialLink title="Github" link="https://github.com/Sreerag-K-P" />
        <SocialLink
          title="LinkedIn"
          link="https://www.linkedin.com/in/sreeragdevoloper/"
        />
        <SocialLink
          title="Facebook"
          link="https://www.facebook.com/profile.php?id=100017887187657"
        />
        <SocialLink title="Vercel" link="https://vercel.com/sreerag-k-p" />
      </div>
    </div>
  );
};

export default Contact;

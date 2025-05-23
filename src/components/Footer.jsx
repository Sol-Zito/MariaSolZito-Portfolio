import Button from "./Button";
import { SOCIAL_MEDIA, RESUME_LINK, ABOUT_ME, CONTENT } from "../constants";

const Footer = () => (
  <footer
    id="contact"
    className="bg-secondaryLinear sm:px-16 px-6 flex md:flex-cols sm:flex-row justify-between py-6 items-center"
  >
    <div>
      <h2 className="text-xl font-bold font-poppins dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
        {ABOUT_ME.name}
      </h2>
      <div className="flex flex-row mt-4">
        {SOCIAL_MEDIA.map((social, index) => (
          <a
            href={social.link}
            target="_blank"
            key={social.id}
            index={index}
            className="mr-5 text-[25px] hover:text-[#F5F9FD]"
          >
            {<social.icon />}
          </a>
        ))}
      </div>
    </div>
    <p className="hidden md:block font-poppins font-normal text-center md:text-left text-dimWhite text-[16px] leading-[30.8px] max-w-[470px] mt-5">
      {CONTENT.Footer.text}
    </p>

    <a href={RESUME_LINK} target="_blank">
      <Button styles="mt-10 mr-3" text="Resume" />
    </a>
  </footer>
);

export default Footer;

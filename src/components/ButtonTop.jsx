import { BiArrowToTop } from "react-icons/bi";

const ButtonTop = () => {
  return (
    <a
      href="#navbar"
      className="fixed right-10 bottom-20 bg-letsConnect border-white hover:bg-secondaryLinear rounded-lg duration-300 transition-colors border px-8 py-2"
    >
      <BiArrowToTop className="size-6" />
    </a>
  );
};

export default ButtonTop;

import { EDUCATION_LIST } from "../constants";
import Lottie from "react-lottie";
import animationData from "../assets/images/Education/login.json";
import { motion } from "framer-motion";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const FeatureCard = (props) => {
  const { title, degree, duration, index } = props;
  return (
    <div
      className={`flex sm:flex-row flex-col p-4 rounded-[20px]
	${index === EDUCATION_LIST.length - 1 ? "mb-0" : "mb-6"} feature-card`}
    >
      <div className="flex-1 flex flex-col ml-4">
        <h4 className="font-semibold text-dark_primary text-[20px] leading-[30px] mb-1 text-gradient2">
          {degree}
        </h4>
        <p className="font-normal text-dark_primary text-[16px] leading-[30px] mb-1 ">
          {title}
        </p>
        <p className="font-poppins text-light_secondary font-normal text-[14px] leading-[30px] mb-1">
          {duration}
        </p>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <section id="education" className="bg-primaryLinear pt-4">
      <motion.h1
        whileInView={{ y: [-20, 0], opacity: [0, 1] }}
        transition={{ duration: 1, type: "spring", stiffness: "120" }}
        className="flex-1 font-Poppins font-semibold ss:text-[55px] sm:text-[45px] sm:px-16 px-5 ss:leading-[80px] leading-[80px]"
      >
        Education
      </motion.h1>
      <motion.div
        className="flex md:flex-row flex-col-reverse py-1 gap-2 sm:gap-20 px-2 justify-center items-center"
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <div className="sm:w-[400px] sm:h-[400px] w-[300px] h-[300px] relative z-[5] flex md:flex-row flex-col-reverse py-0 sm:py-6 pointer-events-none">
          <Lottie options={defaultOptions} />
        </div>

        <div className={`flex-1 flex flex-col justify-center items-start`}>
          {EDUCATION_LIST.map((feature, index) => (
            <FeatureCard key={feature.id} index={index} {...feature} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;

import { FaArrowDown } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import avatar from "../../assets/programmer.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import ActiveComponent from "./ActiveComponent";
import BackgroundCircles from "../BackgroundCircles";
// import BlurCircles from "../blurCircles/BlurCircles";

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

const Hero = () => {
  window.addEventListener("scroll", function () {
    const downArrow = this.document.querySelector(".down-arrow");

    if (this.scrollY >= 1200) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center p-5 text-center pt-32 z-30 overflow-y-hidden overflow-x-hidden"
    >
      <BackgroundCircles />
      {/* <div className="z-0">
        <BlurCircles />
      </div> */}
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="z-0 p-5"
      >
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
            duration: 6,
          }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          src={avatar}
          alt="avatar"
          className="w-48 h-48 md:w-52 md:h-52 xl:w-52 xl:h-52 object-cover bg-gradient-to-b from-amber-500 to-amber-700 rounded-3xl shadow-lg shadow-gray-400/30 dark:shadow-black/30"
        />
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-amber-500 rounded-lg blur opacity-50 group-hover:opacity-100 group-hover:scale-105 transition duration-1000 group-hover:duration-200 animate-tilt z-0"></div>
          <motion.a
            href="/Mukul_Dharashivkar_Resume.pdf"
            download={true}
            className="group relative flex items-center justify-center mt-10 bg-white dark:bg-[#0d0c0e] bg-transparent hover:bg-amber-500 dark:hover:bg-amber-500 py-2 rounded-xl font-semibold tracking-[1px] hover:text-black duration-300"
          >
            <span>
              <HiDocumentText className="text-xl group-hover:text-black z-0 font-semibold" />
            </span>
            <p className="text-sm md:text-lg mx-2 font-light">Download CV</p>
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.h2
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.5 }}
        className="text-sm pt-3 md:text-xl text-amber-500 font-bold z-0"
      >
        Full Stack Developer
      </motion.h2>

      <motion.div
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.5 }}
        className="py-3 text-xl md:text-3xl lg:text-5xl text-center font-bold leading-[1] z-0"
      >
        <span className="text-slate-700 dark:text-slate-200">
          <TypeAnimation
            sequence={[
              "Welcome👋",
              2000,
              "The Name's Mukul",
              2000,
              "Guy-Who-Loves-Drawing.js",
              2000,
              "<ButLovesToCodeMore/>",
              2000,
            ]}
            speed={30}
            wrapper="span"
            repeat={Infinity}
          />
        </span>
      </motion.div>

      <motion.div
        // initial={{ x: -200, opacity: 0 }}
        // transition={{ duration: 1 }}
        // whileInView={{ x: 0, opacity: 1 }}
        // viewport={{ once: true }}
        className="z-10"
      >
        <ActiveComponent />
      </motion.div>

      {/* {arrow down animation} */}
      <div className="mt-20 mb-0 down-arrow z-0">
        <FaArrowDown className="text-amber-500 text-3xl animate-bounce " />
      </div>
    </section>
  );
};

export default Hero;

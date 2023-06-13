import { motion } from 'framer-motion';
import React, { useEffect, useState } from "react";

import { styles } from '../styles';

const TypewriterText = ({ text, className }) => {
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      if (charIndex < text.length) {
        setTypedText((prevTypedText) => prevTypedText + text[charIndex]);
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
      }
    }, 100);

    return () => clearTimeout(typingTimer);
  }, [charIndex, text]);

  return (
    <div>
      <motion.span
        className={className}
        style={{
          color: "black",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {typedText}
      </motion.span>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen top-[1rem] mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-black`}>
            Hello, I'm <span className="text-primary">Frédéric</span>
          </h1>
          <div>
          </div>
          <p>
            <TypewriterText text="I am a software developer." className={`${styles.heroSubText} mt-2 text-black-100`} />
          </p>
        </div>

        

      </div>
    </section>
  )
}

export default Hero;
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { GuitarCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-[500px] top-[1rem] mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 squared-full bg-[#11998e]"/>
          <div className="w-1 sm:h-80 h-40 green-gradient"/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className="text-[#11998e]">Frédéric</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a software developer.
          </p>
        </div>
      </div>

    </section>
  )
}

export default Hero
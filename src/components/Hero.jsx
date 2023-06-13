import { motion } from 'framer-motion';

import { styles } from '../styles';

const Hero = () => {
  return (
    <section className="relative w-full h-[400px] top-[1rem] mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-black`}>
            Hello, I'm <span className="text-primary">Frédéric</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black-100`}>
            I am a software developer.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
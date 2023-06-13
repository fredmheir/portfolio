import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value} = e.target;

    setForm({ ...form, [name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, {
      from_name: form.name,
      to_name: 'Frédéric',
      from_email: form.email,
      to_email: import.meta.env.VITE_EMAIL,
      message: form.message,
    },
    import.meta.env.VITE_PUBLIC_KEY,
    )
    .then(() => {
      alert('Thank you. I will get back to you as soon as possible.');

      setForm({
        name:'',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)
      console.log(error);
      alert('Something went wrong.')
    })
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn('left', "tween", 0.2, 1)} className="flex-[0.75] bg-quaternary p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name here." className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"/>
          </label>
        </form>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email here." className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"/>
          </label>
        </form>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea rows="7" type="text" name="message" value={form.message} onChange={handleChange} placeholder="Enter your message here." className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"/>
          </label>

          <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold rounded-xl hover:bg-sky-700">
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");
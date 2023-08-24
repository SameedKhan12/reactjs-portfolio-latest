import React from 'react';
import { motion } from "framer-motion";

const Section = ({id, title, subtitle, children}) => {
  return (
    <section id={id} className="min-h-fit flex flex-col justify-start items-center py-16 px-2 md:px-5 text-center">
        <motion.h3 initial={{ opacity: 0, x: -200 }} transition={{ duration: 0.7 }}whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="py-3 text-5xl lg:text-5xl font-bold text-amber-500 uppercase tracking-[1px]">{title}</motion.h3>
        <p className="max-w-xl font-semibold text-gray-400 mb-10 text-sm md:text-base">{subtitle}</p>
        {children}
    </section>
  )
}

export default Section

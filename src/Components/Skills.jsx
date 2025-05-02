import { motion } from "framer-motion";
import '../App.css'

function Skills({ course, logo, svg, category, index }) {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className="skills">
        {logo === null ? <img src={svg} alt={course} /> : <i className={logo}></i>}
        <p>{course}</p>
      </div>
    </motion.section>
  );
}

export default Skills;
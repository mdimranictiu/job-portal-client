import React from 'react';
import { motion } from 'motion/react';
import team1 from '../../src/assets/team1.jpg'
import team2 from '../../src/assets/team2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
  <div className="hero-content justify-between flex-col lg:flex-row-reverse">
    <motion.img
      src={team1}
      animate={{y:[50,0,50]}}
      transition={{duration:5,repeat:Infinity}}
      className="max-w-sm rounded-t-[40px] rounded-br-[40px] w-64 shadow-2xl" />
    <motion.img
      src={team2}
      animate={{x:[50,0,50]}}
      transition={{duration:5,repeat:Infinity}}
      className="max-w-sm rounded-t-[40px] rounded-br-[40px] w-64 shadow-2xl" />
    <div>
    <motion.h1
  initial={{ opacity: 1, color: 'red' }}
  animate={{ opacity: 1, x: 50, color: 'green' }}
  transition={{ duration: 2, ease: "easeOut", repeat: Infinity }}
  className="text-5xl font-bold"
>
  Latest{' '}
  <motion.span
    animate={{ color: ['#E4080A', '#E5CC27'] }}
    transition={{ duration: 2, repeat: Infinity }}
  >
    Jobs
  </motion.span>{' '}
  for You
</motion.h1>

      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;
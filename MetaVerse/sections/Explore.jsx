'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import styles from '../styles';
import { exploreWorlds } from '../constants';
import { ExploreCard, TitleText, TypingText } from '../components';

const Explore = () => (
  <section className={`${styles.paddings}`} id="explore">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| About Worlds" textStyles="text-center" />
      <TitleText title={<>Choose the world to want <br className="md:block hidden" /> to explore.</>} textStyles="text-center" />
    </motion.div>
  </section>
);

export default Explore;

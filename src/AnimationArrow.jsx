// AnimationArrow.js
import React from 'react';
import { motion } from 'framer-motion';

const AnimationArrow = () => (
  <div className="css-hero-anim-wrap">
    <motion.div
      id="js-anim-top-arrow"
      className="deco-top-arrow"
      initial={{ opacity: 0, display: 'none' }}
      animate={{ opacity: 1, display: 'block' }}
      transition={{ duration: 1 }}
      style={{ width: '140px', background: 'rgb(247, 247, 247)', margin: '0px 49.9784% 0px 49.98%', transform: 'skew(24.0001deg, 0deg)' }}
    />
    <motion.div
      id="js-anim-bottom-arrow"
      className="deco-bottom-arrow"
      initial={{ opacity: 0, display: 'none' }}
      animate={{ opacity: 1, display: 'block' }}
      transition={{ duration: 1 }}
      style={{ width: '140px', background: 'rgb(247, 247, 247)', margin: '0px 49.98% 0px 50.0168%', transform: 'skew(-24.0001deg, 0deg)' }}
    />
  </div>
);

export default AnimationArrow;

import React from 'react';
import { motion, useCycle } from 'framer-motion';

const Modal = ({ selectedImage, setSelectedImage }) => {
  const [animate, cycle] = useCycle({ opacity: 1 }, { opacity: 0 });

  // console.log(selectedImage);
  const handleClick = (event) => {
    // console.log(event.target.tagName);
    if (event.target.tagName.toLowerCase() !== 'img') {
      cycle();
      setTimeout(() => setSelectedImage(null), 800);
      //setSelectedImage(null);
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={animate}
    >
      <motion.img
        src={selectedImage}
        alt="enlargedpic"
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;

export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      type: "spring",
      bounce: 0.3,
      stiffness: 200,
    },
  },
  hover: {
    scale: 1.01,
    transition: {
      duration: 0.2,
      type: "spring",
      bounce: 0.4,
    },
  },
};

export const skillsContainerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

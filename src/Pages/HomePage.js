import { motion } from "framer-motion";

import "./styleSheet/HomePage.css";

const HomePage = () => {
  return (
    <>
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.2 }}
        className=""
      >
        <h1>Home Page</h1>
      </motion.div>
    </>
  );
};

export default HomePage;

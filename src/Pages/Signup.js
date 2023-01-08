import { motion } from "framer-motion";
import "./styleSheet/Signup.css";

const SignUp = () => {
  return (
    <>
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div>Hello Sign Up</div>
      </motion.div>
    </>
  );
};

export default SignUp;

// import AnimatePresence to transition between pages/url ";
import { AnimatePresence } from "framer-motion";
// import routing modules
import { Routes, Route, useLocation } from "react-router-dom";

import SignUp from "../Pages/Signup";
import HomePage from "../Pages/HomePage";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;

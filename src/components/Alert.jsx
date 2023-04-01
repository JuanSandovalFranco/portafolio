import { motion } from "framer-motion";

const Alert = ({ message, type = "success" }) => {
  return (
    <motion.div
      className={`fixed top-5 right-10 w-[420px] h-[80px] rounded-xl flex justify-center items-center text-xl z-[1000] font-bold text-white py-10 px-20 ${
        type === "success"
          ? "bg-gradient-to-r from-green-600 to-green-900"
          : "bg-gradient-to-r from-red-500 to-red-800"
      }`}
    >
      {message}
    </motion.div>
  );
};

export default Alert;

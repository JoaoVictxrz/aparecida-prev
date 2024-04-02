"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <div className="w-14 h-14 absolute bg-blue-600 rounded-full right-5 bottom-5 " onClick={handleClick}>
    //     {isOpen ? <div className="flex items-center justify-center w-full h-full">
    //         <motion.div>|</motion.div>
    //     </div> :
    //         <div className="flex items-center justify-center w-full h-full">
    //             X
    //             <motion.div className="w-14 h-14 bg-blue-600 rounded-full absolute bottom-14" initial={{ y: 0 }} animate={{ y: -12 }} exit={{ y: 0 }} ></motion.div>
    //             <motion.div className="w-14 h-14 bg-blue-600 rounded-full absolute bottom-14" initial={{ y: 0 }} animate={{ y: -76 }} exit={{ y: 0 }}></motion.div>
    //         </div>}
    // </div >
    <></>
  );
}

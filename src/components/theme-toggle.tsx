"use client";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
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
    setDarkMode(!darkMode);
  };

  return (
    <div className="">
      <button
        className="text-black dark:text-white"
        onClick={handleClick}
        aria-label="Toggle dark mode"
      >
        {isOpen && darkMode ? <FaMoon size={12} /> : <MdSunny size={12} />}
      </button>
    </div>
  );
}

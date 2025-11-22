"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [greeting, setGreeting] = useState("Hello!");

  // Dynamic greeting based on time
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning!");
    else if (hour < 18) setGreeting("Good Afternoon!");
    else setGreeting("Good Evening!");
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Copy deploy link
  const copyDeployLink = () => {
    navigator.clipboard.writeText(
      "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    );
    alert("Deploy link copied to clipboard!");
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <main className="flex min-h-screen w-full flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black px-6 sm:px-16">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="absolute top-5 right-5 bg-green-300 dark:bg-green-600 text-black dark:text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition-transform"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        <motion.div
          className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-black dark:text-zinc-50">
            {greeting} 👋
          </h1>

          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js"
              className="font-medium text-zinc-950 dark:text-zinc-50 hover:text-green-400 transition-colors"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn"
              className="font-medium text-zinc-950 dark:text-zinc-50 hover:text-green-400 transition-colors"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <button
            onClick={copyDeployLink}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:scale-105 md:w-[158px]"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logo"
              width={16}
              height={16}
            />
            Copy Deploy Link
          </button>

          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </motion.div>
      </main>
    </div>
  );
}

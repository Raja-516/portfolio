// src/components/ThemeToggle.jsx
import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeProvider"; // adjust path if needed

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme(); // will now throw a clear error if used outside provider

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="p-2 rounded-full bg-slate-800/40 border border-slate-700 hover:bg-slate-800/60 transition"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

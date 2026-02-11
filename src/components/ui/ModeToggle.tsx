"use client";
import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function ModeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const current = theme === "system" ? resolvedTheme : theme;

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      aria-pressed={current === "dark"}
    >
      <SunIcon
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          current === "dark" ? "-rotate-90 scale-0" : "rotate-0 scale-100"
        }`}
      />
      <MoonIcon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
          current === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
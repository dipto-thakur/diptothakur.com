"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ScrollToTopProps
  extends React.ComponentPropsWithoutRef<typeof Button> {
  showAfter?: number;
}

export function ScrollToTop({
  className,
  showAfter = 400,
  ...props
}: ScrollToTopProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > showAfter);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showAfter]);

  return (
    <Button
      type="button"
      size="icon"
      variant="outline"
      aria-label="Scroll to top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className={cn(
        "fixed bottom-5 right-5 z-50 md:bottom-8 md:right-8",
        "h-10 w-10 rounded-full",
        "border-zinc-200/60 bg-background/80 backdrop-blur-md",
        "shadow-sm transition-all duration-300",
        "hover:border-zinc-300 hover:shadow-md",
        "dark:border-zinc-800/60 dark:bg-zinc-950/80 dark:hover:border-zinc-700",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
        className
      )}
      {...props}
    >
      <ArrowUp className="h-4 w-4" />
    </Button>
  );
}
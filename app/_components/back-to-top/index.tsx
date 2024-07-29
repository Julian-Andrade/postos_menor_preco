"use client";

import { Button } from "../ui/button";
import { useEffect, useCallback, useState } from "react";
import { ArrowUpIcon } from "lucide-react";

export const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Scroll back to top page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Hide button top scroll
  const handleScroll = useCallback(() => {
    if (!showScroll && window.scrollY > 500) setShowScroll(true);
    if (showScroll && window.scrollY <= 500) setShowScroll(false);
  }, [showScroll]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div>
      {showScroll ? (
        <div className="fixed bottom-4 right-4 z-20">
          <Button
            onClick={scrollToTop}
            className="h-14 w-14 rounded-full shadow-lg shadow-blue/20"
          >
            <ArrowUpIcon size={24} />
          </Button>
        </div>
      ) : null}
    </div>
  );
};

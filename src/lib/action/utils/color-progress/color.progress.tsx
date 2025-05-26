"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";

export function ProgressDemo({ target }: { target: number }) {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(target), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress
      value={progress}
      className="w-[100%] transition-all duration-700"
    />
  );
}

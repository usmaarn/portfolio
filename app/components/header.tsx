import type { ReactNode } from "react";
import { cn } from "~/lib/utils";

export default function Header({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("bg-card p-5 rounded-xl overflow-hidden md:p-12")}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-12 rounded-full bg-zinc-700" />
          <h3 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold">
            Dev Usman
          </h3>
        </div>
        <button className="button">Get in Touch</button>
      </div>
      {children}
    </header>
  );
}

import clsx from "clsx";
import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  className?: string;
  contentClassName?: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  className,
  contentClassName,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className={clsx("px-5 py-14 sm:px-8 sm:py-20", className)}>
      <div className={clsx("mx-auto w-full max-w-6xl", contentClassName)}>{children}</div>
    </section>
  );
}

import NextLink from "next/link";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

// This component is a replacement for the default next/link component. It is used with 
// lib/customAnimatePresence.tsx to animate page transitions because using the default
// next/link component removed the scss styles from the page before exit animation finished.
// This issue and solution is described more in this issue: 
// https://github.com/vercel/next.js/discussions/18724#discussioncomment-4421594
export default function Link({
  href,
  children,
  className,
  onMouseEnter,
  onMouseLeave,
}: Props) {
  return (
    <NextLink
      href={href}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </NextLink>
  );
}

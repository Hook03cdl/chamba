"use client";

import { usePathname } from "next/navigation";
import Link, { LinkProps } from "next/link";

interface NavLinkProps extends LinkProps {
  className?: string;
  href: string;
  children?: React.ReactNode;
}

export default function NavLink({
  className,
  children,
  href,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`p-2 rounded-md hover:bg-niagara-600 text-white ${
        isActive ? "bg-niagara-800 text-yellow-100" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

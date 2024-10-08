"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({ links }: { links: any[] }) {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href[0]}
            className={`flex justify-between rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
              link.href.includes(pathname)
                ? "bg-muted text-primary"
                : "hover:text-primary"
            }`}
          >
            <div className="flex items-center gap-3">
              {link.icon}
              {link.name}
            </div>
            <div>{link.badge}</div>
          </Link>
        );
      })}
    </>
  );
}

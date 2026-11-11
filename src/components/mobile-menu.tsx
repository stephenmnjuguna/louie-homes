"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function MobileMenu({ links }: { links: { href: string; label: string }[] }) {
  const details = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  useEffect(() => { details.current?.removeAttribute("open"); }, [pathname]);

  return <details className="mobile-menu" ref={details}>
    <summary aria-label="Open navigation"><span /><span /><span /></summary>
    <nav aria-label="Mobile navigation">
      {links.map((link) => <Link key={link.href} href={link.href} onClick={() => details.current?.removeAttribute("open")}>{link.label}</Link>)}
    </nav>
  </details>;
}

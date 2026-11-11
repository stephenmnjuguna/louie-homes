import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "./icons";
import { MobileMenu } from "./mobile-menu";

const links = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className={`brand ${inverse ? "brand-inverse" : ""}`} aria-label="LOUIE HOMES, homepage">
      <Image src="/brand/louie-homes-logo.jpg" alt="" width={96} height={101} className="brand-image" priority={!inverse} />
      <span className="brand-words"><strong>LOUIE HOMES</strong><span>Find Your Dream Home</span></span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner page-shell">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>
        <Link className="header-cta" href="/properties">Find a home <ArrowIcon /></Link>
        <MobileMenu links={links} />
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-top">
        <div className="footer-intro">
          <span className="eyebrow eyebrow-gold">A more considered way home</span>
          <h2>Find a place that <em>feels like yours.</em></h2>
          <Link className="button button-gold" href="/properties">Explore the collection <ArrowIcon /></Link>
        </div>
        <div className="footer-links">
          <div><span className="footer-label">Discover</span><Link href="/properties">All homes</Link><Link href="/properties?intent=Buy">Buy</Link><Link href="/properties?intent=Rent">Rent</Link></div>
          <div><span className="footer-label">LOUIE HOMES</span><Link href="/">Home</Link><Link href="/about">About Us</Link><Link href="/contact">Contact</Link></div>
        </div>
      </div>
      <div className="page-shell footer-bottom">
        <Brand inverse />
        <p>Website preview · Properties, pricing and imagery are illustrative.</p>
      </div>
    </footer>
  );
}

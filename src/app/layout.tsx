import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "LOUIE HOMES", template: "%s | LOUIE HOMES" },
  description: "LOUIE HOMES — Find Your Dream Home. An illustrative property discovery experience.",
  robots: { index: false, follow: false },
  icons: { icon: "/brand/louie-homes-logo.jpg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader /><div className="preview-note">Concept preview · homes, prices and imagery are illustrative; availability is not asserted.</div><div id="main-content">{children}</div><SiteFooter /></body></html>;
}

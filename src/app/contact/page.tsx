import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ContactDraft } from "@/components/contact-draft";
import { getProperty } from "@/lib/properties";

export const metadata: Metadata = { title: "Contact", description: "Prepare a LOUIE HOMES enquiry draft and learn about the concept website." };

export default function ContactPage({ searchParams }: { searchParams: Promise<{ property?: string | string[] }> }) {
  return <Suspense fallback={<main className="contact-page"><div className="page-intro page-shell"><span className="eyebrow">Connect / LOUIE HOMES</span><h1>Let’s talk about home.</h1><p>Preparing your enquiry draft…</p></div></main>}><ContactContent searchParams={searchParams} /></Suspense>;
}

async function ContactContent({ searchParams }: { searchParams: Promise<{ property?: string | string[] }> }) {
  const params = await searchParams;
  const property = getProperty(typeof params.property === "string" ? params.property : "");
  return <main className="contact-page">
    <section className="page-intro page-shell"><span className="eyebrow">Connect / LOUIE HOMES</span><h1>Let’s talk about <em>home.</em></h1><p>Put your priorities into words as you explore the collection.</p></section>
    <div className="section-shell contact-layout"><div className="contact-copy"><span className="eyebrow">The next step</span><h2>Every good move begins somewhere.</h2><p>{property ? "Use the draft to note what interests you about " + property.name + "." : "Start with the kind of space, location and budget you have in mind."}</p><Link href="/properties" className="underlined-link">Browse homes →</Link></div><ContactDraft propertyName={property?.name} /></div>
  </main>;
}

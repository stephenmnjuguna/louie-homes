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
    <section className="page-intro page-shell"><span className="eyebrow">Connect / LOUIE HOMES</span><h1>Let’s talk about <em>home.</em></h1><p>A thoughtful search starts with a conversation.</p></section>
    <div className="section-shell contact-layout"><div className="contact-copy"><span className="eyebrow">The next step</span><h2>Every good move begins somewhere.</h2><p>This is an initial frontend preview. A verified business contact channel has not been provided yet, so enquiries cannot be sent from this site.</p><p>{property ? "Your draft is prepared for the " + property.name + " demonstration concept." : "Explore the concept collection, then prepare a message about the kind of home you imagine."}</p><Link href="/properties" className="underlined-link">Browse demonstration homes →</Link></div><ContactDraft propertyName={property?.name} /></div>
  </main>;
}

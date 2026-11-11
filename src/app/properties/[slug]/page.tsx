import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowIcon } from "@/components/icons";
import { PropertyFacts } from "@/components/property-card";
import { PropertyGallery } from "@/components/property-gallery";
import { getProperty, properties } from "@/lib/properties";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const property = getProperty((await params).slug);
  if (!property) notFound();
  return { title: property.name, description: property.summary };
}

export default function PropertyDetailPage({ params }: Props) {
  return <Suspense fallback={<main className="detail-page"><div className="page-intro page-shell"><h1>Opening this home…</h1></div></main>}><PropertyDetailContent params={params} /></Suspense>;
}

async function PropertyDetailContent({ params }: Props) {
  const property = getProperty((await params).slug);
  if (!property) notFound();
  return <main className="detail-page">
    <div className="page-shell detail-intro">
      <Link href="/properties" className="back-link">← Back to all homes</Link>
      <div className="detail-heading"><div><span className="eyebrow">{property.intent} / {property.location}</span><h1>{property.name}</h1><p>{property.setting} · {property.type}</p></div><span className="detail-code">LH / {String(properties.indexOf(property) + 1).padStart(2, "0")}</span></div>
    </div>
    <div className="section-shell"><PropertyGallery images={property.images} /></div>
    <div className="section-shell detail-layout">
      <div className="detail-main">
        <span className="eyebrow">The space</span><h2>Property <em>Overview</em></h2><p className="detail-indicator">Illustrative property · Not a live offer</p><p className="detail-lead">{property.summary}</p><p>{property.description}</p>
        <div className="detail-facts"><PropertyFacts property={property} /></div>
        <div className="amenities"><h3>Property details</h3><ul>{property.amenities.map((amenity) => <li key={amenity}>{amenity}</li>)}</ul></div>
      </div>
      <aside className="enquiry-panel"><span className="eyebrow">Example asking price</span><strong>{property.priceLabel}</strong><p>Interested in this kind of home? Prepare a message about what you are looking for.</p><Link className="button button-dark" href={"/contact?property=" + encodeURIComponent(property.slug)}>Prepare a message <ArrowIcon /></Link><small>Opens a draft; no enquiry is sent.</small></aside>
    </div>
    <section className="section-shell detail-more"><div className="section-heading"><div><span className="eyebrow">Keep exploring</span><h2>More to <em>discover.</em></h2></div><Link href="/properties" className="underlined-link">All homes <ArrowIcon /></Link></div></section>
  </main>;
}

import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { PropertyCard } from "@/components/property-card";
import { properties } from "@/lib/properties";

export const metadata: Metadata = { title: "Explore Homes", description: "Search and filter illustrative LOUIE HOMES property concepts." };

type SearchParams = { q?: string | string[]; intent?: string | string[]; location?: string | string[]; type?: string | string[]; beds?: string | string[]; max?: string | string[]; sort?: string | string[] };
const single = (value: string | string[] | undefined) => typeof value === "string" ? value : "";
const locations = ["Kenyatta Road", "Ruiru", "Kimbo", "Eastern Bypass", "Kamakis", "Membley", "Mugutha"];
const types = ["Bungalow", "Maisonette", "Apartment", "Own-compound house"];

export default function PropertiesPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  return <Suspense fallback={<main className="browse-page"><div className="page-intro page-shell"><span className="eyebrow">Discover / The collection</span><h1>Find your next place.</h1><p>Loading homes…</p></div></main>}><PropertiesContent searchParams={searchParams} /></Suspense>;
}

async function PropertiesContent({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams;
  const q = single(params.q).trim().slice(0, 100);
  const intent = single(params.intent);
  const location = single(params.location);
  const type = single(params.type);
  const beds = Number(single(params.beds)) || 0;
  const max = Number(single(params.max)) || 0;
  const sort = single(params.sort);
  const filtered = properties.filter((property) => {
    const haystack = [property.name, property.type, property.location, property.setting, property.summary, ...property.amenities].join(" ").toLowerCase();
    return (!q || haystack.includes(q.toLowerCase())) && (!intent || property.intent === intent) && (!location || property.location === location) && (!type || property.type === type) && (!beds || property.bedrooms >= beds) && (!max || property.price <= max);
  }).sort((a, b) => sort === "price-asc" ? a.price - b.price : sort === "price-desc" ? b.price - a.price : 0);

  return <main className="browse-page">
    <section className="page-intro page-shell"><span className="eyebrow">Discover / The collection</span><h1>Find your <em>next place.</em></h1><p>Browse sample homes across Nairobi and Kiambu. Search by location, home style and what matters to you.</p></section>
    <div className="section-shell browse-content">
      <form action="/properties" method="get" className="search-toolbar" aria-label="Search and filter homes">
        <fieldset className="toolbar-intent"><legend>I want to</legend>{[["", "All"], ["Buy", "Buy"], ["Rent", "Rent"]].map(([value, label]) => <label key={label}><input type="radio" name="intent" value={value} defaultChecked={intent === value} /><span>{label}</span></label>)}</fieldset>
        <label className="field"><span>Location</span><select name="location" defaultValue={location}><option value="">All areas</option>{locations.map((place) => <option key={place} value={place}>{place}</option>)}</select></label>
        <label className="field"><span>Search homes</span><input type="search" name="q" defaultValue={q} placeholder="Name, type or feature" /></label>
        <button className="button button-dark" type="submit">Search homes</button>
        <details className="advanced-filters" open={Boolean(type || beds || max || sort) || undefined}><summary>More filters <span aria-hidden="true">⌄</span></summary><div className="advanced-fields">
          <label className="field"><span>Property type</span><select name="type" defaultValue={type}><option value="">All types</option>{types.map((kind) => <option key={kind} value={kind}>{kind}</option>)}</select></label>
          <label className="field"><span>Minimum bedrooms</span><select name="beds" defaultValue={beds || ""}><option value="">Any bedrooms</option>{[2, 3, 4, 5].map((count) => <option key={count} value={count}>{count}+ bedrooms</option>)}</select></label>
          <label className="field"><span>Maximum example price</span><select name="max" defaultValue={max || ""}><option value="">Any budget</option><optgroup label="Monthly rent"><option value="60000">KSh 60,000 / month</option><option value="100000">KSh 100,000 / month</option><option value="150000">KSh 150,000 / month</option></optgroup><optgroup label="Sale price"><option value="10000000">KSh 10 million</option><option value="20000000">KSh 20 million</option><option value="30000000">KSh 30 million</option><option value="40000000">KSh 40 million</option></optgroup></select></label>
          <label className="field"><span>Sort by</span><select name="sort" defaultValue={sort}><option value="">Featured</option><option value="price-asc">Price: low to high</option><option value="price-desc">Price: high to low</option></select></label>
          <button className="button button-dark" type="submit">Apply filters</button>
        </div></details>
      </form>
      <div className="location-shortcuts" aria-label="Browse by location">{locations.map((place) => <Link key={place} href={`/properties?location=${encodeURIComponent(place)}`}>{place}</Link>)}</div>
      <section className="results-panel" aria-labelledby="results-title"><div className="results-heading"><div><span className="eyebrow">The collection</span><h2 id="results-title">Explore homes</h2></div><div className="results-actions"><span className="results-count" role="status">{filtered.length} {filtered.length === 1 ? "home" : "homes"}</span><Link href="/properties" className="clear-link">Clear filters</Link></div></div>
        {filtered.length ? <div className="property-grid browse-grid">{filtered.map((property) => <PropertyCard key={property.slug} property={property} />)}</div> : <div className="empty-state"><h3>No homes match those filters.</h3><p>Try another search term or broaden your criteria.</p><Link className="button button-dark" href="/properties">Clear filters</Link></div>}
      </section>
    </div>
  </main>;
}

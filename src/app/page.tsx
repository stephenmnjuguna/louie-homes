import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { PropertyCard } from "@/components/property-card";
import { properties } from "@/lib/properties";

export const metadata: Metadata = {
  title: "Find Your Dream Home",
  description: "Explore LOUIE HOMES and find a place that feels like yours.",
};

export default function Home() {
  return (
    <main>
      <section className="home-hero" aria-labelledby="hero-title">
        <Image src="/images/hero-house.jpg" alt="Contemporary home glowing at dusk beneath mature trees" fill sizes="100vw" className="cover-image hero-photo" priority />
        <div className="hero-shade" />
        <div className="page-shell hero-content">
          <div className="hero-copy">
            <span className="eyebrow eyebrow-light">The art of finding home</span>
            <h1 id="hero-title">Find Your <em>Dream Home.</em></h1>
            <p>Thoughtful spaces across Nairobi and Kiambu. A clearer way to discover the place for your next chapter.</p>
            <Link className="hero-text-link" href="/properties">Discover homes <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="finder-wrap page-shell" aria-labelledby="finder-title">
        <div className="finder-card">
          <div className="finder-intro"><span className="eyebrow">Your search starts here</span><h2 id="finder-title">Find your way home.</h2></div>
          <form action="/properties" method="get" className="finder-form">
            <fieldset className="intent-choice"><legend>I want to</legend><label><input type="radio" name="intent" value="Buy" defaultChecked /><span>Buy</span></label><label><input type="radio" name="intent" value="Rent" /><span>Rent</span></label></fieldset>
            <label className="field"><span>Location</span><select name="location" defaultValue=""><option value="">All areas</option><option value="Kenyatta Road">Kenyatta Road</option><option value="Ruiru">Ruiru</option><option value="Kimbo">Kimbo</option><option value="Eastern Bypass">Eastern Bypass</option><option value="Kamakis">Kamakis</option><option value="Membley">Membley</option><option value="Mugutha">Mugutha</option></select></label>
            <label className="field"><span>Search homes</span><input type="search" name="q" placeholder="Name or feature" /></label>
            <label className="field"><span>Property type</span><select name="type" defaultValue=""><option value="">All types</option><option value="Bungalow">Bungalow</option><option value="Maisonette">Maisonette</option><option value="Apartment">Apartment</option><option value="Own-compound house">Own-compound house</option></select></label>
            <button className="button button-dark finder-submit" type="submit">Explore homes <ArrowIcon /></button>
          </form>
        </div>
      </section>

      <section className="section-shell featured-section" aria-labelledby="featured-title">
        <div className="section-heading"><div><span className="eyebrow">The collection</span><h2 id="featured-title">Homes with a <em>point of view.</em></h2></div><Link className="underlined-link" href="/properties">View all homes <ArrowIcon /></Link></div>
        <div className="property-grid">{properties.slice(0, 6).map((property) => <PropertyCard key={property.slug} property={property} />)}</div>
      </section>

      <section className="section-shell location-section" aria-labelledby="locations-title"><div className="section-heading"><div><span className="eyebrow">Closer to home</span><h2 id="locations-title">Explore by <em>location.</em></h2></div><p>Start with the neighbourhoods that shape daily life around Nairobi and Kiambu.</p></div><div className="location-links">{["Kenyatta Road", "Ruiru", "Kimbo", "Eastern Bypass", "Kamakis", "Membley", "Mugutha"].map((location) => <Link key={location} href={`/properties?location=${encodeURIComponent(location)}`}>{location}<ArrowIcon /></Link>)}</div></section>

      <section className="story-section" aria-labelledby="story-title">
        <div className="story-image"><Image src="/images/residence-four.jpg" alt="Light-filled contemporary dining space with views through glass walls" fill sizes="(max-width: 900px) 100vw, 52vw" className="cover-image" /></div>
        <div className="story-copy"><span className="eyebrow eyebrow-gold">About Us / Beyond the front door</span><h2 id="story-title">The right home changes <em>everything.</em></h2><p>Home is where plans take shape and ordinary days become the moments you remember. LOUIE HOMES is imagined as a more thoughtful way to begin that search.</p><Link className="button button-outline-light" href="/about">About LOUIE HOMES <ArrowIcon /></Link><span className="story-index">01 / Live beautifully</span></div>
      </section>

      <section className="section-shell pathways" aria-labelledby="pathways-title"><div className="section-heading"><div><span className="eyebrow">Find your fit</span><h2 id="pathways-title">Two ways to <em>begin.</em></h2></div></div><div className="pathway-grid"><Link href="/properties?intent=Buy" className="pathway-card"><span>01 / Ownership</span><h3>Find a place to call yours.</h3><p>Explore considered house and apartment concepts for the next chapter.</p><ArrowIcon /></Link><Link href="/properties?intent=Rent" className="pathway-card pathway-blue"><span>02 / Renting</span><h3>Live well, right now.</h3><p>Discover flexible spaces shaped around the way you want to live.</p><ArrowIcon /></Link></div></section>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";

export const metadata: Metadata = { title: "Our Approach", description: "Discover the design idea behind LOUIE HOMES and a more considered way to find home." };

export default function AboutPage() {
  return <main>
    <section className="about-hero"><div className="page-shell about-hero-inner"><div><span className="eyebrow eyebrow-gold">The LOUIE HOMES perspective</span><h1>Home is more than <em>an address.</em></h1><p>It is the space that makes room for who you are, and everything you are becoming.</p></div><span className="about-hero-index">Find Your Dream Home / 01</span></div></section>
    <section className="section-shell about-story"><div className="about-photo"><Image src="/images/residence-two.jpg" alt="Warm and bright contemporary living space" fill sizes="(max-width: 900px) 100vw, 50vw" className="cover-image" /></div><div className="about-story-copy"><span className="eyebrow">An intentional beginning</span><h2>Spaces that speak to <em>possibility.</em></h2><p>LOUIE HOMES is being shaped around a simple idea: finding a home should feel considered, clear and inspiring. This initial experience explores how helpful discovery tools and an editorial view of space can work together.</p><p>As the brand develops, real listings, verified details and a live contact channel can take the place of the demonstration content shown here.</p><Link href="/properties" className="underlined-link">Explore the concept collection <ArrowIcon /></Link></div></section>
    <section className="section-shell principles"><div className="section-heading"><div><span className="eyebrow">What guides the experience</span><h2>Designed around <em>you.</em></h2></div></div><div className="principle-grid"><article><span>01</span><h3>Clarity first</h3><p>Make the details that matter easy to find, compare and understand.</p></article><article><span>02</span><h3>Feeling and function</h3><p>Look beyond floor plans to the daily life a space could support.</p></article><article><span>03</span><h3>Room to explore</h3><p>Give every visitor a simple path from first impression to a closer look.</p></article></div></section>
    <section className="brand-story"><div className="section-shell brand-story-inner"><div><span className="eyebrow eyebrow-gold">The original mark</span><h2>Made to feel <em>like home.</em></h2><p>The LOUIE HOMES mark brings together a roofline, the LH monogram and a warm gold-and-blue palette. It anchors this early digital direction.</p></div><div className="brand-original"><Image src="/brand/louie-homes-logo.jpg" alt="Original LOUIE HOMES logo with LH monogram, roofline and Find Your Dream Home tagline" fill sizes="(max-width: 700px) 80vw, 380px" className="brand-original-image" /></div></div></section>
  </main>;
}

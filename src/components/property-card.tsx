import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/lib/properties";
import { AreaIcon, ArrowIcon, BathIcon, BedIcon } from "./icons";

export function PropertyFacts({ property }: { property: Property }) {
  return (
    <div className="property-facts" aria-label="Property features">
      <span><BedIcon />{property.bedrooms} beds</span>
      <span><BathIcon />{property.bathrooms} baths</span>
      <span><AreaIcon />{property.area} m²</span>
    </div>
  );
}

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="property-card">
      <Link href={`/properties/${property.slug}`} className="property-image-link" aria-label={`Explore ${property.name}`}>
        <Image src={property.images[0].src} alt={property.images[0].alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" className="cover-image" />
        <span className="image-badge">{property.intent === "Buy" ? "For sale" : "For rent"}</span>
        <span className="image-arrow"><ArrowIcon /></span>
      </Link>
      <div className="property-card-body">
        <div className="card-kicker"><span>{property.type}</span><span>{property.location}</span></div>
        <h3><Link href={`/properties/${property.slug}`}>{property.name}</Link></h3>
        <p className="card-summary">{property.summary}</p>
        <PropertyFacts property={property} />
        <div className="card-price"><span>Example asking price</span><strong>{property.priceLabel}</strong></div>
      </div>
    </article>
  );
}

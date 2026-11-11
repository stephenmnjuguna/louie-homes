import Link from "next/link";
import { ArrowIcon } from "@/components/icons";

export default function NotFound() {
  return <main className="not-found-page page-shell"><span className="eyebrow">404 / The path ends here</span><h1>That home is <em>not in view.</em></h1><p>The concept you requested could not be found. Return to the collection and keep exploring.</p><Link className="button button-dark" href="/properties">Explore homes <ArrowIcon /></Link></main>;
}

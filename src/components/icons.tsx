import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ArrowIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M4 12h15M13 5l7 7-7 7" /></svg>;
}

export function BedIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M3 19V5m0 12h18v2m-2-2v-5a2 2 0 0 0-2-2H7a4 4 0 0 0-4 4m5-4V8a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2" /></svg>;
}

export function BathIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M3 13h18v2a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-2Zm3 0V6a2 2 0 0 1 2-2h2m-2 3h4M7 20l-1 2m11-2 1 2" /></svg>;
}

export function AreaIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M4 9V4h5m6 0h5v5M4 15v5h5m11-5v5h-5M4 4l5 5m11-5-5 5M4 20l5-5m11 5-5-5" /></svg>;
}

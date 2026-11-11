# LOUIE HOMES

An initial, responsive Next.js frontend for the LOUIE HOMES brand.

## Preview locally

Use npm and the existing package lockfile:

```powershell
npm.cmd ci
npm.cmd run dev
```

Open http://localhost:3000. On shells where the npm PowerShell shim is enabled, `npm run dev` works as well.

## Pages and behavior

- `/`: architectural hero, horizontal Buy/Rent discovery form, six featured concepts, location browsing, brand story.
- `/properties`: horizontal search toolbar with collapsible type, bedroom, illustrative budget and sort filters. Filters use URL parameters and a normal GET form.
- `/properties/[slug]`: concept gallery, details, amenities and enquiry route.
- `/about`: LOUIE HOMES design direction and the original supplied logo.
- `/contact`: an enquiry draft that can be copied. No data is sent or stored.

The 16 properties across Kenyatta Road, Ruiru, Kimbo, Eastern Bypass, Kamakis, Membley and Mugutha are **illustrative demonstration content**. Prices and features are examples; no actual inventory or availability is claimed. Rental prices are per month. No business address or live contact channel is claimed. The site uses `noindex` metadata while it remains a concept.

## Images and design sources

The photographed LOUIE HOMES logo was supplied with this project. `public/brand/louie-homes-logo.jpg` is a cropped, GPS-free public copy. The original is held in the ignored `.private/brand/` backup and must never be added to Git or copied into `public/`. The architectural photos in `public/images/` were downloaded from [Unsplash](https://unsplash.com/license) and are used only as illustrative design imagery. Photo IDs: `1600585154340-be6161a56a0c`, `1600047509807-ba8f99d2cdde`, `1600607687939-ce8a6c25118c`, `1600566753190-17f0baa2a6c3`, `1600607687920-4e2a09cf159d`, `1600566753086-00f18fb6b3ea`.

Example asking prices were informed by public [Property24 Ruiru sale](https://www.property24.co.ke/houses-for-sale-in-ruiru-c1849), [Property24 Ruiru rent](https://www.property24.co.ke/houses-to-rent-in-ruiru-s14397?page=2), and [BuyRentKenya two-bedroom Ruiru rent](https://www.buyrentkenya.com/flats-apartments-for-rent/kiambu/ruiru/2-bedroom) pages. These are broad benchmarks, not copied listings or LOUIE HOMES inventory. [Petlif Properties](https://www.petlifproperties.co.ke/) informed functional ideas around location and category browsing; this interface and copy are original.

The visual direction draws on the local design inspiration library's P-001 intent-first finder, P-003 editorial image hero and P-007 responsive card system, informed by REF-002, REF-019 and REF-022. Layout, copy and components here are original.

## Checks

```powershell
npm.cmd run lint
npx.cmd tsc --noEmit
npm.cmd run build
npm.cmd audit --audit-level=low
```

Do not publish the site as a live real estate business until verified inventory and a real contact channel replace the demonstration content.

import assert from "node:assert/strict";
import fs from "node:fs/promises";

const base = process.env.SMOKE_BASE_URL || "http://localhost:3100";
const source = await fs.readFile(new URL("../src/lib/properties.ts", import.meta.url), "utf8");
const slugs = [...source.matchAll(/slug: "([a-z0-9-]+)"/g)].map((match) => match[1]);
assert.equal(slugs.length, 16, "Expected 16 illustrative properties");
assert.equal(new Set(slugs).size, slugs.length, "Property slugs must be unique");

async function page(path, expectedStatus = 200) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, expectedStatus, `${path} returned ${response.status}`);
  return (await response.text()).replace(/<!--.*?-->/gs, "");
}

const home = await page("/");
for (const expected of ["home-hero", "Find Your", "Dream Home", "louie-homes-logo.jpg", 'href="/properties"', 'href="/about"', 'href="/contact"', "mobile-menu", "location-links", "Website preview · Properties, pricing and imagery are illustrative."]) {
  assert.ok(home.includes(expected), `Homepage missing ${expected}`);
}
assert.ok(!home.includes('class="preview-note"'), "Homepage should open directly with the hero");
assert.ok(home.includes('name="robots" content="noindex, nofollow"'), "Preview must remain noindex");
assert.equal((home.match(/class="property-card"/g) || []).length, 6, "Homepage must show six cards");

const browse = await page("/properties");
assert.ok(browse.includes("16 homes"), "Browse count should be 16");
assert.ok(browse.includes("search-toolbar") && browse.includes("advanced-filters"));
for (const slug of slugs) {
  assert.ok(browse.includes(`/properties/${slug}`), `Browse missing ${slug}`);
  const detail = await page(`/properties/${slug}`);
  assert.ok(detail.includes("Property <em>Overview</em>"), `${slug} is missing the property overview`);
  assert.ok(detail.includes("Illustrative property · Not a live offer"), `${slug} is missing the local indicator`);
}
for (const [query, count] of [
  ["?intent=Rent", "7 homes"],
  ["?intent=Buy", "9 homes"],
  ["?location=Mugutha&intent=Buy", "3 homes"],
  ["?intent=Rent&beds=5", "1 home"],
  ["?intent=Rent&type=Apartment", "3 homes"],
  ["?q=Courtyard", "3 homes"],
]) {
  assert.ok((await page(`/properties${query}`)).includes(count), `Filter ${query} should show ${count}`);
}
await page("/about");
await page("/contact");
await page(`/contact?property=${slugs[0]}`);
await page("/properties/unknown-home", 404);
await page("/brand/louie-homes-logo.jpg");
await page("/brand/20261104_151653.jpg", 404);
console.log(`Smoke checks passed: main pages, ${slugs.length} details, navigation markup, filters, and public logo routes.`);

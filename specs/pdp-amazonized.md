# Amazonized PDP Spec

## Layout
- Desktop: 3-column grid (Gallery | Content | Buy Box).
- Mobile: stacked, with bottom pinned bar (price + Add to Cart).

## Core Requirements
- Breadcrumbs show full category chain.
- Header: title, brand link, rating, promo badge.
- Specs: definition list (Brand, Volume, GTIN, Manufacturer, UPC from custom fields).
- About Bullets: short list above the fold (from description/metafield).
- Buy Box: sticky, shows price + unit price, availability, zip ETA, CTAs, Subscribe toggle, Wishlist, social proof.
- FBT: 3-item bundle bar with checkboxes, combined price, “Add all to Cart”.
- Related Carousels: horizontally scrollable, ratings + price.
- A+ Content: rich HTML from metafield.
- Q&A / Ask: drawer with FAQ seed.
- Reviews: histogram + highlights chips, photo grid, filters.
- Schema: Product, Offer, AggregateRating, Review (include GTIN/UPC).
- Performance: lazy-load carousels, no CLS on price/CTA.

## Data Model (Custom Fields)
- `gtin`
- `upc`
- `manufacturer`
- `net_volume_ml`
- `unit_of_measure`
- `badge_label`
- `sold_past_30d`
- `fbt_skus` (CSV of SKUs)
- `a_plus_html`

## Implementation Notes
- Options handle Size/Pack with variant prices.
- Unit price auto-calculated (`price / net_volume_ml` → unit_of_measure).
- Delivery ETA: zip input, approximate logic (later app integration).
- Subscribe toggle: demo math (later hook into Bold/ReCharge).
- Reviews highlights: keyword chips (comfort, clarity, moisture, etc.).

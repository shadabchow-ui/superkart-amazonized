# PDP Amazonization Implementation Playbook

This playbook outlines the step-by-step plan to transform the SuperKart BigCommerce Stencil theme into an Amazon-style product detail page (PDP).  
Branch: `feat/pdp-amazonized`  
Repo: `shadabchow-ui/superkart-amazonized`

---

## High-Level Plan
1. Create `/specs/pdp-amazonized.md` (acceptance criteria).
2. Implement changes in safe, incremental PRs (Steps 1–12).
3. Test each step locally with `stencil start`.
4. Commit with clear messages (`feat(pdp): add ...`).
5. Merge into main once stable.

---

## Acceptance Criteria
See `/specs/pdp-amazonized.md` for full functional details.  
Key highlights: 3-column PDP layout, sticky Buy Box, unit pricing, delivery ETA, Subscribe & Save, Frequently Bought Together, Related Carousels, A+ content, Reviews highlights, Schema.org SEO, and accessibility polish.

---

## Step-by-Step Implementation

### Step 1. Scaffold 3-Column PDP Layout
Files:
- `templates/pages/product.html`
- `templates/components/products/product-view.html`
- `templates/components/products/buy-box.html` (new)
- `_buy-box.scss`

Add desktop grid: gallery | content | buy box. Mobile bottom pinned bar with price + Add to Cart.

---

### Step 2. Specs Definition List + About Bullets
Files:
- `product-view.html`

Render `<dl class="productSpecs">` with GTIN, UPC, Manufacturer, Net Volume, Brand.  
Below, render `<ul class="aboutItem">` from product description.

---

### Step 3. Unit Price Calculation
Files:
- `product-details.js`
- `buy-box.html`

Add `computeUnitPrice` helper. Render `$x.xx per fl oz` near price. Updates on variant change.

---

### Step 4. Sticky Buy Box + Buy Now CTA
Files:
- `buy-box.html`
- `product.js`
- `_buy-box.scss`

Make buy box sticky after scroll. Add “Buy Now” button (direct checkout). Add social proof text.

---

### Step 5. Zip Code + ETA Widget
Files:
- `buy-box.html`
- `product-details.js`

Add ZIP input and ETA line. Estimate arrival with simple rules (ship same day before 2PM ET, 2–5 day transit). Persist ZIP in localStorage.

---

### Step 6. Subscribe & Save Toggle
Files:
- `buy-box.html`
- `product-details.js`

Add toggle and plan dropdown (30/60/90 days). Apply demo 5% discount when active. Change CTA to “Subscribe Now.”

---

### Step 7. Frequently Bought Together
Files:
- `product.html`
- `fbt.html` (new)
- `product.js`

Render up to 3 SKUs from custom field. Show checkboxes, combined price, “Add all to Cart.” Use Cart API.

---

### Step 8. A+ Content Region
Files:
- `product.html`
- `a-plus.html` (new)
- `_a-plus.scss`

Render rich HTML from custom field `a_plus_html`. Responsive layout, images, footnotes.

---

### Step 9. Reviews Summary + Highlights
Files:
- `reviews.html`
- `reviews.js`
- `_reviews.scss`

Add highlight chips (Comfort, Clarity, Moisture, Irritation, Value). Filter reviews by chip. JSON-LD AggregateRating intact.

---

### Step 10. Related Carousels
Files:
- `related.html`
- `related.js`
- `_related.scss`

Convert related products into horizontal carousel with price, rating, per-unit price. Lazy load on scroll.

---

### Step 11. Schema.org & SEO JSON-LD
Files:
- `product.html`

Add `<script type="application/ld+json">` with Product, Offer, AggregateRating, Review, GTIN, UPC, unit pricing.

---

### Step 12. Polish & Accessibility
Files:
- `_buy-box.scss`, `_reviews.scss`, `_related.scss`, `_a-plus.scss`
- `buy-box.html`, `reviews.html`, `related.html`

Final adjustments:
- aria-live updates for dynamic text.
- aria-labels for buttons/controls.
- Focus states & keyboard nav.
- Lazy loading images.
- Lighthouse score > 90 for Accessibility & Best Practices.

---

## Data Model (Custom Fields Required)
- `gtin`
- `upc`
- `manufacturer`
- `net_volume_ml`
- `unit_of_measure`
- `badge_label`
- `sold_past_30d`
- `fbt_skus`
- `a_plus_html`

---

## Testing Checklist
- Run `stencil start` and verify UI on desktop + mobile.
- Validate schema in Google Rich Results Test.
- Run Lighthouse accessibility audit.
- Test variants, ZIP ETA, Subscribe toggle, FBT add-to-cart, Review filters.

---

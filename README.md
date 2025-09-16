
# My-Store-App
A responsive React/Next.js storefront with catalog, product detail, and cart functionality. Built with modern state management, accessible UI, and deployable to Netlify/Vercel.

# Features
Catalog (/)

Grid of products: image, title, price, category

Filter by category (single/multi-select) and price range

Sort by price (Low → High, High → Low)

Empty & error states

Loading skeleton

# Product Detail / product[id]
 Large image, title, price, description, category

Add to Cart button (disabled if out of stock)

Related products (same category, up to 4)
# /Cart
Cart (/cart)

Line items with image, title, unit price, quantity controls, subtotal

Remove items

Total summary

Cart persists in localStorage
# Practices

State management: React Context

Accessible UI: Semantic HTML, labeled inputs

Responsive layout (mobile & desktop)

Clean code: small components, clear structure, no dead code

Deployed to Netlify
# Nice to Have

Toast/alert for “Added to cart”

Client-side pagination

SEO friendly
# Features
Catalog (/)

Grid of products: image, title, price, category

Filter by category (single/multi-select) and price range

Sort by price (Low → High, High → Low)

Empty & error states

Loading skeleton

## How To Run

git clone https://github.com/bijaydhakal7/StorePoints

cd my-store-app

npm install

npm run dev

Open http://localhost:3000

# Architecture Notes

Pages: Next.js routing

State Management: React Context for cart and filters

Data Flow: Catalog fetch → filter/sort/search → add to cart → localStorage

Components: Small, reusable (ProductCard, CartItem, Filters)

UX: Skeleton loaders and error messages

# Live Demo

## https://storepoint.netlify.app/
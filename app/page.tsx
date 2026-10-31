"use client";

import { useState } from "react";

const products = [
{
name: "Solar Power Stations",
category: "Solar Products",
price: "₦450,000",
image:
"https://images.unsplash.com/photo-1509391366360-2e959784a276?w=700",
tag: "Best Seller",
},
{
name: "Solar Panels",
category: "Solar Products",
price: "₦180,000",
image:
"https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=700",
tag: "Popular",
},
{
name: "Security Cameras",
category: "Security",
price: "₦85,000",
image:
"https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=700",
tag: "New Arrival",
},
{
name: "Smart Tech Devices",
category: "Tech Devices",
price: "₦65,000",
image:
"https://images.unsplash.com/photo-1498049794561-7780e7231661?w=700",
tag: "Trending",
},
];

const categories = [
{ icon: "☀️", name: "Solar Products", description: "Clean and reliable energy" },
{ icon: "🔋", name: "Power Stations", description: "Portable power solutions" },
{ icon: "📹", name: "Security", description: "Smart security solutions" },
{ icon: "💻", name: "Tech Devices", description: "Technology made accessible" },
];

export default function Home() {
const [menuOpen, setMenuOpen] = useState(false);

return (
<main className="min-h-screen bg-white text-slate-900">

```
  {/* NAVIGATION */}
  <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

      <a href="#" className="text-2xl font-black tracking-tight">
        <span className="text-blue-700">KADIBS</span>
        <span className="text-yellow-500"> HUB</span>
        <span className="block text-[9px] font-medium tracking-[3px] text-gray-500">
          SOLAR PRODUCTS & TECH DEVICES
        </span>
      </a>

      <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
        <a href="#" className="text-blue-700">Home</a>
        <a href="#products" className="hover:text-blue-700">Products</a>
        <a href="#categories" className="hover:text-blue-700">Categories</a>
        <a href="#about" className="hover:text-blue-700">About Us</a>
        <a href="#contact" className="hover:text-blue-700">Contact</a>
      </div>

      <div className="hidden items-center gap-4 md:flex">
        <a
          href="#products"
          className="rounded-lg bg-blue-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
        >
          Shop Now →
        </a>
      </div>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-2xl md:hidden"
        aria-label="Toggle navigation"
      >
        ☰
      </button>
    </div>

    {menuOpen && (
      <div className="flex flex-col gap-4 border-t px-6 py-5 md:hidden">
        <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
        <a href="#categories" onClick={() => setMenuOpen(false)}>Categories</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    )}
  </nav>

  {/* HERO SECTION */}
  <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700">

    <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">

      <div className="relative z-10">
        <span className="mb-6 inline-block rounded-full border border-yellow-400/40 bg-yellow-400/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-yellow-400">
          Welcome to KADIBS HUB
        </span>

        <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">
          Powering Your World.
          <span className="block text-yellow-400">
            Connecting Your Future.
          </span>
        </h1>

        <p className="mt-6 max-w-lg text-lg leading-8 text-blue-100">
          Discover quality solar products, reliable power solutions,
          security equipment and innovative tech devices at affordable
          prices. Everything you need, all in one hub.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#products"
            className="rounded-lg bg-yellow-400 px-8 py-4 font-bold text-blue-950 transition hover:bg-yellow-300"
          >
            Explore Products →
          </a>

          <a
            href="#about"
            className="rounded-lg border border-white/40 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-blue-950"
          >
            Discover KADIBS
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-8 text-sm text-blue-100">
          <div>
            <p className="text-2xl font-black text-yellow-400">100%</p>
            <p>Quality Focused</p>
          </div>
          <div>
            <p className="text-2xl font-black text-yellow-400">Nationwide</p>
            <p>Delivery</p>
          </div>
          <div>
            <p className="text-2xl font-black text-yellow-400">Reliable</p>
            <p>Customer Support</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-5 rounded-3xl bg-yellow-400/20 blur-3xl" />

        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1000"
          alt="Solar energy panels"
          className="relative h-[350px] w-full rounded-3xl object-cover shadow-2xl md:h-[470px]"
        />

        <div className="absolute -bottom-6 -left-5 rounded-2xl bg-white p-5 shadow-xl">
          <p className="text-sm font-bold text-gray-500">
            Your trusted energy partner
          </p>
          <p className="mt-1 text-xl font-black text-blue-800">
            KADIBS <span className="text-yellow-500">HUB</span>
          </p>
        </div>
      </div>

    </div>
  </section>

  {/* BENEFITS */}
  <section className="border-b border-gray-100 bg-white py-8">
    <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">

      {[
        ["✓", "Quality Products", "Carefully selected products"],
        ["🚚", "Nationwide Delivery", "We deliver across Nigeria"],
        ["₦", "Affordable Prices", "Value for every purchase"],
        ["☎", "Customer Support", "We are here to help"],
      ].map(([icon, title, description]) => (
        <div key={title} className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl font-bold text-blue-700">
            {icon}
          </div>
          <div>
            <h3 className="font-bold">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
      ))}

    </div>
  </section>

  {/* CATEGORIES */}
  <section id="categories" className="bg-gray-50 px-6 py-24">
    <div className="mx-auto max-w-7xl">

      <div className="mb-12 text-center">
        <p className="font-bold uppercase tracking-widest text-yellow-600">
          Explore Our Collections
        </p>
        <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-4xl">
          Shop By Category
        </h2>
        <p className="mt-4 text-gray-500">
          Find the right products to power, protect and connect your world.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {categories.map((category) => (
          <a
            href="#products"
            key={category.name}
            className="rounded-2xl border border-gray-100 bg-white p-8 text-center transition hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
          >
            <div className="mb-5 text-5xl">{category.icon}</div>
            <h3 className="text-lg font-bold text-blue-950">
              {category.name}
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              {category.description}
            </p>
            <p className="mt-5 font-bold text-blue-700">
              Explore →
            </p>
          </a>
        ))}

      </div>
    </div>
  </section>

  {/* FEATURED PRODUCTS */}
  <section id="products" className="px-6 py-24">
    <div className="mx-auto max-w-7xl">

      <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="font-bold uppercase tracking-widest text-yellow-600">
            Our Store
          </p>
          <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-4xl">
            Featured Products
          </h2>
          <p className="mt-3 text-gray-500">
            Explore some of our popular product categories.
          </p>
        </div>

        <a href="#contact" className="font-bold text-blue-700 hover:text-yellow-600">
          View All Products →
        </a>
      </div>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

        {products.map((product) => (
          <div
            key={product.name}
            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <span className="absolute left-4 top-4 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-blue-950">
                {product.tag}
              </span>
            </div>

            <div className="p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                {product.category}
              </p>

              <h3 className="mt-2 text-lg font-bold text-blue-950">
                {product.name}
              </h3>

              <div className="mt-5 flex items-center justify-between">
                <p className="text-lg font-black text-blue-900">
                  {product.price}
                </p>

                <a
                  href="#contact"
                  className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-bold text-white hover:bg-blue-900"
                >
                  Enquire
                </a>
              </div>
            </div>
          </div>
        ))}

      </div>

      <p className="mt-8 text-center text-sm text-gray-400">
        Displayed products and prices are sample placeholders. Replace
        them with your actual inventory and current prices.
      </p>
    </div>
  </section>

  {/* ABOUT US */}
  <section id="about" className="bg-blue-950 px-6 py-24 text-white">
    <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

      <div>
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000"
          alt="Modern business workspace"
          className="h-[350px] w-full rounded-3xl object-cover"
        />
      </div>

      <div>
        <p className="font-bold uppercase tracking-widest text-yellow-400">
          About KADIBS HUB
        </p>

        <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
          More Than A Store.
          <span className="block text-yellow-400">
            Your Trusted Partner.
          </span>
        </h2>

        <p className="mt-6 leading-8 text-blue-100">
          KADIBS HUB is a brand focused on providing quality solar
          products and innovative technology devices. We are committed
          to making reliable energy solutions and modern technology
          accessible and affordable.
        </p>

        <p className="mt-4 leading-8 text-blue-100">
          From solar power solutions to security equipment and everyday
          tech devices, we bring quality, affordability and convenience
          closer to you.
        </p>

        <a
          href="#contact"
          className="mt-8 inline-block rounded-lg bg-yellow-400 px-8 py-4 font-bold text-blue-950 hover:bg-yellow-300"
        >
          Get In Touch →
        </a>
      </div>

    </div>
  </section>

  {/* CALL TO ACTION */}
  <section className="bg-yellow-400 px-6 py-20 text-center">
    <div className="mx-auto max-w-3xl">
      <h2 className="text-3xl font-black text-blue-950 md:text-5xl">
        Ready To Power Your World?
      </h2>

      <p className="mt-5 text-blue-950/80">
        Get quality solar products and tech devices at affordable prices.
        Your next purchase starts here.
      </p>

      <a
        href="#contact"
        className="mt-8 inline-block rounded-lg bg-blue-950 px-9 py-4 font-bold text-white transition hover:bg-blue-800"
      >
        Shop With KADIBS HUB →
      </a>
    </div>
  </section>

  {/* CONTACT */}
  <section id="contact" className="bg-white px-6 py-20">
    <div className="mx-auto max-w-4xl text-center">
      <p className="font-bold uppercase tracking-widest text-yellow-600">
        We Are Here For You
      </p>

      <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-4xl">
        Let's Help You Find What You Need.
      </h2>

      <p className="mt-5 text-gray-500">
        Have questions about our products? Contact our team today.
      </p>

      <a
        href="https://wa.me/2348057314512cc"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-lg bg-green-600 px-9 py-4 font-bold text-white transition hover:bg-green-700"
      >
        Chat With Us On WhatsApp →
      </a>

      <p className="mt-4 text-xs text-gray-400">
        Replace the sample WhatsApp number with your business number.
      </p>
    </div>
  </section>

  {/* FOOTER */}
  <footer className="bg-blue-950 px-6 py-12 text-white">
    <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">

      <div>
        <h2 className="text-2xl font-black">
          <span className="text-white">KADIBS</span>
          <span className="text-yellow-400"> HUB</span>
        </h2>

        <p className="mt-4 max-w-xs text-sm leading-7 text-blue-200">
          Quality and affordable products, prompt delivery.
          Powering your world, connecting your future.
        </p>
      </div>

      <div>
        <h3 className="font-bold text-yellow-400">Quick Links</h3>
        <div className="mt-5 flex flex-col gap-3 text-sm text-blue-100">
          <a href="#" className="hover:text-yellow-400">Home</a>
          <a href="#products" className="hover:text-yellow-400">Products</a>
          <a href="#about" className="hover:text-yellow-400">About Us</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-yellow-400">Our Business</h3>
        <div className="mt-5 flex flex-col gap-3 text-sm text-blue-100">
          <p>Solar Products</p>
          <p>Power Solutions</p>
          <p>Security Equipment</p>
          <p>Tech Devices</p>
          <p>Nationwide Delivery</p>
        </div>
      </div>

    </div>

    <div className="mx-auto mt-12 max-w-7xl border-t border-blue-800 pt-7 text-center text-xs text-blue-300">
    &copy; 2026 KADIBS HUB. All Rights Reserved.
    </div>
  </footer>

</main>


);
}

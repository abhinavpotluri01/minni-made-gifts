const products = [
  {
    name: "Purple Hummingbird Crossbody",
    category: "Hand-Painted Tote Bag",
    price: "$25",
    image: "/products/hummingbird-crossbody.jpeg",
    description:
      "A soft floral tote featuring a hand-painted hummingbird and nature-inspired details.",
  },
  {
    name: "Peacock Tote",
    category: "Hand-Painted Tote Bag",
    price: "$50",
    image: "/products/peacock-tote.jpeg",
    description:
      "A colorful statement tote with detailed peacock artwork, perfect as a unique gift.",
  },
  {
    name: "Butterfly Garden Tote",
    category: "Hand-Painted Tote Bag",
    price: "$40",
    image: "/products/butterfly-tote.jpeg",
    description:
      "A whimsical butterfly design painted by hand on a cotton tote bag.",
  },
];

const faqs = [
  {
    question: "Are all products hand-painted?",
    answer:
      "Yes. Each item is painted by hand, so small variations make every piece unique.",
  },
  {
    question: "Do you accept custom orders?",
    answer:
      "Yes. Customers can request colors, flowers, animals, initials, or inspiration photos.",
  },
  {
    question: "How long do custom orders take?",
    answer:
      "Most custom orders take 1–3 weeks depending on the design and current order volume.",
  },
  {
    question: "How should I care for the bags?",
    answer:
      "Spot clean gently and avoid harsh washing. Handmade painted items should be treated with care.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf3] text-[#3b2f2f]">
      <section className="px-5 py-5 md:px-6 md:py-6">
        <nav className="mx-auto flex max-w-6xl flex-col items-center gap-5 md:flex-row md:justify-between">
          <a href="#" className="flex items-center justify-center gap-3">
            <img
              src="/products/hummingbird-logo.png"
              alt="Minni Made Gifts hummingbird logo"
              className="h-20 w-20 object-contain md:h-28 md:w-28"
            />
            <p className="text-3xl font-semibold tracking-wide md:text-6xl">
              Minni Made Gifts
            </p>
          </a>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium md:gap-6">
            <a href="#shop">Shop</a>
            <a href="#custom">Custom Orders</a>
            <a href="#about">About</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-10 md:grid-cols-2 md:items-center md:py-16">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#8a6f4d]">
            Handmade • Hand-painted • Giftable
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Thoughtful hand-painted gifts made with care.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#6b5b53]">
            Nature-inspired tote bags, crossbody bags, and keychains painted by
            hand for birthdays, thank-you gifts, everyday use, and custom
            keepsakes.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#shop"
              className="rounded-full bg-[#7f5f8d] px-6 py-3 text-center font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              View Designs
            </a>
            <a
              href="#custom"
              className="rounded-full border border-[#7f5f8d] px-6 py-3 text-center font-semibold text-[#7f5f8d] transition hover:bg-[#f3e8f7]"
            >
              Request Custom Order
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] bg-[#f1dfef] p-6 shadow-sm">
          <div className="flex h-[300px] w-full items-center justify-center overflow-hidden rounded-[1.5rem] bg-white/70">
            <img
              src="/products/collage.png"
              alt="Collage Photo"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8a6f4d]">
              Featured Designs
            </p>
            <h2 className="mt-3 text-4xl font-bold">Shop handmade favorites</h2>
          </div>
          <p className="max-w-md text-[#6b5b53]">
            Each design is individually painted, making every bag
            different and one-of-a-kind.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="rounded-[1.5rem] bg-white p-5 shadow-sm"
            >
              <div className="mb-5 aspect-square overflow-hidden rounded-[1rem] bg-[#f8edf5]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-sm font-medium text-[#8a6f4d]">
                {product.category}
              </p>
              <h3 className="mt-2 text-2xl font-semibold">{product.name}</h3>
              <p className="mt-2 text-lg font-semibold text-[#7f5f8d]">
                {product.price}
              </p>
              <p className="mt-3 leading-7 text-[#6b5b53]">
                {product.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f7efe4] px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8a6f4d]">
              How It Works
            </p>
            <h2 className="mt-3 text-4xl font-bold">A simple handmade process</h2>
          </div>

          <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
            <p className="text-2xl font-bold text-[#7f5f8d]">01</p>
            <h3 className="mt-4 text-xl font-semibold">Choose a design</h3>
            <p className="mt-3 leading-7 text-[#6b5b53]">
              Pick from existing nature-inspired designs or request something
              personalized.
            </p>
          </div>

          <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
            <p className="text-2xl font-bold text-[#7f5f8d]">02</p>
            <h3 className="mt-4 text-xl font-semibold">Painted by hand</h3>
            <p className="mt-3 leading-7 text-[#6b5b53]">
              Your item is carefully hand-painted, packaged, and prepared as a
              thoughtful gift.
            </p>
          </div>
        </div>
      </section>

      <section id="custom" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] bg-[#dfe8d7] p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#5f7354]">
            Custom Orders
          </p>
          <h2 className="mt-3 text-4xl font-bold">
            Have an idea? We can paint it.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4f5f48]">
            Request flowers, butterflies, birds, initials, colors, or a design
            inspired by a special occasion. Custom orders are perfect for
            birthdays, thank-you gifts, bridesmaids, teachers, and personal
            keepsakes.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-[#5f7354] px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Start a Custom Request
          </a>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
        <div className="rounded-[2rem] bg-[#f8edf5] p-6 shadow-sm">
          <div className="aspect-square overflow-hidden rounded-[1.5rem] bg-white/70">
            <img
              src="/about/artist-photo.png"
              alt="Artist painting a Minni Made Gifts design"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8a6f4d]">
            About the Artist
          </p>
          <h2 className="mt-3 text-4xl font-bold">
            Made slowly, carefully, and by hand.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#6b5b53]">
            Minni Made Gifts is a small handmade art business creating
            thoughtful, hand-painted pieces inspired by nature, color, and the
            joy of giving something personal.
          </p>
          <p className="mt-4 text-lg leading-8 text-[#6b5b53]">
            Every bag is painted one brushstroke at a time, making each piece a
            unique gift with its own character.
          </p>
        </div>
      </section>

      <section id="faq" className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8a6f4d]">
            FAQ
          </p>
          <h2 className="mt-3 text-4xl font-bold">Important info</h2>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl bg-[#fffaf3] p-6">
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <p className="mt-3 leading-7 text-[#6b5b53]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] bg-[#7f5f8d] p-8 text-white md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
            Contact
          </p>
          <h2 className="mt-3 text-4xl font-bold">Ready to order?</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
            Send us a message with the product type, design idea, preferred
            colors, and when you need it by.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <a
              href="mailto:minnimadegifts@gmail.com"
              className="rounded-2xl bg-white/15 p-5 font-semibold transition hover:bg-white/20"
            >
              Email Us
            </a>
            <a
              href="https://www.instagram.com/minnimadegifts/"
              className="rounded-2xl bg-white/15 p-5 font-semibold transition hover:bg-white/20"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 py-8 text-center text-sm text-[#6b5b53]">
        <p>© 2026 Minni Made Gifts. Handmade with care.</p>
      </footer>
    </main>
  );
}
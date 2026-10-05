import Image from "next/image";
import Link from "next/link";

const rooms = [
  {
    name: "The stacks",
    note: "Tall shelves, warm wood, and room to wander.",
    image: "/photos/shelves.jpg",
  },
  {
    name: "The aisle",
    note: "A long row of books under hanging lights.",
    image: "/photos/reading.jpg",
  },
  {
    name: "Bound volumes",
    note: "Cloth spines in red, green, and gold.",
    image: "/photos/hall.jpg",
  },
  {
    name: "The desk",
    note: "A short row of books, ready to open.",
    image: "/photos/desk.jpg",
  },
];

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-[#1f6f5b]">Mogadishu</p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl leading-none tracking-tight sm:text-7xl">
            A quiet room for open books.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-[#52616b]">
            Dayax Library is a modern library on Makkah Al Mukarramah Road. Come for a novel, a history, or a desk by the window.
          </p>
          <div className="mt-8 flex gap-3">
            <Link
              href="/collection"
              className="rounded-full border border-[#1f6f5b] px-5 py-3 text-[#1f6f5b] transition hover:-translate-y-0.5 hover:bg-[#1f6f5b] hover:text-white"
            >
              Browse the shelves
            </Link>
            <Link
              href="/visit"
              className="rounded-full border border-[#1f6f5b] px-5 py-3 text-[#1f6f5b] transition hover:-translate-y-0.5 hover:bg-[#1f6f5b] hover:text-white"
            >
              Plan a visit
            </Link>
          </div>
        </div>
        <div className="relative h-[420px] overflow-hidden rounded-[2rem] sm:h-[520px]">
          <Image src="/photos/reading.jpg" alt="A long library aisle" fill className="object-cover" priority />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-[family-name:var(--font-display)] text-4xl">Inside Dayax</h2>
          <Link href="/collection" className="text-sm text-[#1f6f5b]">
            Full collection
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {rooms.map((room) => (
            <article
              key={room.name}
              className="card group overflow-hidden rounded-[1.6rem] border border-transparent bg-white shadow-[0_20px_50px_rgba(20,32,43,0.06)]"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-[family-name:var(--font-display)] text-2xl">{room.name}</h3>
                <p className="mt-1 text-[#52616b]">{room.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <h2 className="font-[family-name:var(--font-display)] text-4xl">A day at Dayax</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Morning", "Doors open at eight. The first tables fill with students."],
            ["Midday", "Novels, newspapers, and a quiet hour after lunch."],
            ["Afternoon", "Children read near the front. The long aisle stays open."],
            ["Study", "Desks for notes, dictionaries, and slow work."],
            ["Evening", "Lights stay on. The last readers leave at eight."],
            ["Sunday", "Same hours. Fewer voices. More empty chairs."],
          ].map(([title, note]) => (
            <article
              key={title}
              className="card rounded-[1.4rem] border border-transparent bg-white p-5 shadow-[0_12px_30px_rgba(20,32,43,0.04)]"
            >
              <h3 className="font-[family-name:var(--font-display)] text-2xl">{title}</h3>
              <p className="mt-2 text-[#52616b]">{note}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";

const shelves = [
  {
    title: "Stories",
    image: "/photos/desk.jpg",
    alt: "A row of books on a desk",
    items: [
      ["Novels", "Long stories for a slow afternoon"],
      ["Short fiction", "Small books you can finish in one sitting"],
      ["Poetry", "Thin volumes, kept near the window"],
      ["Folktales", "Stories told again on the page"],
      ["Letters", "Books of letters between friends"],
      ["Plays", "Dialogue you can read aloud"],
    ],
  },
  {
    title: "History and place",
    image: "/photos/hall.jpg",
    alt: "Old cloth-bound books on wooden shelves",
    items: [
      ["City histories", "Mogadishu, the coast, and the roads between"],
      ["Travel", "Journeys written by people who went"],
      ["Biography", "Lives told in full"],
      ["Maps and atlases", "Large books, read at a table"],
      ["Newspapers bound", "Old weeks kept in heavy volumes"],
      ["Family records", "Names, dates, and the houses they lived in"],
    ],
  },
  {
    title: "The quiet shelves",
    image: "/photos/shelves.jpg",
    alt: "A wall of library shelves",
    items: [
      ["Essays", "Short pieces on work, weather, and home"],
      ["Science", "Clear books for curious readers"],
      ["Art", "Picture books that are not only for children"],
      ["Reference", "Dictionaries and guides that stay in the room"],
      ["Language", "Grammar, phrase books, and word lists"],
      ["Cookery", "Recipes kept for reading, not only for the kitchen"],
    ],
  },
  {
    title: "The lit aisle",
    image: "/photos/reading.jpg",
    alt: "Library shelves under hanging lights",
    items: [
      ["New arrivals", "Books that came in this month"],
      ["Staff picks", "A short shelf chosen by the desk"],
      ["Night reading", "Slim books for the last hour"],
      ["Large print", "Easier type, same stories"],
      ["Quiet study", "Tables at the end of the aisle"],
      ["Returns", "Books just brought back, still warm from a bag"],
    ],
  },
];

export const metadata = {
  title: "Collection — Dayax Library",
};

export default function CollectionPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-sm uppercase tracking-[0.22em] text-[#1f6f5b]">Collection</p>
      <h1 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-5xl leading-none sm:text-6xl">
        Shelves you can walk.
      </h1>
      <div className="mt-12 space-y-16">
        {shelves.map((shelf) => (
          <section key={shelf.title} className="grid items-start gap-8 md:grid-cols-2">
            <div className="group relative h-80 overflow-hidden rounded-[1.8rem]">
              <Image
                src={shelf.image}
                alt={shelf.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl">{shelf.title}</h2>
              <ul className="mt-6 grid gap-3">
                {shelf.items.map(([name, note]) => (
                  <li
                    key={name}
                    className="card rounded-2xl border border-transparent bg-white px-4 py-4 shadow-[0_12px_30px_rgba(20,32,43,0.04)]"
                  >
                    <p className="text-lg">{name}</p>
                    <p className="text-sm text-[#52616b]">{note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

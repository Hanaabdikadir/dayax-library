import Image from "next/image";

export const metadata = {
  title: "About — Dayax Library",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-sm uppercase tracking-[0.22em] text-[#1f6f5b]">About</p>
      <h1 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-5xl leading-none sm:text-6xl">
        A library that stays bright.
      </h1>
      <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
        <div className="relative h-[420px] overflow-hidden rounded-[2rem]">
          <Image src="/photos/shelves.jpg" alt="Sunlight across library shelves" fill className="object-cover" />
        </div>
        <div className="space-y-5 text-lg leading-8 text-[#52616b]">
          <p>
            Dayax Library is a public reading room. The shelves are open, the desks are quiet, and the light stays on until evening.
          </p>
          <p>
            Readers come for novels, history, and a place that is not a shop. Books stay in the room. You sit, you read, you leave them for the next person.
          </p>
          <p>Children are welcome in the morning. The long tables are for anyone who needs an hour without noise.</p>
        </div>
      </div>
    </main>
  );
}

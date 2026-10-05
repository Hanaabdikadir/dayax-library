import Image from "next/image";

export const metadata = {
  title: "Visit — Dayax Library",
};

export default function VisitPage() {
  return (
    <main className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2">
      <div>
        <p className="text-sm uppercase tracking-[0.22em] text-[#1f6f5b]">Visit</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl leading-none sm:text-6xl">
          Come in. The shelves are open.
        </h1>
        <dl className="mt-8 space-y-4 text-[#52616b]">
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-[#1f6f5b]">Address</dt>
            <dd className="text-lg text-[#14202b]">Makkah Al Mukarramah Road, Mogadishu</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-[#1f6f5b]">Hours</dt>
            <dd className="text-lg text-[#14202b]">Every day, 08:00–20:00</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-[#1f6f5b]">Phone</dt>
            <dd className="text-lg text-[#14202b]">+252 61 555 0144</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-[#1f6f5b]">Email</dt>
            <dd className="text-lg text-[#14202b]">hello@dayax.library</dd>
          </div>
        </dl>
      </div>
      <div className="relative h-[460px] overflow-hidden rounded-[2rem]">
        <Image src="/photos/reading.jpg" alt="Lights along a library aisle" fill className="object-cover" />
      </div>
    </main>
  );
}

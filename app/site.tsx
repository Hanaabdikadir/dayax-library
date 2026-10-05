import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/collection", label: "Collection" },
  { href: "/about", label: "About" },
  { href: "/visit", label: "Visit" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-[#d5e0e4] bg-[#f4f7f8]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="font-[family-name:var(--font-display)] text-2xl tracking-tight">
          Dayax Library
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[#1f6f5b]">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#d5e0e4] px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-[#52616b] sm:flex-row sm:justify-between">
        <p className="font-[family-name:var(--font-display)] text-xl text-[#14202b]">Dayax Library</p>
        <p>Makkah Al Mukarramah Road, Mogadishu · Open daily 08:00–20:00</p>
      </div>
    </footer>
  );
}

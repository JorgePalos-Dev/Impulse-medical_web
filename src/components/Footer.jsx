import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-100 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-600 text-center md:text-left gap-6">
        <p>© {new Date().getFullYear()} Impulse Medical Service S.L. · Todos los derechos reservados</p>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <Link href="/aviso-legal" className="text-neutral-700 hover:text-yellow-600 font-medium">
            Aviso Legal
          </Link>
          <span className="text-neutral-700">· Marca colaboradora:</span>
          <img src="/images/logo-stryker-trans.webp" alt="Logo Stryker" className="h-8 sm:h-10 md:h-12 w-auto opacity-90 hover:opacity-100 transition" />
        </div>
      </div>
    </footer>
  );
}

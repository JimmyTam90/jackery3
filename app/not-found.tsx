import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-xl px-4 py-20 text-center">
        <h1 className="text-4xl font-extrabold text-charcoal">Page not found</h1>
        <p className="mt-3 text-neutral-700">The page you are looking for does not exist.</p>
        <Link href="/" className="mt-6 inline-flex min-h-[48px] items-center rounded-lg bg-brand px-6 font-bold text-white active:scale-95">
          Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}

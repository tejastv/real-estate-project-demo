import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919000000000?text=Hello%20Aarambh%20Heights%2C%20I%27d%20interested%20in%20the%20residential%20concept."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-30 flex h-14 items-center gap-3 bg-olive px-4 text-white shadow-xl shadow-charcoal/20 transition-all duration-300 hover:-translate-y-1 hover:bg-olive-dark sm:bottom-7 sm:right-7"
      aria-label="Chat with Aarambh Heights on WhatsApp (placeholder number)"
      title="WhatsApp placeholder contact"
    >
      <MessageCircle size={20} strokeWidth={1.6} />
      <span className="hidden text-[0.68rem] font-semibold uppercase tracking-[0.13em] sm:inline">WhatsApp</span>
    </a>
  );
}

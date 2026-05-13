import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511982857385"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar no WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-14 h-14 bg-whatsapp text-white rounded-full shadow-lg animate-pulse-glow hover:scale-110 transition-transform duration-200"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  )
}

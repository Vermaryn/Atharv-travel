import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButton() {
  return (
    <a
      href="https://wa.me/919719700050"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-1 bg-white px-3 py-2 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
    >
      <FaWhatsapp className="text-blue-500 text-xl" />

      <span className=" font-semibold text-blue-900">
        Talk to Agent
      </span>
    </a>
  );
}
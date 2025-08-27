
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5531982980064?text=Olá! Gostaria de conhecer mais sobre os serviços da Infolinx."
      className="fixed bottom-6 right-6 z-40 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 group"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
    </a>
  );
};

export default WhatsAppButton;

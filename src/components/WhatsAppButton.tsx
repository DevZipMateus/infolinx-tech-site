
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5531982980064?text=Olá! Gostaria de conhecer mais sobre os serviços da Infolinx."
      className="whatsapp-float group"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
    </a>
  );
};

export default WhatsAppButton;

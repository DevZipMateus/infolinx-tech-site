
import { 
  Laptop, 
  Server, 
  Headphones, 
  Shield, 
  Gamepad2, 
  Truck,
  Network,
  Printer,
  Monitor,
  Smartphone,
  Plus,
  Minus,
  ShoppingCart
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Services = () => {
  const services = [
    {
      icon: Headphones,
      title: 'Suporte Técnico',
      description: 'Suporte especializado para desktop, notebook, servidores e toda sua infraestrutura de TI.'
    },
    {
      icon: Server,
      title: 'Gerenciamento de Ativos',
      description: 'Gestão completa do seu parque tecnológico com monitoramento 24/7 e manutenção preventiva.'
    },
    {
      icon: Shield,
      title: 'Licenças de Software',
      description: 'Venda e gerenciamento de licenças Microsoft, AutoDesk, Kaspersky, Adobe e outros.'
    },
    {
      icon: Laptop,
      title: 'Equipamentos Corporativos',
      description: 'Venda de desktops, notebooks, servidores e toda linha de equipamentos empresariais.'
    },
    {
      icon: Network,
      title: 'Infraestrutura de Rede',
      description: 'Switches, roteadores, firewall, access points e projetos de rede de dados personalizados.'
    },
    {
      icon: Gamepad2,
      title: 'PCs GAMER',
      description: 'Montagem e personalização de PCs GAMER com componentes de alta performance.'
    },
    {
      icon: Truck,
      title: 'Delivery Especializado',
      description: 'Serviço de entrega dedicado para segurança e transporte dos seus equipamentos.'
    },
    {
      icon: Monitor,
      title: 'Controle de Acesso',
      description: 'Projetos personalizados de controle de acesso para condomínios e empresas.'
    }
  ];

  const [selectedServices, setSelectedServices] = useState<{[key: number]: number}>({});

  const updateQuantity = (index: number, change: number) => {
    setSelectedServices(prev => {
      const currentQuantity = prev[index] || 0;
      const newQuantity = Math.max(0, currentQuantity + change);
      
      if (newQuantity === 0) {
        const { [index]: removed, ...rest } = prev;
        return rest;
      }
      
      return {
        ...prev,
        [index]: newQuantity
      };
    });
  };

  const generateWhatsAppMessage = () => {
    const selectedItems = Object.entries(selectedServices)
      .filter(([_, quantity]) => quantity > 0)
      .map(([index, quantity]) => `• ${services[parseInt(index)].title} (${quantity}x)`)
      .join('\n');
    
    const message = `Olá! Gostaria de solicitar orçamento para os seguintes serviços da Infolinx:\n\n${selectedItems}`;
    return encodeURIComponent(message);
  };

  const totalSelectedServices = Object.values(selectedServices).reduce((sum, quantity) => sum + quantity, 0);

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em tecnologia para empresas, desde suporte técnico 
            até projetos personalizados de infraestrutura.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const quantity = selectedServices[index] || 0;
            
            return (
              <Card 
                key={index} 
                className="card-service animate-fade-in h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <div className="mb-4">
                    <Icon className="w-12 h-12 text-primary mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex-shrink-0">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">
                    {service.description}
                  </p>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(index, -1)}
                      disabled={quantity === 0}
                      className="w-8 h-8 p-0"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    
                    <span className="text-lg font-semibold min-w-[2rem] text-center">
                      {quantity}
                    </span>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(index, 1)}
                      className="w-8 h-8 p-0"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {quantity > 0 && (
                    <div className="text-sm text-primary font-medium">
                      Selecionado: {quantity}x
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Selected Services Summary & WhatsApp Button */}
        {totalSelectedServices > 0 && (
          <div className="fixed bottom-6 right-6 bg-primary text-primary-foreground rounded-lg p-4 shadow-lg animate-fade-in z-50">
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-5 h-5" />
              <span className="font-medium">
                {totalSelectedServices} serviço{totalSelectedServices > 1 ? 's' : ''} selecionado{totalSelectedServices > 1 ? 's' : ''}
              </span>
              <a
                href={`https://wa.me/5531982980064?text=${generateWhatsAppMessage()}`}
                className="bg-primary-foreground text-primary font-medium px-4 py-2 rounded-md hover:bg-primary-foreground/90 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Precisa de uma solução personalizada?
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para desenvolver a solução tecnológica 
              ideal para as necessidades específicas da sua empresa.
            </p>
            <a 
              href="https://wa.me/5531982980064?text=Olá! Gostaria de uma solução personalizada para minha empresa."
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-primary-600 focus:bg-primary-600 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Smartphone className="w-5 h-5 mr-2" />
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

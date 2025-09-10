
import { Laptop, Server, Headphones, Shield, Gamepad2, Truck, Network, Monitor, Plus, Minus, ShoppingCart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Services = () => {
  const services = [{
    icon: Headphones,
    title: 'Suporte Técnico',
    description: 'Suporte especializado para desktop, notebook, servidores e toda sua infraestrutura de TI.'
  }, {
    icon: Server,
    title: 'Gerenciamento de Ativos',
    description: 'Gestão completa do seu parque tecnológico com monitoramento 24/7 e manutenção preventiva.'
  }, {
    icon: Shield,
    title: 'Licenças de Software',
    description: 'Venda e gerenciamento de licenças Microsoft, AutoDesk, Kaspersky, Adobe e outros.'
  }, {
    icon: Laptop,
    title: 'Equipamentos Corporativos',
    description: 'Venda de desktops, notebooks, servidores e toda linha de equipamentos empresariais.'
  }, {
    icon: Network,
    title: 'Infraestrutura de Rede',
    description: 'Switches, roteadores, firewall, access points e projetos de rede de dados personalizados.'
  }, {
    icon: Gamepad2,
    title: 'PCs GAMER',
    description: 'Montagem e personalização de PCs GAMER com componentes de alta performance.'
  }, {
    icon: Truck,
    title: 'Delivery Especializado',
    description: 'Serviço de entrega dedicado para segurança e transporte dos seus equipamentos.'
  }, {
    icon: Monitor,
    title: 'Controle de Acesso',
    description: 'Projetos personalizados de controle de acesso para condomínios e empresas.'
  }];

  const [selectedServices, setSelectedServices] = useState<{
    [key: number]: number;
  }>({});

  const updateQuantity = (index: number, change: number) => {
    setSelectedServices(prev => {
      const currentQuantity = prev[index] || 0;
      const newQuantity = Math.max(0, currentQuantity + change);
      if (newQuantity === 0) {
        const {
          [index]: removed,
          ...rest
        } = prev;
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
    <section id="servicos" className="py-12 sm:py-16 lg:py-20 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Oferecemos soluções completas em tecnologia para empresas de todos os tamanhos, 
            com foco na excelência e resultados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12 sm:mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const quantity = selectedServices[index] || 0;
            
            return (
              <Card key={index} className="card-service hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-4 sm:p-6 text-center space-y-4">
                  <div className="mb-4">
                    <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(index, -1)}
                      disabled={quantity === 0}
                      className="h-8 w-8 p-0"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    
                    <span className="min-w-[2rem] text-center font-medium bg-muted px-2 py-1 rounded text-sm">
                      {quantity}
                    </span>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(index, 1)}
                      className="h-8 w-8 p-0"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>

                  <Button
                    onClick={() => updateQuantity(index, quantity > 0 ? 0 : 1)}
                    variant={quantity > 0 ? "default" : "outline"}
                    size="sm"
                    className="w-full text-xs sm:text-sm"
                  >
                    <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    {quantity > 0 ? 'Selecionado' : 'Selecionar'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* WhatsApp CTA */}
        {totalSelectedServices > 0 && (
          <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 animate-fade-in">
            <Button
              onClick={() => {
                const message = generateWhatsAppMessage();
                window.open(`https://wa.me/5531982980064?text=${message}`, '_blank');
              }}
              className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4 shadow-lg"
              size="lg"
            >
              <img 
                src="/lovable-uploads/d92d3c24-3b57-4af8-9577-4fa6a5f495d2.png" 
                alt="WhatsApp"
                className="w-5 h-5 sm:w-6 sm:h-6 mr-2"
              />
              <span className="hidden sm:inline">Solicitar Orçamento</span>
              <span className="sm:hidden">Orçamento</span>
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                {totalSelectedServices}
              </div>
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-primary/10 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              Precisa de uma solução personalizada?
            </h3>
            <p className="text-muted-foreground mb-6 text-sm sm:text-base">
              Nossa equipe está pronta para desenvolver a solução perfeita para sua empresa.
            </p>
            <a 
              href="https://wa.me/5531982980064?text=Olá! Gostaria de uma consultoria personalizada sobre os serviços da Infolinx."
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-6 sm:px-8 py-3 rounded-lg hover:bg-primary/90 focus:bg-primary/90 focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src="/lovable-uploads/d92d3c24-3b57-4af8-9577-4fa6a5f495d2.png" 
                alt="WhatsApp"
                className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
              />
              Falar Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

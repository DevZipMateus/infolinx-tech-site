
import { Check, Monitor, Server, Tablet, Router, Printer, Shield, Camera, Smartphone, Cloud, Plus, Minus, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Plans = () => {
  const services = [
    { name: 'Desktop', price: 'R$ 55,00', icon: Monitor },
    { name: 'Notebook', price: 'R$ 65,00', icon: Monitor },
    { name: 'Tablet', price: 'R$ 35,00', icon: Tablet },
    { name: 'Servidores', price: 'R$ 355,00', icon: Server },
    { name: 'Roteadores', price: 'R$ 90,00', icon: Router },
    { name: 'Switch Gerenciável', price: 'R$ 120,00', icon: Router },
    { name: 'Switch Não Gerenciável', price: 'R$ 35,00', icon: Router },
    { name: 'Access Point', price: 'R$ 35,00', icon: Router },
    { name: 'DVR 8 canais (24h)', price: 'R$ 35,00', icon: Camera },
    { name: 'DVR 16 canais (24h)', price: 'R$ 55,00', icon: Camera },
    { name: 'Alarme (24h)', price: 'R$ 120,00', icon: Shield },
    { name: 'Impressoras', price: 'R$ 55,00', icon: Printer },
    { name: 'Nobreaks', price: 'R$ 45,00', icon: Shield },
    { name: 'Microsoft 365 Basic', price: 'R$ 8,50', icon: Cloud },
    { name: 'Microsoft 365 Standard', price: 'R$ 12,50', icon: Cloud },
    { name: 'Microsoft 365 Premium', price: 'R$ 19,50', icon: Cloud },
    { name: 'Microsoft 365 E1', price: 'R$ 12,50', icon: Cloud },
    { name: 'Microsoft 365 E5', price: 'R$ 22,50', icon: Cloud }
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
      .map(([index, quantity]) => `• ${services[parseInt(index)].name} - ${services[parseInt(index)].price} (${quantity}x)`)
      .join('\n');
    
    const message = `Olá! Gostaria de contratar os seguintes serviços da Infolinx:\n\n${selectedItems}`;
    return encodeURIComponent(message);
  };

  const totalSelectedServices = Object.values(selectedServices).reduce((sum, quantity) => sum + quantity, 0);

  return (
    <section id="planos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos suporte, manutenção e gerenciamento para todos os seus equipamentos 
            e sistemas de tecnologia com preços transparentes.
          </p>
          <div className="mt-6 p-4 bg-primary/10 rounded-lg inline-block">
            <p className="text-primary font-medium">
              Quantitativo mínimo: 5 dispositivos | Contratos anuais
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const quantity = selectedServices[index] || 0;
            const isSelected = quantity > 0;
            
            return (
              <Card 
                key={index} 
                className={`service-card hover:shadow-lg transition-all duration-300 animate-fade-in ${isSelected ? 'ring-2 ring-primary bg-primary/5' : ''}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader className="text-center pb-3">
                  <div className="mb-3">
                    <IconComponent className="w-8 h-8 text-primary mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{service.name}</h3>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <span className="text-sm text-muted-foreground block">por mês</span>
                  </div>
                  <div className="flex items-center justify-center text-sm text-muted-foreground mb-4">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span>Suporte completo incluído</span>
                  </div>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(index, -1)}
                      disabled={quantity === 0}
                      className="h-8 w-8 p-0"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    
                    <span className="min-w-[2rem] text-center font-medium">
                      {quantity}
                    </span>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(index, 1)}
                      className="h-8 w-8 p-0"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  <a
                    href={`https://wa.me/5531982980064?text=Olá! Gostaria de contratar o serviço de ${service.name} da Infolinx.`}
                    className="w-full inline-flex items-center justify-center bg-primary text-primary-foreground font-medium px-4 py-2 rounded-lg hover:bg-primary/90 focus:bg-primary/90 focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contratar Individual
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Selected Services Summary */}
        {totalSelectedServices > 0 && (
          <div className="text-center mt-12 animate-fade-in">
            <div className="bg-card border border-border rounded-xl p-6 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Serviços Selecionados ({totalSelectedServices} {totalSelectedServices === 1 ? 'item' : 'itens'})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-left mb-6">
                {Object.entries(selectedServices)
                  .filter(([_, quantity]) => quantity > 0)
                  .map(([index, quantity]) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-muted/50 rounded">
                      <span className="text-sm">{services[parseInt(index)].name}</span>
                      <span className="text-sm font-medium">{quantity}x</span>
                    </div>
                  ))
                }
              </div>
              <a
                href={`https://wa.me/5531982980064?text=${generateWhatsAppMessage()}`}
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Solicitar Orçamento no WhatsApp
              </a>
            </div>
          </div>
        )}

        {/* Additional Info */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <div className="bg-card border border-border rounded-xl p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Como funciona nossa prestação de serviços?
            </h3>
            <p className="text-muted-foreground mb-4">
              A precificação é medida pelo quantitativo individual de cada item do seu parque tecnológico. 
              Oferecemos contratos anuais com suporte completo, manutenção preventiva e corretiva.
            </p>
            <p className="text-primary font-medium">
              Entre em contato para uma análise personalizada das suas necessidades!
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '1.0s' }}>
          <div className="bg-primary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Precisa de um orçamento personalizado?
            </h3>
            <p className="text-muted-foreground mb-6">
              Entre em contato conosco para receber uma proposta customizada 
              para as necessidades específicas da sua empresa.
            </p>
            <a 
              href="https://wa.me/5531982980064?text=Olá! Gostaria de receber um orçamento personalizado dos serviços da Infolinx."
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 focus:bg-primary/90 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;

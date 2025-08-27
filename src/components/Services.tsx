
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
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const quantity = selectedServices[index] || 0;
            
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(index, -1)}
                      disabled={quantity === 0}
                      className="h-8 w-8 p-0"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    
                    <span className="w-8 text-center font-semibold">{quantity}</span>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(index, 1)}
                      className="h-8 w-8 p-0"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {totalSelectedServices > 0 && (
          <div className="text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mb-6">
              <h4 className="text-lg font-semibold mb-2">Serviços Selecionados</h4>
              <p className="text-gray-600 mb-4">
                Total: {totalSelectedServices} {totalSelectedServices === 1 ? 'serviço' : 'serviços'}
              </p>
              <Button
                onClick={() => {
                  const message = generateWhatsAppMessage();
                  window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
                }}
                className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 mx-auto"
              >
                <ShoppingCart className="h-4 w-4" />
                Solicitar Orçamento no WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;

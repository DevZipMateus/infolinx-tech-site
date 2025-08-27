
import { Laptop, Server, Headphones, Shield, Gamepad2, Truck, Network, Monitor, Plus, Minus, ShoppingCart } from 'lucide-react';
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

  const [selectedServices, setSelectedServices] = useState<{
    [key: number]: number;
  }>({});

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
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Selecione os serviços desejados e solicite seu orçamento
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const quantity = selectedServices[index] || 0;
            
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(index, -1)}
                      disabled={quantity === 0}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-8 text-center font-semibold">{quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(index, 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {totalSelectedServices > 0 && (
          <div className="text-center">
            <Button
              onClick={() => window.open(`https://wa.me/5531982980064?text=${generateWhatsAppMessage()}`, '_blank')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Solicitar Orçamento ({totalSelectedServices} serviços)
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;

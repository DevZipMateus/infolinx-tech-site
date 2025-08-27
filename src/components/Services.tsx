
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

  return null;
};

export default Services;

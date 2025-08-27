
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
  Smartphone
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

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

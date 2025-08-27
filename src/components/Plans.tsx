
import { Check, Star, Crown, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Plans = () => {
  const basicItems = [
    { name: 'Desktop', price: 'R$ 55,00' },
    { name: 'Notebook', price: 'R$ 65,00' },
    { name: 'Tablet', price: 'R$ 35,00' },
    { name: 'Servidores', price: 'R$ 355,00' },
    { name: 'Roteadores', price: 'R$ 90,00' },
    { name: 'Switch Gerenciável', price: 'R$ 120,00' },
    { name: 'Switch Não Gerenciável', price: 'R$ 35,00' },
    { name: 'Access Point', price: 'R$ 35,00' },
    { name: 'DVR 8 canais (24h)', price: 'R$ 35,00' },
    { name: 'DVR 16 canais (24h)', price: 'R$ 55,00' },
    { name: 'Alarme (24h)', price: 'R$ 120,00' },
    { name: 'Impressoras', price: 'R$ 55,00' },
    { name: 'Nobreaks', price: 'R$ 45,00' }
  ];

  const standardItems = [
    { name: 'Desktop*', price: 'R$ 95,00' },
    { name: 'Notebook*', price: 'R$ 105,00' },
    { name: 'Tablet', price: 'R$ 35,00' },
    { name: 'Servidores', price: 'R$ 560,00' },
    { name: 'Roteadores*', price: 'R$ 155,00' },
    { name: 'Switch Gerenciável*', price: 'R$ 350,00' },
    { name: 'Switch Não Gerenciável*', price: 'R$ 150,00' },
    { name: 'Access Point**', price: 'R$ 95,00' },
    { name: 'DVR 8 canais (24h)*', price: 'R$ 155,00' },
    { name: 'DVR 16 canais (24h)*', price: 'R$ 210,00' },
    { name: 'Alarme (24h)*', price: 'R$ 155,00' },
    { name: 'Impressoras', price: 'R$ 65,00' },
    { name: 'Nobreaks*', price: 'R$ 55,00' },
    { name: 'Microsoft 365 Basic', price: 'R$ 8,50' },
    { name: 'Microsoft 365 Standard', price: 'R$ 12,50' },
    { name: 'Microsoft 365 Premium', price: 'R$ 19,50' },
    { name: 'Microsoft 365 E1', price: 'R$ 12,50' },
    { name: 'Microsoft 365 E5', price: 'R$ 22,50' }
  ];

  return (
    <section id="planos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Planos de Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha o plano ideal para sua empresa. Terceirizamos o suporte, manutenção 
            e gerenciamento dos seus ativos de tecnologia.
          </p>
          <div className="mt-6 p-4 bg-primary/10 rounded-lg inline-block">
            <p className="text-primary font-medium">
              Quantitativo mínimo: 5 dispositivos | Contratos anuais
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Basic Plan */}
          <Card className="plan-card-basic animate-fade-in">
            <CardHeader className="text-center pb-4">
              <div className="mb-4">
                <Zap className="w-12 h-12 text-primary mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Basic</h3>
              <p className="text-muted-foreground mt-2">
                Suporte essencial para sua empresa
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {basicItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-foreground">{item.name}</span>
                    <span className="font-semibold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-border">
                <a
                  href="https://wa.me/5531982980064?text=Olá! Gostaria de contratar o Plano Basic da Infolinx."
                  className="w-full inline-flex items-center justify-center bg-primary text-primary-foreground font-medium px-6 py-3 rounded-lg hover:bg-primary-600 focus:bg-primary-600 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contratar Basic
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Standard Plan - Featured */}
          <Card className="plan-card-standard animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center">
                <Star className="w-4 h-4 mr-1" />
                Mais Popular
              </div>
            </div>
            <CardHeader className="text-center pb-4">
              <div className="mb-4">
                <Star className="w-12 h-12 text-primary mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Standard</h3>
              <p className="text-muted-foreground mt-2">
                Suporte avançado + equipamentos reserva
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {standardItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-foreground">{item.name}</span>
                    <span className="font-semibold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="bg-primary/10 p-3 rounded-lg text-xs text-primary">
                <p>* Incluso 1 equipamento reserva a cada 30 dispositivos</p>
                <p>** Incluso 1 equipamento reserva a cada 5 dispositivos</p>
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/5531982980064?text=Olá! Gostaria de contratar o Plano Standard da Infolinx."
                  className="w-full inline-flex items-center justify-center bg-primary text-primary-foreground font-medium px-6 py-3 rounded-lg hover:bg-primary-600 focus:bg-primary-600 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contratar Standard
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="plan-card-premium animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="text-center pb-4">
              <div className="mb-4">
                <Crown className="w-12 h-12 text-secondary mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Premium</h3>
              <p className="text-muted-foreground mt-2">
                Departamento de TI exclusivo e dedicado
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Evolução do Standard</div>
                    <div className="text-sm text-muted-foreground">Todos os benefícios do plano anterior</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Departamento Exclusivo</div>
                    <div className="text-sm text-muted-foreground">TI dedicado à sua empresa</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Planejamento Contínuo</div>
                    <div className="text-sm text-muted-foreground">Melhoria e desenvolvimento constante</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Suporte Prioritário</div>
                    <div className="text-sm text-muted-foreground">Atendimento premium 24/7</div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/10 p-4 rounded-lg">
                <p className="text-secondary font-medium text-center text-sm">
                  Valores personalizados conforme necessidades específicas da sua empresa
                </p>
              </div>

              <a
                href="https://wa.me/5531982980064?text=Olá! Gostaria de saber mais sobre o Plano Premium da Infolinx."
                className="w-full inline-flex items-center justify-center bg-secondary text-secondary-foreground font-medium px-6 py-3 rounded-lg hover:bg-secondary/90 focus:bg-secondary/90 focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Orçamento
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
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
      </div>
    </section>
  );
};

export default Plans;

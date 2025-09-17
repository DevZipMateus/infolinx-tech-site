
import { Target, Eye, Users, Award, Cpu, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="sobre" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Sobre a Infolinx
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Somos uma empresa de prestação de serviços e suprimentos em tecnologia, 
            especializada no gerenciamento completo do seu parque tecnológico.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 animate-slide-in order-2 lg:order-1">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
                Nossa Filosofia
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
                "Não reinventamos a roda, mas escolhemos, testamos e certificamos as melhores opções 
                de roda para o cenário do nosso cliente."
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Trabalhamos próximo aos clientes para melhorar processos internos através da tecnologia 
                e aumentar seus resultados, sempre preservando a honestidade, transparência e boa comunicação.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center p-3 sm:p-4 bg-card rounded-lg border border-border">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-3" />
                <div className="font-semibold text-foreground text-sm sm:text-base">Foco B2B</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Corporativo</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-card rounded-lg border border-border">
                <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-3" />
                <div className="font-semibold text-foreground text-sm sm:text-base">PCs GAMER</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Personalização</div>
              </div>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in order-1 lg:order-2" style={{ animationDelay: '0.3s' }}>
            <Card className="card-service">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">Nossa Missão</h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      Trabalhar próximo aos clientes para melhorar processos internos através da 
                      tecnologia e aumentar seus resultados, sempre preservando a honestidade, 
                      transparência e boa comunicação, para juntos alcançarmos a excelência e 
                      tornarmos big players no mercado.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-service">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">Nossa Visão</h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      Ser referência em soluções tecnológicas, combinando o pensamento corporativo 
                      com inovação e modernidade, conectando empresas ao futuro através da tecnologia.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Lenovo Specialization Section */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Card className="card-service bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-6 sm:p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Especialização Lenovo
                </h3>
                <div className="flex items-center justify-center space-x-6 sm:space-x-8 mb-6">
                  <div className="text-center">
                    <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-2" />
                    <span className="text-sm font-semibold text-foreground">ThinkPad</span>
                  </div>
                  <div className="text-center">
                    <Cpu className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-2" />
                    <span className="text-sm font-semibold text-foreground">ThinkStation</span>
                  </div>
                  <div className="text-center">
                    <Award className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-2" />
                    <span className="text-sm font-semibold text-foreground">ThinkSystem</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
                  Nosso trabalho é realmente diferencial com este fabricante. Temos a condição de 
                  <span className="font-semibold text-foreground"> vender, integrar e fazer manutenção</span> de 
                  todos os itens relacionados.
                </p>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  Somos capacitados para <span className="font-semibold text-foreground">dimensionar e identificar</span> o 
                  equipamento que atende perfeitamente a demanda do cliente.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default About;

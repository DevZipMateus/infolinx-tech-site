
import { Target, Eye, Users, Award, Cpu, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre a Infolinx
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos uma empresa de prestação de serviços e suprimentos em tecnologia, 
            especializada no gerenciamento completo do seu parque tecnológico.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-8 animate-slide-in">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Nossa Filosofia
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                "Não reinventamos a roda, mas escolhemos, testamos e certificamos as melhores opções 
                de roda para o cenário do nosso cliente."
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Trabalhamos próximo aos clientes para melhorar processos internos através da tecnologia 
                e aumentar seus resultados, sempre preservando a honestidade, transparência e boa comunicação.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-semibold text-foreground">Foco B2B</div>
                <div className="text-sm text-muted-foreground">Corporativo</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <Cpu className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-semibold text-foreground">PCs GAMER</div>
                <div className="text-sm text-muted-foreground">Personalização</div>
              </div>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Card className="card-service">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">Nossa Missão</h4>
                    <p className="text-muted-foreground leading-relaxed">
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
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Eye className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">Nossa Visão</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Ser referência em soluções tecnológicas, combinando o pensamento corporativo 
                      com inovação e modernidade, conectando empresas ao futuro através da tecnologia.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Partners Section */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Parceiros Certificados
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="flex flex-col items-center space-y-2 p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow">
              <Award className="w-8 h-8 text-primary" />
              <span className="font-medium text-foreground">Microsoft</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow">
              <Award className="w-8 h-8 text-primary" />
              <span className="font-medium text-foreground">Lenovo</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow">
              <Award className="w-8 h-8 text-primary" />
              <span className="font-medium text-foreground">Intelbras</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow">
              <Award className="w-8 h-8 text-primary" />
              <span className="font-medium text-foreground">AutoDesk</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

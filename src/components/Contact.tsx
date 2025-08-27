
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender sua empresa e fornecer as melhores soluções em tecnologia. 
            Fale conosco agora mesmo!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <Card className="card-service">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                        <a 
                          href="tel:+5531982980064"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          (31) 98298-0064
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-service">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                        <a 
                          href="mailto:atendimento@infolinx.com.br"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          atendimento@infolinx.com.br
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-service">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                        <p className="text-muted-foreground">
                          Rua Januário Pereira Bem, N°52<br />
                          Bairro Tropical
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-service">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Horário de Funcionamento</h4>
                        <p className="text-muted-foreground">
                          Segunda a Sexta: 08:30 às 18:00
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 h-full flex flex-col justify-center">
              <div className="text-center space-y-6">
                <MessageCircle className="w-16 h-16 text-primary mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">
                  Vamos Conversar?
                </h3>
                <p className="text-muted-foreground text-lg">
                  Nossa equipe está pronta para entender suas necessidades e 
                  apresentar a melhor solução para sua empresa.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/5531982980064?text=Olá! Gostaria de conhecer mais sobre os serviços da Infolinx."
                    className="inline-flex items-center justify-center w-full bg-green-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-green-600 focus:bg-green-600 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Falar no WhatsApp
                  </a>
                  
                  <a 
                    href="mailto:atendimento@infolinx.com.br"
                    className="inline-flex items-center justify-center w-full bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:bg-primary-600 focus:bg-primary-600 focus:ring-2 focus:ring-primary/20 transition-all duration-300 group"
                  >
                    <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Enviar E-mail
                  </a>
                </div>
                
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground">
                    <strong>CNPJ:</strong> 17.238.598/0001-54
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

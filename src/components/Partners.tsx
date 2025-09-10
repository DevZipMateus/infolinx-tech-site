import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const Partners = () => {
  const [api, setApi] = useState<any>();

  const partners = [
    {
      name: 'Kaspersky',
      logo: '/lovable-uploads/6771fecd-d0ae-4f1b-ab62-68a9296eacbe.png'
    },
    {
      name: 'CorelDRAW',
      logo: '/lovable-uploads/fc7bc7ae-f0df-4b49-905a-2daeb4a9ab12.png'
    },
    {
      name: 'Autodesk',
      logo: '/lovable-uploads/68044089-2ae5-4b03-accb-692e532c17bc.png'
    },
    {
      name: 'Lenovo',
      logo: '/lovable-uploads/8c789511-0e23-45d1-8add-733ffbb61f20.png'
    },
    {
      name: 'Microsoft',
      logo: '/lovable-uploads/31c12c38-94bf-4372-acce-9e053fd731e9.png'
    },
    {
      name: 'Adobe',
      logo: '/lovable-uploads/ecb9bee8-7fe3-4c64-b202-b6327e60e84b.png'
    },
    {
      name: 'Intelbras',
      logo: '/lovable-uploads/becfd665-febf-44df-9cb3-33923b08b1dc.png'
    }
  ];

  useEffect(() => {
    if (!api) return;

    const autoplay = () => {
      api.scrollNext();
    };

    const interval = setInterval(autoplay, 3000); // 3 segundos por slide

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Principais Parceiros
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com as melhores marcas do mercado para oferecer soluções de excelência
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="flex items-center justify-center p-6 h-32 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <img
                      src={partner.logo}
                      alt={`Logo ${partner.name}`}
                      className="max-h-16 max-w-full object-contain transition-all duration-300"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Partners;

import { useState, useEffect, useRef } from 'react';

const ScrollStory = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const storyData = [
    {
      image: '/lovable-uploads/76f0d139-e660-492e-86fa-5cca9bb9a7e1.png',
      title: 'Tecnologia Avançada',
      subtitle: 'Inovação que transforma seu negócio',
      description: 'Utilizamos as mais modernas tecnologias para oferecer soluções que impulsionam sua empresa.'
    },
    {
      image: '/lovable-uploads/9c85dabf-56ee-485c-aea2-fbdbe9d50769.png',
      title: 'Quem Somos',
      subtitle: 'Especialistas em soluções corporativas',
      description: 'Uma equipe dedicada com anos de experiência em tecnologia empresarial.'
    },
    {
      image: '/lovable-uploads/01cf467b-86b3-4f50-a424-d4d5be029b05.png',
      title: 'Nossos Produtos',
      subtitle: 'Parcerias estratégicas',
      description: 'Oferecemos produtos das principais marcas: Microsoft, Lenovo, Intelbras e AutoDesk.'
    },
    {
      image: '/lovable-uploads/9a55e500-e0ef-43dd-a959-5c2abd90b69b.png',
      title: 'Nossos Serviços',
      subtitle: 'Suporte completo para sua empresa',
      description: 'Manutenção, suporte técnico e gerenciamento de ativos de TI.'
    },
    {
      image: '/lovable-uploads/c2fd2917-d90a-4d15-9e2a-dd5b2698a08d.png',
      title: 'Suporte Online',
      subtitle: 'Atendimento 24/7',
      description: 'Suporte técnico disponível quando você precisar, onde quer que esteja.'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calcula o progresso do scroll dentro da seção
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;

      if (sectionTop <= windowHeight && sectionBottom >= 0) {
        // Melhor cálculo do progresso para distribuir as imagens uniformemente
        const totalScrollDistance = sectionHeight + windowHeight;
        const currentScroll = windowHeight - sectionTop;
        const progress = Math.max(0, Math.min(1, currentScroll / totalScrollDistance));
        
        setScrollProgress(progress);
        
        // Distribui as imagens de forma mais equilibrada ao longo do scroll
        const totalImages = storyData.length;
        const imageProgress = progress * (totalImages - 1);
        const imageIndex = Math.floor(imageProgress);
        const clampedIndex = Math.min(imageIndex, totalImages - 1);
        
        if (clampedIndex !== currentImageIndex) {
          setCurrentImageIndex(clampedIndex);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Chama uma vez para definir o estado inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentImageIndex, storyData.length]);

  const currentStory = storyData[currentImageIndex];

  return (
    <section 
      ref={sectionRef}
      className="relative h-[300vh] overflow-hidden"
      id="scroll-story"
    >
      {/* Container fixo que permanece no centro da tela */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {/* Background com imagem */}
        <div className="absolute inset-0 transition-all duration-1000 ease-out">
          {storyData.map((story, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${story.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Overlay escuro para melhor legibilidade do texto */}
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          ))}
        </div>

        {/* Conteúdo sobreposto */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div 
            key={currentImageIndex} 
            className="animate-fade-in"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-shadow-lg">
              {currentStory.title}
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white/90">
              {currentStory.subtitle}
            </h3>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {currentStory.description}
            </p>
          </div>

          {/* Indicador de progresso melhorado */}
          <div className="mt-12">
            <div className="flex justify-center space-x-2">
              {storyData.map((_, index) => (
                <div
                  key={index}
                  className={`w-12 h-1 rounded-full transition-all duration-500 ${
                    index === currentImageIndex 
                      ? 'bg-white' 
                      : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            <div className="mt-6 text-white/60 text-sm">
              {currentImageIndex + 1} de {storyData.length}
            </div>
            {/* Indicador de progresso geral */}
            <div className="mt-4 w-64 mx-auto bg-white/20 rounded-full h-1">
              <div 
                className="bg-white h-1 rounded-full transition-all duration-300"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator - apenas visível no início */}
        {scrollProgress < 0.1 && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 animate-bounce">
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2">Role para descobrir mais</span>
              <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ScrollStory;

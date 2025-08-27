
import { useState, useEffect, useRef, useCallback } from 'react';

const ScrollStory = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [sectionState, setSectionState] = useState<'before' | 'inside' | 'after'>('before');
  const [virtualScrollCount, setVirtualScrollCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isScrollHijacked = useRef(false);
  const wheelTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const releaseScroll = useCallback(() => {
    if (isScrollHijacked.current) {
      document.body.style.overflow = 'auto';
      isScrollHijacked.current = false;
      setSectionState('after');
      
      // Força o scroll para continuar para baixo
      const nextSection = sectionRef.current?.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const hijackScroll = useCallback(() => {
    if (!isScrollHijacked.current) {
      document.body.style.overflow = 'hidden';
      isScrollHijacked.current = true;
      setSectionState('inside');
      setVirtualScrollCount(0);
      setCurrentImageIndex(0);
    }
  }, []);

  const handleWheel = useCallback((e: WheelEvent) => {
    if (sectionState !== 'inside') return;

    e.preventDefault();
    
    // Debounce wheel events
    if (wheelTimeoutRef.current) {
      clearTimeout(wheelTimeoutRef.current);
    }

    wheelTimeoutRef.current = setTimeout(() => {
      if (e.deltaY > 0) {
        // Scroll para baixo
        setVirtualScrollCount(prev => {
          const newCount = prev + 1;
          const newImageIndex = Math.min(Math.floor(newCount / 3), storyData.length - 1);
          
          if (newImageIndex !== currentImageIndex) {
            setCurrentImageIndex(newImageIndex);
          }
          
          // Se chegou na última imagem e tentou rolar mais
          if (newImageIndex >= storyData.length - 1 && newCount > (storyData.length - 1) * 3 + 2) {
            releaseScroll();
          }
          
          return newCount;
        });
      } else if (e.deltaY < 0) {
        // Scroll para cima
        setVirtualScrollCount(prev => {
          const newCount = Math.max(prev - 1, 0);
          const newImageIndex = Math.min(Math.floor(newCount / 3), storyData.length - 1);
          
          if (newImageIndex !== currentImageIndex) {
            setCurrentImageIndex(newImageIndex);
          }
          
          return newCount;
        });
      }
    }, 50);
  }, [sectionState, currentImageIndex, storyData.length, releaseScroll]);

  const handleTouchStart = useRef<{ y: number } | null>(null);
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (sectionState !== 'inside') return;
    
    if (handleTouchStart.current) {
      const deltaY = handleTouchStart.current.y - e.touches[0].clientY;
      
      if (Math.abs(deltaY) > 30) {
        e.preventDefault();
        
        if (deltaY > 0) {
          // Swipe up (scroll down)
          setVirtualScrollCount(prev => {
            const newCount = prev + 1;
            const newImageIndex = Math.min(Math.floor(newCount / 3), storyData.length - 1);
            
            if (newImageIndex !== currentImageIndex) {
              setCurrentImageIndex(newImageIndex);
            }
            
            if (newImageIndex >= storyData.length - 1 && newCount > (storyData.length - 1) * 3 + 2) {
              releaseScroll();
            }
            
            return newCount;
          });
        } else {
          // Swipe down (scroll up)
          setVirtualScrollCount(prev => {
            const newCount = Math.max(prev - 1, 0);
            const newImageIndex = Math.min(Math.floor(newCount / 3), storyData.length - 1);
            
            if (newImageIndex !== currentImageIndex) {
              setCurrentImageIndex(newImageIndex);
            }
            
            return newCount;
          });
        }
        
        handleTouchStart.current = null;
      }
    }
  }, [sectionState, currentImageIndex, storyData.length, releaseScroll]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || sectionState === 'inside') return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Verifica se a seção está visível
      if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
        if (sectionState === 'before') {
          hijackScroll();
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (sectionState !== 'inside') return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        setCurrentImageIndex(prev => {
          const newIndex = Math.min(prev + 1, storyData.length - 1);
          if (newIndex >= storyData.length - 1 && prev === storyData.length - 1) {
            releaseScroll();
          }
          return newIndex;
        });
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        setCurrentImageIndex(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'Escape') {
        releaseScroll();
      }
    };

    // Event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    
    // Touch events
    window.addEventListener('touchstart', (e) => {
      if (sectionState === 'inside') {
        handleTouchStart.current = { y: e.touches[0].clientY };
      }
    });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchmove', handleTouchMove);
      
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
      }
      
      // Cleanup - libera o scroll se o componente for desmontado
      if (isScrollHijacked.current) {
        document.body.style.overflow = 'auto';
      }
    };
  }, [sectionState, hijackScroll, handleWheel, handleTouchMove, releaseScroll, storyData.length]);

  const currentStory = storyData[currentImageIndex];
  const progress = currentImageIndex / (storyData.length - 1);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
      id="scroll-story"
    >
      {/* Container fixo que permanece no centro da tela */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {/* Background com imagem */}
        <div className="absolute inset-0 transition-all duration-700 ease-out">
          {storyData.map((story, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
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

          {/* Indicador de progresso e navegação */}
          <div className="mt-12">
            <div className="flex justify-center space-x-2">
              {storyData.map((_, index) => (
                <div
                  key={index}
                  className={`w-8 h-1 rounded-full transition-all duration-500 ${
                    index === currentImageIndex 
                      ? 'bg-white scale-110' 
                      : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            <div className="mt-4 text-white/60 text-sm">
              {currentImageIndex + 1} de {storyData.length}
            </div>
            {/* Barra de progresso geral */}
            <div className="mt-4 w-48 mx-auto bg-white/20 rounded-full h-1.5">
              <div 
                className="bg-white h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Indicadores de interação baseado no estado */}
        {sectionState === 'inside' && (
          <>
            {currentImageIndex === 0 && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 animate-bounce">
                <div className="flex flex-col items-center">
                  <span className="text-sm mb-2">Role para navegar</span>
                  <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
                  </div>
                </div>
              </div>
            )}

            {currentImageIndex === storyData.length - 1 && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80">
                <div className="flex flex-col items-center">
                  <span className="text-sm">Role mais para continuar</span>
                  <div className="mt-2 animate-pulse">↓</div>
                </div>
              </div>
            )}

            {/* Controles de teclado para acessibilidade */}
            <div className="absolute top-8 right-8 text-white/60 text-xs">
              <div>↑↓ ou PageUp/PageDown para navegar</div>
              <div>Esc para sair</div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ScrollStory;

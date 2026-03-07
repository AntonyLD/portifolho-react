import { useEffect, useRef } from 'react';
import './sobreMim.css';
import BgSobreMim from "../csvComponentes/BgSobreMim";

const SobreMim = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const elements = [
      { id: "h1-sobreMim", showClass: "show-titulo" },
      { id: "text-sobreMimBrnaco", showClass: "show-info-Branco" },
      { id: "text-sobreMimPreto", showClass: "show-info-Preto" },
      { id: "card-perfil-sobreMim", showClass: "show-Card-foto" },
    ];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const config = elements.find((e) => e.id === el.id);

          if (config) {
            el.classList.forEach((cls) => {
              if (cls.startsWith("hidden-")) {
                el.classList.remove(cls);
              }
            });

            el.classList.add(config.showClass);
            observer.unobserve(el);
          }
        }
      });
    }, { threshold: 0.2 });

    // observa todos os elementos
    elements.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className='secao' id='section-sobreMim'>
      <BgSobreMim id="bg-svg-esquerda" />
      <BgSobreMim id="bg-svg-direita" />
      <div id='container-info-sobreMim'>
        <div id='box-sobreMim-text'>
          <h1 className='hidden-titulo' id='h1-sobreMim'>SOBRE MIM</h1>
          <div className='hidden-info-Branco' id='text-sobreMimBrnaco'>
            <p>Desenvolvedor Front-End apaixonado por criar interfaces que impressionam e funcionam perfeitamente. Transformo ideias em realidade digital usando as mais modernas tecnologias.</p>
          </div>
          <div className='hidden-info-Preto' id='text-sobreMimPreto'>
            <p>Familiarizado em React, JavaScript, e criação de experiências de usuário que fazem a diferença. Cada projeto é uma nova aventura!</p>
          </div>
        </div>
        <div id='container-perfil-sobreMim'>
          <div className='hidden-Card-foto' id='card-perfil-sobreMim' ref={cardRef}>
            <div id='foto-perfil-sobreMim'>
              <img id='foto-sem-cor' src="/ex.png" alt="Foto sem cor" />
              <img id='foto-colorido' src="/excolo.png" alt="Foto colorida" />
            </div>
            <span id='spanNovo-box-perfil-sobreMim'>NOVO!</span>
            <div id='txt-perfil-sobreMim'>
              <ul id='ul-info-sobreMim'>
                <li><span><img className='estrelas-sobre-mim' src="/estrela-pequena.png" alt="Estrela" /></span> Nome: Antony L.D </li>
                <li><span><img className='estrelas-sobre-mim' src="/estrela-pequena.png" alt="Estrela" /></span> Experiência: 2 anos</li>
                <li><span><img className='estrelas-sobre-mim' src="/estrela-pequena.png" alt="Estrela" /></span> Foco: Desenvolvedor Web</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMim;

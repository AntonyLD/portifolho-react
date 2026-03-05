import { useEffect, useRef } from 'react';
import './habilidades.css';

const Habilidades = () => {

    useEffect(() => {
        // mapa de cada id -> classe que mostra
        const elements = [
            { id: "titulo-habilidades", showClass: "show-habilidades-titulo" },
            { id: "div-habilidades", showClass: "show-habilidades" },
            { id: "mais-info", showClass: "show-mais-info" }
        ];

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const config = elements.find((e) => e.id === el.id);

                    if (config) {
                        // pega todas as classes hidden-* e remove
                        el.classList.forEach((cls) => {
                            if (cls.startsWith("hidden-")) {
                                el.classList.remove(cls);
                            }
                        });

                        // adiciona a classe show certa
                        el.classList.add(config.showClass);

                        // se quiser animar só 1x
                        observer.unobserve(el);
                    }
                }
            });
        }, { threshold: 0.2 }); // dispara quando 20% do elemento aparece

        // observa todos os elementos
        elements.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const efeitoBgMouseRef = useRef(null);
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (efeitoBgMouseRef.current) {
                efeitoBgMouseRef.current.style.background = `
                    radial-gradient(circle at ${e.clientX}px ${e.clientY}px, rgb(5, 0, 39) 100px, rgba(34, 0, 255, 0) 2500px)
                `;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section className='secao' id="section-habilidades">
            <div ref={efeitoBgMouseRef} id="efeito-bg-mouse"></div>
            <div className='hidden-habilidades-titulo' id="titulo-habilidades">
                <h1>Habilidades Técnicas</h1>
                <h3>Tecnologias que conheço</h3>
            </div>
            <div className='hidden-habilidades' id="div-habilidades">
                <div className="habilidades">
                    <img src="react.png" alt="" />
                    <h3>react</h3>

                </div>
                <div className="habilidades">
                    <img src="css.png" alt="" />
                    <h3>CSS</h3>
                </div>
                <div className="habilidades">
                    <img src="figma.png" alt="" />
                    <h3>Figma</h3>
                </div>
                <div className="habilidades">
                    <img src="git.png" alt="" />
                    <h3>git</h3>
                </div>
                <div className="habilidades">
                    <img src="html.png" alt="" />
                    <h3>HTML</h3>
                </div>
                <div className="habilidades">
                    <img src="node.png" alt="" />
                    <h3>Node</h3>
                </div>
                <div className="habilidades">
                    <img src="js.png" alt="" />
                    <h3>JAVASCRIPT</h3>
                </div>
                <div className="habilidades">
                    <img src="ts.png" alt="" />
                    <h3>TYPESCRIPT</h3>
                </div>
            </div>
            <div className='hidden-mais-info' id="mais-info">
                <h1>E MUITO MAIS!</h1>
                <p>Sempre aprendendo novas tecnologias e aprimorando minhas habilidades para criar soluções inovadoras!</p>
            </div>
        </section>
    );
};

export default Habilidades;

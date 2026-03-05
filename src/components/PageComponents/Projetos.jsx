import { useEffect, useRef, useState } from "react";
import "./projetos.css";
import DivProjetos from "../csvComponentes/DivProjetos";

const Projetos = () => {

  useEffect(() => {
    // mapa de cada id -> classe que mostra
    const elements = [
      { id: "div-projetos-titulo", showClass: "show-projeto-titulo" },
      { id: "container-projetos", showClass: "show-projetos" },
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

  const projetos = [
    {
      btnTxt: "VER PROJETO",
      status: "EM ANDAMENTO",
      id: "projeto-todo-list",
      imagem: "/Projeto-Todo-list.png",
      titulo: "LISTA DE AFAZERES",
      descricao: "Aqui eu vou colocar informações sobre o projeto, bem basiquinho tlg?",
      tecnologias: ["css.png", "js.png", "html.png"],
      verProjetoLink: "https://antonyld.github.io/To-do-list/",
      githubLink: "https://github.com/usuario/projeto",
    },
    {
      btnTxt: "VER PROJETO",
      status: "CONCLUIDO",
      id: "projeto-calc",
      imagem: "/CalculadoraDeGorjeta.png",
      titulo: "CALCULADORA DE GORJETAS",
      descricao: "Aqui eu vou colocar informações sobre o projeto, bem basiquinho tlg?",
      tecnologias: ["css.png", "js.png", "html.png"],
      verProjetoLink: "https://antonyld.github.io/Tip-calculator-app/",
      githubLink: "https://github.com/usuario/projeto",
    },
    {
      btnTxt: "EM BREVE",
      status: "EM ANDAMENTO",
      id: "projeto-lista-compras",
      imagem: "/ListaDeCompra.png",
      titulo: "LISTA DE COMPRAS",
      descricao: "Aqui eu vou colocar informações sobre o projeto, bem basiquinho tlg?",
      tecnologias: ["css.png", "js.png", "html.png", "react.png", "ts.png"],
      verProjetoLink: "http://localhost:5173/",
      githubLink: "https://github.com/usuario/projeto",
    },
  ];

  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const updateWidth = () => {
        setSlideWidth(containerRef.current.offsetWidth);
      };
      updateWidth();

      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % projetos.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + projetos.length) % projetos.length);
  };

  return (
    <section className="secao" id="section-projetos">
      <div id="container-titulo-projetos">
        <div className="hidden-projeto-titulo" id="div-projetos-titulo">
          <h1>PROJETOS</h1>
          <h3>FEITOS / EM ANDAMENTO</h3>
        </div>
      </div>

      <div className="hidden-projetos" id="container-projetos" ref={containerRef}>
        <div
          className="carousel-inner"
          style={{
            transform: `translateX(-${index * slideWidth}px)`,
          }}
        >
          {projetos.map((projeto) => (
            <div className="carousel-item" key={projeto.id} style={{ width: slideWidth }}>
              <DivProjetos {...projeto} />
            </div>
          ))}
        </div>
      </div>

      <div id="nav-button-projetos">
        <button onClick={prevSlide}>anterior</button>
        <button onClick={nextSlide}>próxima</button>
      </div>
    </section>
  );
};

export default Projetos;

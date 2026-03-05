import React, { useEffect } from 'react';
import './heroSection.css'

const HeroSection = () => {

  useEffect(() => {
    const boxInfo = document.querySelectorAll('#box-info-apresentacao');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-box');
          entry.target.classList.remove('hidden-box');
        }
      });
    });

    boxInfo.forEach(el => observer.observe(el));

    return () => {
      boxInfo.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className='secao' id='section-apresentacao'>
      <div id='background-objt'>
        <div id='container-elements'>
          <img id='raio1' src="/raio1.png" alt="imagem de raio" />
          <img id='raio2' src="/raio2.png" alt="imagem de raio" />
          <img id='raio3' src="/raio3.png" alt="imagem de raio" />
          <img id='raio4' src="/raio4.png" alt="imagem de raio" />
        </div>
      </div>
      <div id='container-balao'>
        <img className='baloes' id='balao1' src="./balao1.png" alt="Olááá" />
        <img className='baloes' id='balao2' src="./balao2.png" alt="Olááá" />
        <img className='baloes' id='balao3' src="./balao3.png" alt="Olááá" />

      </div>
      <div id='div-apresentacao'>
        <div className='hidden-box' id='box-info-apresentacao'>
          <h4>TITULO TESTE</h4>
          <h1>TESTE-EEE</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, rerum?</p>
          <div id='botoes-apresentacao'>
            <div id='div-btn-sobreMim'>
              <a href='#section-projetos' id='btn-sobreMim'>PROJETOS</a>
              <span id='shadowSobreMim'></span>
            </div>
            <div id='div-btn-Projetos'>
              <a href='#section-contato' id='btn-projetos'>CONTATO</a>
              <span id='shadowProjetos'></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

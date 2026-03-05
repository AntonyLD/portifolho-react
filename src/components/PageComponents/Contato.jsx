import { useEffect, useState } from 'react';
import './contato.css';

const Contato = () => {
  useEffect(() => {
    // mapa de cada id -> classe que mostra
    const elements = [
      { id: "titulo-contato", showClass: "show-contato-titulo" },
      { id: "info-contato", showClass: "show-info-contato" },
      { id: "div-forms", showClass: "show-div-forms" },
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

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xqaypgko", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("Mensagem enviada com sucesso! 🎉");
      form.reset();
    } else {
      setStatus("Erro ao enviar. Tente novamente.");
    }

    setTimeout(() => setStatus(""), 5000);
  };


  return (
    <section className='secao' id='section-contato' >
      <div id='bgContato'>
        <img id='balaoCT1' src="/balaoCT1.png" alt="" />
        <img id='balaoCT2' src="/balaoCT2.png" alt="" />
        <img id='balaoCT3' src="/balaoCT3.png" alt="" />
        <img id='balaoCT4' src="/balaoCT4.png" alt="" />
        <img id='balaoCT5' src="/balaoCT5.png" alt="" />
        <img id='balaoCT6' src="/balaoCT6.png" alt="" />
      </div>
      <div className='hidden-contato-titulo' id='titulo-contato'>
        <h1>CONTATO</h1>
        <h3>VAMOS CONVERSAR</h3>
      </div>
      <div id='container-contato'>

        <div className='hidden-info-contato' id='info-contato'>
          <h1>VAMOS CRIAR ALGO INCRÍVEL JUNTOS!</h1>
          <p id='p-info-contato'>Tem um projeto em mente? Precisa de ajuda com desenvolvimento front-end? Ou só quer bater um papo sobre tecnologia? Estou aqui para ajudar!</p>
          <div id='div-contato'>
            <div className='contato'>
              <span><img src="/linkedin.png" alt="icone gmail" /></span>
              <div>
                <p className='p-titulo'>LinkedIn</p>
                <p className='p-contato'>seuemail@exemplo.com</p>
              </div>
            </div>
            <div className='contato'>
              <span className='contato-mail'><img src="/gmail.png" alt="icone gmail" /></span>
              <div className='contato-mail'>
                <p className='p-titulo'>Email</p>
                <p className='p-contato'>seuemail@exemplo.com</p>
              </div>

            </div>
            <div className='contato'>
              <span><img src="/github.png" alt="icone gmail" /></span>
              <div>
                <p className='p-titulo'>GitHub</p>
                <p className='p-contato'>seuemail@exemplo.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className='hidden-div-forms' id='div-forms'>
          <form
            id='form-input'
            onSubmit={handleSubmit}
          >
            <label htmlFor="input-nome">NOME</label>
            <input name='name' className='style-button' id='input-nome' type="text" placeholder='Seu nome' required />

            <label htmlFor="input-email">EMAIL</label>
            <input name='email' className='style-button' id='input-email' type="email" placeholder='Exemplo@gmail.com' required />

            <label htmlFor="input-mensagem">MENSAGEM</label>
            <textarea name='message' id="input-mensagem" required></textarea>

            <div id='div-button-enviar'>
              <input id='button-enviar' type="submit" value="ENVIAR MENSAGEM!" />
              <span id='span-bg-button'>.</span>
            </div>
          </form>
        </div>
      </div>

      {status && (
        <p className='status-envio show'>{status}</p>
      )}

    </section>
  )
}

export default Contato
import React from 'react'

const DivProjetos = ({ imagem, titulo, descricao, tecnologias, verProjetoLink, gitHubLink, id, status, btnTxt }) => {
    return (
        <div id={id} className='div-projetos'>
            <span className='status-projetos'>{status}</span>
            <div className='div-foto-projetos'>
                <img src={imagem} alt={`imagem do projeto ${titulo}`} />
            </div>
            <div className='div-info-projetos'>
                <h1>{titulo}</h1>
                <p>{descricao}</p>
            </div>
            <div className='div-tecnologias-projeto'>
                {tecnologias.map((tecnologia, index) => (
                    <span key={index}><img src={tecnologia} alt="" /></span>
                ))}
            </div>
            <div className='div-projeto-botoes'>
                <button onClick={() => window.open(verProjetoLink, "_blank")}>{btnTxt}</button>
                <button onClick={() => window.open(gitHubLink, "_blank")}>GITHUB</button>
            </div>
        </div>
    )
}

export default DivProjetos
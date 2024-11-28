export const Help = () => {
  return (
    <>
      <div className="we-help-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="imgs-grid">
                <div className="grid grid-1">
                  <img src="images/img-grid-1.jpg" alt="Untree.co" />
                </div>
                <div className="grid grid-2">
                  <img src="images/img-grid-2.jpg" alt="Untree.co" />
                </div>
                <div className="grid grid-3">
                  <img src="images/img-grid-3.jpg" alt="Untree.co" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 ps-lg-5">
              <h2 className="section-title mb-4">
                Nós ajudamos você a fazer a melhor manutenção do seu automóvel
              </h2>
              <p>
                Nossa prioridade é garantir que você tenha a melhor experiência
                possível. Se tiver dúvidas, preocupações ou precisar de
                orientação, conte com nossa equipe de suporte pronta para
                ajudar.
              </p>

              <ul className="list-unstyled custom-list my-4">
                <li>Ligue para nossa equipe e obtenha respostas rápidas.</li>
                <li>Converse em tempo real com nossos especialistas.</li>
                <li>Atendimento disponível durante o horário comercial.</li>
                <li>Prefere atendimento presencial? Visite nossa loja!</li>
              </ul>
              {/* <p><a herf="#" className="btn">Explore</a></p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Choose = () => {
  return (
    <>
      <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <h2 className="section-title">Por Que Nos Escolher?</h2>
              <p>
                Comprometidos em oferecer qualidade, confiança e soluções
                personalizadas, somos o parceiro ideal para manter o seu carro
                sempre em movimento. Veja o que nos diferencia!
              </p>

              <div className="row my-5">
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src="images/truck.svg"
                        alt="Image"
                        className="imf-fluid"
                      />
                    </div>
                    <h3>Entrega Rápida e Confiável</h3>
                    <p>
                      - Frete ágil para todo o país, com opções de entrega no
                      mesmo dia em localidades selecionadas.
                    </p>
                    <p>
                      - Embalagem segura para que seus produtos cheguem em
                      perfeitas condições.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src="images/bag.svg"
                        alt="Image"
                        className="imf-fluid"
                      />
                    </div>
                    <h3>Variedade de Produtos</h3>
                    <p>
                      - Uma ampla gama de pneus, baterias, lubrificantes e óleos
                      para atender a todas as necessidades.
                    </p>
                    <p>
                      - Produtos para veículos de passeio, utilitários e
                      pesados.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src="images/support.svg"
                        alt="Image"
                        className="imf-fluid"
                      />
                    </div>
                    <h3>Atendimento Especializado</h3>
                    <p>
                      - Nossa equipe está pronta para ajudar você a encontrar o
                      produto perfeito para o seu veículo.
                    </p>
                    <p>
                      - Suporte técnico e dicas de manutenção a qualquer
                      momento.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src="images/return.svg"
                        alt="Image"
                        className="imf-fluid"
                      />
                    </div>
                    <h3>Qualidade Garantida</h3>
                    <p>
                      - Trabalhamos apenas com marcas líderes e produtos
                      certificados.
                    </p>
                    <p>
                      - Oferecemos soluções testadas para garantir desempenho e
                      segurança.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="img-wrap">
                <img
                  src="images/why-choose-us-img.png"
                  alt="Image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

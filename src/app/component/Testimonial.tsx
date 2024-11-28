export const Testimonial = () => {
  return (
    <>
      <div className="testimonial-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto text-center">
              <h2 className="section-title">
                O Que Nossos Clientes Estão Dizendo
              </h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="testimonial-slider-wrap text-center">
                <div id="testimonial-nav">
                  <span className="prev" data-controls="prev">
                    <span className="fa fa-chevron-left"></span>
                  </span>
                  <span className="next" data-controls="next">
                    <span className="fa fa-chevron-right"></span>
                  </span>
                </div>

                <div className="testimonial-slider">
                  <div className="item">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 mx-auto">
                        <div className="testimonial-block text-center">
                          <blockquote className="mb-5">
                            <p>
                              &ldquo;Desde que começamos a comprar pneus e
                              baterias aqui, nossa frota tem apresentado
                              desempenho excepcional. A equipe é extremamente
                              atenciosa, e os produtos são de alta qualidade.
                              Não troco por nada!&rdquo;
                            </p>
                          </blockquote>

                          <div className="author-info">
                            <div className="author-pic">
                              <img
                                src="images/person-1.png"
                                alt="Maria Jones"
                                className="img-fluid"
                              />
                            </div>
                            <h3 className="font-weight-bold">Maria Jones</h3>
                            <span className="position d-block mb-3">
                              Proprietária de Frota de Caminhões
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 mx-auto">
                        <div className="testimonial-block text-center">
                          <blockquote className="mb-5">
                            <p>
                              &ldquo;Encontrei exatamente o que precisava para o
                              meu carro, desde lubrificantes a acessórios. Além
                              disso, o atendimento foi rápido e eficiente.
                              Recomendo de olhos fechados!&rdquo;
                            </p>
                          </blockquote>

                          <div className="author-info">
                            <div className="author-pic">
                              <img
                                src="images/person-1.png"
                                alt="Maria Jones"
                                className="img-fluid"
                              />
                            </div>
                            <h3 className="font-weight-bold">Maria Oliveira</h3>
                            <span className="position d-block mb-3">
                              Cliente Particular.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 mx-auto">
                        <div className="testimonial-block text-center">
                          <blockquote className="mb-5">
                            <p>
                              &ldquo;Os produtos oferecidos aqui têm um óptimo
                              custo-benefício e sempre chegam no prazo. Isso
                              facilita muito o meu trabalho no dia a dia. Uma
                              parceria que só tem dado certo!&rdquo;
                            </p>
                          </blockquote>

                          <div className="author-info">
                            <div className="author-pic">
                              <img
                                src="images/person-1.png"
                                alt="Maria Jones"
                                className="img-fluid"
                              />
                            </div>
                            <h3 className="font-weight-bold">Roberto Santos</h3>
                            <span className="position d-block mb-3">
                              Mecânico Autônomo.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

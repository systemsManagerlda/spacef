export const Popular = () => {
  return (
    <>
      <div className="popular-product">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img
                    src="images/product-1.png"
                    alt="Image"
                    className="img-fluid"
                  />
                </div>
                <div className="pt-3">
                  <h3>Freio a Disco</h3>
                  <p>
                    O freio a disco é um sistema de frenagem amplamente
                    utilizado em veículos devido à sua eficiência e capacidade
                    de dissipar calor.
                  </p>
                  <p>
                    <a href="#">Saber mais...</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img
                    src="images/product-2.png"
                    alt="Image"
                    className="img-fluid"
                  />
                </div>
                <div className="pt-3">
                  <h3>Componentes Automotivos</h3>
                  <p>
                    Componentes automotivos são peças e sistemas fundamentais
                    para o funcionamento, desempenho, segurança e conforto de
                    veículos automotores.
                  </p>
                  <p>
                    <a href="#">Saber mais...</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img
                    src="images/product-3.png"
                    alt="Image"
                    className="img-fluid"
                  />
                </div>
                <div className="pt-3">
                  <h3>Bateria</h3>
                  <p>
                    A bateria de automóvel é crucial para a funcionalidade do
                    veículo. A escolha da bateria correta e sua manutenção
                    regular garantem maior eficiência e durabilidade.
                  </p>
                  <p>
                    <a href="#">Saber mais...</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

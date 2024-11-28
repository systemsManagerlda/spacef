export const Product = () => {
  return (
    <>
      <div className="product-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">
                Encontre Tudo o Que Seu Veículo Precisa!
              </h2>
              <p className="mb-4">
                Oferecemos uma ampla gama de produtos para garantir a máxima
                performance e cuidado do seu carro. Trabalhamos com marcas
                renomadas que você pode confiar. Confira nossas categorias e
                encontre o produto ideal para você!
              </p>
              <p>
                <a href="#" className="btn">
                  Orçamento
                </a>
              </p>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="#">
                <img
                  src="images/product-1.png"
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title">Freio a Disco</h3>
                <strong className="product-price">0.00 MZN</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </a>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="#">
                <img
                  src="images/product-2.png"
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title">Componentes Automotivos</h3>
                <strong className="product-price">0.00 MZN</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </a>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="#">
                <img
                  src="images/product-3.png"
                  className="img-fluid product-thumbnail"
                />
                <h3 className="product-title">Bateria</h3>
                <strong className="product-price">0.00 MZN</strong>

                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="container relative">
          <div className="sofa-img hidden md:block">
            <img
              src="images/pneuChamas.png"
              alt="Image"
              className="img-fluid"
            />
          </div>

          <div className="row">
            <div className="col-lg-8">
              <div className="subscription-form">
                <h3 className="d-flex align-items-center">
                  <span className="me-1">
                    <img
                      src="images/envelope-outline.svg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </span>
                  <span>Subscreva-se no Newsletter</span>
                </h3>

                <form action="#" className="row g-3">
                  <div className="col-auto">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="col-auto">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-primary">
                      <span className="fa fa-paper-plane"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="row g-5 mb-5">
            <div className="col-lg-4">
              <div className="mb-4 footer-logo-wrap flex flex-row items-center">
                <div className="h-12 w-12">
                  <img src="images/logo.png" />
                </div>
                <div>
                  <a href="#" className="footer-logo">
                    Spacef<span>.</span>
                  </a>
                </div>
              </div>
              <p className="mb-4">
                Somos uma empresa especializada na venda de pneus, baterias,
                lubrificantes e óleos automotivos, comprometida em fornecer
                produtos de alta qualidade e serviços excepcionais para nossos
                clientes. Actuamos como parceiros de confiança para motoristas,
                mecânicos, gestores de frotas e entusiastas automotivos,
                oferecendo soluções que garantem desempenho, segurança e
                economia para seus veículos.
              </p>

              <ul className="list-unstyled custom-social">
                <li>
                  <a href="#">
                    <span className="fa fa-brands fa-facebook-f"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-brands fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-brands fa-instagram"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-brands fa-linkedin"></span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-8">
              <div className="row links-wrap">
                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Sobre-Nós</a>
                    </li>
                    <li>
                      <a href="#">Serviços</a>
                    </li>
                    {/* <li>
                      <a href="#">Blog</a>
                    </li> */}
                    <li>
                      <a href="#">Contactos</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Suporte</a>
                    </li>
                    <li>
                      <a href="#">Base de conhecimento</a>
                    </li>
                    <li>
                      <a href="#">Conversar</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Produtos</a>
                    </li>
                    <li>
                      <a href="#">Nossa equipe</a>
                    </li>
                    {/* <li>
                      <a href="#">Leadership</a>
                    </li> */}
                    <li>
                      <a href="#">Política de Privacidade</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Pneus</a>
                    </li>
                    <li>
                      <a href="#">Baterias</a>
                    </li>
                    <li>
                      <a href="#">Acessórios</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-top copyright">
            <div className="row pt-4">
              <div className="col-lg-6">
                <p className="mb-2 text-center text-lg-start">
                  Copyright &copy;
                  {new Date().getFullYear()}. Todos os direitos reservados.
                </p>
              </div>

              <div className="col-lg-6 text-center text-lg-end">
                <ul className="list-unstyled d-inline-flex ms-auto">
                  <li className="me-4">
                    <a href="#">Termos &amp; Condições</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

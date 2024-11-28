import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Desempenho e Durabilidade</h1>
                <p className="mb-4">
                  Pneus, baterias e lubrificantes de qualidade que acompanham
                  cada quilômetro da sua jornada. Encontre tudo o que seu carro
                  precisa em um só lugar.
                </p>
                <p>
                  <a href="" className="btn btn-secondary me-2">
                    Catalogo
                  </a>
                  <a href="#" className="btn btn-white-outline">
                    Orçamento
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-7 hidden md:block">
              <div className="hero-img-wrap">
                <img src="/images/pneu.png" alt="" />
              </div>
            </div>
            {/* <div className="col-lg-7 hidden sm:block">
              <div className="hero-img-wrap sm:overflow-x-hidden">
                <img src="/images/pneu.png" alt="" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

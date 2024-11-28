export const Header = () => {
  return (
    <>
      <nav
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
        arial-label="Furni navigation bar"
      >
        <div className="container">
          <div className="flex flex-row gap-1 items-center">
            <div className="h-12 w-12">
              <img src="images/logo.png" />
            </div>
            <div className="hidden md:block">
              <a className="navbar-brand" href="#">
                Spacef<span>.</span>
              </a>
            </div>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="hidden md:block">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              {/* <li>
                <a className="nav-link" href="#">
                  Shop
                </a>
              </li> */}
              <li>
                <a className="nav-link" href="#">
                  Sobre-Nós
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Serviços
                </a>
              </li>
              {/* <li>
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li> */}
              <li>
                <a className="nav-link" href="#">
                  Contactos
                </a>
              </li>
            </ul>

            {/* <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <a className="nav-link" href="#">
                  <img src="images/user.svg" />
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  <img src="images/cart.svg" />
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    </>
  );
};

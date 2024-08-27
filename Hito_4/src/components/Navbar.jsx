import { Link } from "react-router-dom";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        La Tutta pasta
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              🍝 Inicio
            </Link>
          </li>
          {token ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  🔓 Perfil
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logout">
                  🔒 Cerrar
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  🔐 Ingresar
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Register">
                  🔐 Registro
                </Link>
              </li>
            </>
          )}
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              🛒 Total: {total.toLocaleString()}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

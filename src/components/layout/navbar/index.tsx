import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const active_menu_item = useSelector(
    (state: any) => state.shopping.active_menu_item
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          Shopping Kart
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li
              className={
                "nav-item " + (active_menu_item === "inicio" ? "active" : null)
              }
            >
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li
              className={
                "nav-item " +
                (active_menu_item === "meu-carrinho" ? "active" : null)
              }
            >
              <Link className="nav-link" to="/meu-carrinho">
                Meu Carrinho
              </Link>
            </li>
            <li
              className={
                "nav-item " +
                (active_menu_item === "meus-produtos" ? "active" : null)
              }
            >
              <Link className="nav-link" to="/meus-produtos">
                Meus Produtos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

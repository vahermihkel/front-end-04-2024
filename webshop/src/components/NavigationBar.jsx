import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { CartSumContext } from '../store/CartSumContext';
import { AuthContext } from '../store/AuthContext';
import { useSelector } from 'react-redux';

function NavigationBar() {
  const { t, i18n } = useTranslation();
  const { cartSum } = useContext(CartSumContext);
  const { loggedIn, setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const count = useSelector((state) => state.counter.value)
  const cartTotal = useSelector((state) => state.cartTotal.value)

  const changeLangEn = () => {
    i18n.changeLanguage("en"); // sama mis i18n.js failis
    localStorage.setItem("lang", "en");
  }

  const changeLangEt = () => {
    i18n.changeLanguage("et");
    localStorage.setItem("lang", "et");
  }

  const logout = () => {
    setLoggedIn(false);
    navigate("/");
    // window.location.href = "/"; // teeb refreshi, aga töötab
    sessionStorage.removeItem("token");
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Webshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {loggedIn === true && <Nav.Link as={Link} to="/admin">{t("nav.admin")}</Nav.Link>}
            <Nav.Link as={Link} to="/contact">{t("nav.contact")}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t("nav.shops")}</Nav.Link>
            <Nav.Link as={Link} to="/cart">{t("nav.cart")}</Nav.Link>
          </Nav>
          <Nav>
            {/* <span>{count} tk </span> */}
            <span>{cartTotal} tk / </span>
            <span>{cartSum} €</span>
            {loggedIn === false && <Nav.Link as={Link} to="/login">{t("nav.login")}</Nav.Link>}
            {loggedIn === false && <Nav.Link as={Link} to="/signup">{t("nav.signup")}</Nav.Link>}
            {loggedIn === true && <Nav.Link onClick={logout}>{t("nav.logout")}</Nav.Link>}
            <img className="lang" onClick={changeLangEn} src="/english.png" alt="" />
            <img className="lang" onClick={changeLangEt} src="/estonian.png" alt="" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
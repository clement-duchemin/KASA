import logo from "../../assets/footer.png"

function Footer() {
  return (
    <footer className="foot-container">
        <img src={logo} alt="logo de Kasa" />
        <p className="foot-container__text">© 2020 All rights reserved</p>
    </footer>
  )
}

export default Footer


function Nav() {
  return (
    <nav className="nav">
        <div className="logo-cont">

        <img src="" alt="Harlys's Image" />
        <h3 className="logo-name">Harlys Almanzar</h3>
        </div>

        <ul className="nav-items">
            <li className="nav-item">Home</li>
            <a href="#about"><li className="nav-item">About</li> </a>
            <a href="#education"><li className="nav-item">Education</li> </a>
            <a href="#projects"><li className="nav-item">Projects</li> </a>
        </ul>
    </nav>
  )
}

export default Nav;
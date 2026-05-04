import { Link } from "react-router-dom";
import { useTheme } from "../Theme";
import styles from "./Navbar.module.css"

function Navbar() {
  const {dark, setDark} = useTheme()

  return (
    <header>
      <div className="container">
        <nav className={styles.navbar}>
            <h3>Jero Lapore</h3>
            <ul className={styles.navLinkContainer}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/journal">Journal</Link></li>
              <li><Link to="/about">About</Link></li>
              <button
                onClick={() => setDark(!dark)}
              >
                {dark ? "Light" : "Dark"} Mode
              </button>
            </ul>
        </nav>
        <hr />
      </div>
    </header>
  )
}

export default Navbar
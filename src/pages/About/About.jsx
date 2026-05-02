import styles from "./About.module.css"
import MyPhoto from "/images/about/about-img.JPG"
import instagramLogo from "/images/about/instagram.svg"
import linkedinLogo from "/images/about/linkedin.svg"
import Footer from "../../components/Footer/Footer"

function About() {
    return (
        <section className={styles.aboutSection}>
            <div className="container">
                <div className={styles.grid}>
                    <img src={MyPhoto} alt="Jero Lapore portrait" />
                    <div className={styles.aboutParagraph}>
                        <div>
                            <p>I'm <strong>Jero Lapore</strong>, a photographer — or at least trying to be one — from Kabankalan City, Negros Occidental, Philippines. I mostly shoot on film, drawn to its raw textures, imperfections, and the patience it teaches. I see the camera as an extension of myself, not just a tool but a mirror of how I see, feel, and exist in the world. Through it, I try to capture not just moments, but fragments of thought, silence, and truth. Whether it's a quiet street scene or a still corner of home, each frame reflects how I view the world — slow, honest, and always evolving.</p>
                        </div>
                        <div className={styles.socialLinks}>
                            <div>
                                <p>laporejero1297@gmail.com</p>
                            </div>
                            <div>
                                <a className={styles.socialItem} href="https://www.instagram.com/jero.lapore/">
                                    <img src={instagramLogo} alt="Instagram logo" />
                                </a>
                            </div>
                            <div>
                                <a className={styles.socialItem} href="">
                                    <img src={linkedinLogo} alt="Instagram logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </section>
    )
}

export default About
import { useEffect, useState } from "react"
import styles from "./Home.module.css"
import Footer from "../../components/Footer/Footer"
import HomeImages from "../../data/photos.json"

function Home() {
    const [index, setIndex] = useState(0)

    const images = HomeImages.home 

    // auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
            )
        }, 5000) // slide every 5 seconds

        return () => clearInterval(interval)
    }, [images.length])

    // manual slide control
    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? HomeImages.home.length - 1 : prev - 1))
    }

    const nextSlide = () => {
        setIndex((prev) => (prev === HomeImages.home.length - 1 ? 0 : prev + 1))
    }

    return (
        <section className={styles.homeSection}>
            <div className="container">
                <div className={styles.homeContainer}>
                    <div className={styles.slideshow}>
                        <div className={`${styles.slide} ${styles.fade}`}>
                            <img className={styles.homeImg} src={HomeImages.home[index].src} alt={`home section image ${HomeImages.home[index].id}`} />
                        </div>


                        <a className={styles.prev} onClick={prevSlide}>&#10094;</a>
                        <a className={styles.next} onClick={nextSlide}>&#10095;</a>
                    </div>
                    <div>
                        <p>“It’s strange to look at something and feel like it’s showing you what your own mind looks like. A clutter of thoughts behind a barrier — visible, but hard to reach.”</p>
                    </div>
                </div>

                <Footer />
            </div>
        </section>
    )
}

export default Home
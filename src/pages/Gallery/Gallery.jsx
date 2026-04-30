import { useState } from "react"
import galleryImages from "../../data/photos.json"
import Footer from "../../components/Footer/Footer"
import styles from "./Gallery.module.css"

function Gallery() {

    const imagesHTML = galleryImages.gallery.map(photo => {
        const classNames = photo.layout
            .split(" ")
            .map(name => styles[name])
            .join(" ")

        return (<img 
                    key={photo.id}
                    src={photo.src} 
                    className={classNames} 
                    alt={photo.filename} 
                    onClick={() => {
                        setActiveImage(photo.src)
                        setLightboxOpen(true)
                    }}
                />
        )
    })

    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [activeImage, setActiveImage] = useState(null)

    return (
        <section className={styles.gallerySection}>
            <div className="container">
                <div className={styles.gallery}>
                    {imagesHTML}
                </div>
                
                { lightboxOpen && (
                    <div 
                        className={styles.lightbox}
                        onClick={() => setLightboxOpen(false)} 
                    >
                        <span 
                            className={styles.close} 
                            onClick={() => setLightboxOpen(false)}
                        >
                            &times;
                        </span>

                        <img 
                            src={activeImage}
                            className={styles.lightboxImg}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                )}

                <a href="#" className="back-to-top">Back to Top ↑</a>

                <Footer />
            </div>
        </section>
    )
}

export default Gallery
import { useParams } from "react-router-dom"
import articles from "../../data/journal.json"
import styles from "./Journal.module.css"
import Footer from "../../components/Footer/Footer"

function JournalArticle() {
    const { id } = useParams()

    const article = articles.find(a => a.id === id)

    if (!article) return <p>Article not found.</p>

    function renderBlock(block, index) {
        switch (block.type) {
            case "paragraph":
                return <p key={index}>{block.text}</p>

            case "heading":
                return <h5 key={index}>{block.text}</h5>

            case "solo-image":
                return (
                    <img 
                        key={index}
                        src={block.src}
                        alt={block.alt}
                        className={styles.imageSolo}
                    />
                )
            
            case "image-group-3":
                return (
                    <div key={index} className={styles.imagesGroup3}>
                        {block.images.map((img, i) => (
                            <img 
                                key={i} 
                                src={img.src} 
                                alt={img.alt} 
                                style={img.span ? { gridRow: `span ${img.span}` } : {}}
                            />
                        ))}
                    </div>
                )

            case "image-group-2":
                return (
                    <div key={index} className={styles.imagesGroup2}>
                        {block.images.map((img, i) => (
                            <img 
                                key={i}
                                src={img.src}
                                alt={img.alt}
                            />
                        ))}
                    </div>
                )
        }
    }

    return (
        <section className={styles.articleSection}>
            <div className="container">
                <h3>{article.title}</h3>
                <img className={styles.coverImage} src={article.coverImage} alt={article.title} />

                {article.content.map(renderBlock)}
                
                <a href="#" class="back-to-top">Back to Top ↑</a>

                <Footer />
            </div>    
        </section>
    )
}

export default JournalArticle